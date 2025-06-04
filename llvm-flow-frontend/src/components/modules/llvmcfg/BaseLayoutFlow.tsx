import { useCallback, useState } from 'react'
import ReactFlow, {
  addEdge,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
  MiniMap,
  Background,
  Node,
  Edge,
  MarkerType,
  Connection,
  Position,
} from 'react-flow-renderer'
import dagre from 'dagre'
import CustomNode from './CustomNode'
import ResizableBox from '@/components/modules/resizableBox/ResizableBox'
import './LayoutFlow.scss'
import buttons from '@/styles/Button.module.scss'
import { COLORS } from '@/const/color'
import { GraphJSON, GraphNode, GraphEdge } from '@/types/graph'

const nodeTypes = {
  selectorNode: CustomNode,
}

interface LayoutConfig {
  nodeWidth: number
  nodeHeight: number
  defaultPosition: [number, number]
  minZoom: number
  labelType: 'simple' | 'detail'
}

export interface BaseLayoutFlowProps {
  llvmJson: GraphJSON
  llvmJson_compare: GraphJSON
  llvmOutput?: string[]
  title: string
  layoutConfig: LayoutConfig
}

interface ExtendedNode extends GraphNode {
  isSame: 'yes' | 'no'
}

interface FlowNodeData {
  type: string
  label: string[]
  name: string
  id: string
  isSame: 'yes' | 'no'
  block_id: string
  layoutConfig: LayoutConfig
}

type FlowNode = Node<FlowNodeData>

const BaseLayoutFlow = ({
  llvmJson,
  llvmJson_compare,
  llvmOutput = [],
  title,
  layoutConfig,
}: BaseLayoutFlowProps) => {
  const [vertical, setVertical] = useState<boolean>(true)
  const [horizontal, setHorizontal] = useState<boolean>(false)
  const nodeinitial = llvmJson.objects
  console.dir(llvmOutput)
  const node = nodeinitial.map((object: GraphNode) => {
    return { ...object, isSame: 'no' as const }
  })
  const edge = llvmJson.edges || [
    {
      _gvid: 0,
      tail: 0,
      head: 0,
    },
  ]

  const numberOfNode = llvmJson.objects.length
  const numberOfEdge = edge.length

  const position = { x: 0, y: 0 }

  // step2) basicblock id 지정 (ex. %210)
  const blockID = node.map(({ label }: ExtendedNode) =>
    label.replace(/[{}]/g, '').split(/\\l/)[0].slice(0, -1),
  )

  // step3) 같은 basicblock 찾기 + entry basic block의 경우 따로 비교
  function checkSameBlock(
    json: string[],
    output: string[],
    data: ExtendedNode[],
  ) {
    for (let i = 0; i < json.length; i++) {
      for (let j = 0; j < output.length; j++) {
        if (json[i] === output[j]) {
          data[i].isSame = 'yes'
        }
      }
    }
  }
  checkSameBlock(blockID, llvmOutput, node)

  function checkSameEntryBlock(
    json: GraphNode[],
    json_compare: GraphNode[],
    data: ExtendedNode[],
  ) {
    if (json[0].label === json_compare[0].label) {
      data[0].isSame = 'yes'
    }
  }
  checkSameEntryBlock(llvmJson.objects, llvmJson_compare.objects, node)

  // step*) edge tailport와 node 정보 연결하기
  function connectTailport(
    tailport: string | undefined,
    tail: number,
  ): string | null {
    if (tailport) {
      const tailLabel = node.find(
        (node: ExtendedNode) => node._gvid === tail,
      )?.label
      if (!tailLabel) return null
      const text = tailLabel.substring(tailLabel.indexOf(tailport) + 3)
      if (text.includes('|')) {
        return text.substring(0, text.indexOf('|'))
      } else {
        return text.substring(0, text.indexOf('}'))
      }
    } else {
      return null
    }
  }

  // setp**) 위에서 아래로 target이 되는 경우, targetHandleID 설정
  function setTargetHandleID(
    tail: number,
    head: number,
  ): 'a' | 'b' | undefined {
    const tailNode = node.find((node: ExtendedNode) => node._gvid === tail)
    const headNode = node.find((node: ExtendedNode) => node._gvid === head)
    if (!tailNode || !headNode) return undefined

    const tailLabel = tailNode.label
      .replace(/[{}]/g, '')
      .split(/\\l/)[0]
      .slice(0, -1)

    const headLabel = headNode.label
      .replace(/[{}]/g, '')
      .split(/\\l/)[0]
      .slice(0, -1)

    if (tailLabel > headLabel) {
      return 'b'
    } else if (tailLabel < headLabel) {
      return 'a'
    }
    return undefined
  }

  // step4) node, edge 정의
  const initialNode: Node<FlowNodeData>[] = node.map(
    ({ _gvid, name, label, isSame }: ExtendedNode) => ({
      id: _gvid.toString(),
      data: {
        type: title,
        label: label.replace(/[{}]/g, '').split(/\\l/),
        name: name.replace('Node', ''),
        id: _gvid.toString(),
        isSame: isSame,
        block_id:
          title + label.replace(/[{}]/g, '').split(/\\l/)[0].slice(0, -1),
        layoutConfig: layoutConfig,
      },
      type: 'selectorNode',
      position: position,
    }),
  )

  const initialEdge = edge.map(
    ({ _gvid, tail, head, tailport }: GraphEdge) => ({
      id: _gvid.toString(),
      source: tail.toString(),
      target: head.toString(),
      type: 'smoothstep',
      animated: true,
      targetHandle: setTargetHandleID(tail, head),
      sourceHandle: setTargetHandleID(tail, head),
      label: connectTailport(tailport, tail),
      labelStyle: { fontWeight: 600, fontSize: '1rem' },
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    }),
  )

  // step5) react-flow 설정
  // dagre 레이아웃 적용
  const dagreGraph = new dagre.graphlib.Graph()
  dagreGraph.setDefaultEdgeLabel(() => ({}))
  const getLayoutedElements = (
    nodes: Node<FlowNodeData>[],
    edges: Edge[],
    direction: 'TB' | 'LR' = 'TB',
  ) => {
    const isHorizontal = direction === 'LR'
    dagreGraph.setGraph({ rankdir: direction })
    nodes.forEach((node) => {
      dagreGraph.setNode(node.id, {
        width: layoutConfig.nodeWidth,
        height: layoutConfig.nodeHeight,
      })
    })
    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target)
    })
    dagre.layout(dagreGraph)
    nodes.forEach((node) => {
      const nodeWithPosition = dagreGraph.node(node.id)
      node.targetPosition = isHorizontal ? Position.Left : Position.Top
      node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom
      node.position = {
        x: nodeWithPosition.x - layoutConfig.nodeWidth / 2,
        y: nodeWithPosition.y - layoutConfig.nodeHeight / 2,
      }
      return node
    })
    return { nodes, edges }
  }
  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    initialNode,
    initialEdge,
  )

  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges)

  const nodeColor = (node: Node<FlowNodeData>) => {
    switch (node.data.isSame) {
      case 'yes':
        return COLORS.PURPLE
      case 'no':
        return COLORS.GRAY
      default:
        return COLORS.GRAY
    }
  }

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((eds) =>
        addEdge(
          { ...params, type: ConnectionLineType.SmoothStep, animated: true },
          eds,
        ),
      ),
    [],
  )

  const onLayout = useCallback(
    (direction: 'TB' | 'LR') => {
      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(nodes, edges, direction)
      setNodes([...layoutedNodes])
      setEdges([...layoutedEdges])
    },
    [nodes, edges],
  )

  return (
    <ResizableBox>
      <h4>
        {title} &nbsp;&nbsp;
        <i>
          [Node: {numberOfNode}, Edge: {numberOfEdge}]
        </i>
      </h4>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        connectionLineType={ConnectionLineType.SmoothStep}
        defaultPosition={layoutConfig.defaultPosition}
        defaultZoom={0.5}
        minZoom={layoutConfig.minZoom}
      >
        <Background />
        <MiniMap
          nodeColor={nodeColor}
          nodeStrokeWidth={3}
          maskColor={COLORS.DARKGRAY}
        />
      </ReactFlow>
      <div className="controls">
        <button
          onClick={() => {
            onLayout('TB')
            setVertical(true)
            setHorizontal(false)
          }}
          className={vertical === true ? buttons.mini_fill : buttons.mini_gray}
        >
          vertical layout
        </button>
        <button
          onClick={() => {
            onLayout('LR')
            setVertical(false)
            setHorizontal(true)
          }}
          className={
            horizontal === true ? buttons.mini_fill : buttons.mini_gray
          }
        >
          horizontal layout
        </button>
      </div>
    </ResizableBox>
  )
}

export default BaseLayoutFlow
