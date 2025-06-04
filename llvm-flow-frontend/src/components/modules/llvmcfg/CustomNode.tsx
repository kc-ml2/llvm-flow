/* eslint-disable camelcase */
import { memo, useState } from 'react'
import './CustomNode.scss'
import { Handle, Position } from 'react-flow-renderer'
import { useAppSelector } from '@/redux/hook'
import { COLORS } from '@/const/color'

interface NodeElement extends HTMLElement {
  style: CSSStyleDeclaration;
  id: string;
  name: string;
  className: string;
}

interface NodeData {
  block_id: string;
  type: string;
  label: string[];
  isSame: 'yes' | 'no';
}

interface CustomNodeProps {
  data: NodeData & {
    layoutConfig: {
      nodeWidth: number;
      nodeHeight: number;
      labelType: 'simple' | 'detail';
    };
  };
}

// eslint-disable-next-line react/display-name
export default memo(({ data }: CustomNodeProps) => {
  const { before_output, after_output } = useAppSelector((state) => state.graph)
  const { isFull } = useAppSelector((state) => state.mode)
  const [localFullMode, setLocalFullMode] = useState<boolean>(false)
  const { layoutConfig } = data

  const changeColor = (sameNode: NodeElement | null, targetNode: NodeElement | null) => {
    if (!sameNode || !targetNode) return;
    
    if (targetNode.style.backgroundColor === 'rgb(224, 210, 255)') {
      sameNode.style.backgroundColor = 'white'
      targetNode.style.backgroundColor = 'white'
    } else if (targetNode.style.backgroundColor === 'white') {
      sameNode.style.backgroundColor = COLORS.LIGHTPURPLE
      targetNode.style.backgroundColor = COLORS.LIGHTPURPLE
    }
  }

  const makeId = (idWithType: string) => {
    if (idWithType.includes('after')) {
      return idWithType.slice(idWithType.indexOf('after') + 'after'.length)
    } else if (idWithType.includes('before')) {
      return idWithType.slice(idWithType.indexOf('before') + 'before'.length)
    }
  }

  // entry basic block의 경우, sameBlockID가 없으나 label이 같기때문에 같다고 표기
  const findSameBlock = (
    idWithType: string,
    type: string,
    className: string,
  ) => {
    if (before_output && after_output && className === 'yes') {
      const id = makeId(idWithType)
      if (type === 'before' && id) {
        const index = before_output.indexOf(id)
        const sameBlockID = after_output[index]
        if (sameBlockID === undefined) {
          const targetNode = document.getElementById(idWithType) as NodeElement
          const sameNode = document.getElementById('after' + id) as NodeElement
          changeColor(sameNode, targetNode)
        } else {
          const targetNode = document.getElementById(idWithType) as NodeElement
          const sameNode = document.getElementById('after' + sameBlockID) as NodeElement
          changeColor(sameNode, targetNode)
        }
      } else if (type === 'after' && id) {
        const index = after_output.indexOf(id)
        const sameBlockID = before_output[index]
        if (sameBlockID === undefined) {
          const targetNode = document.getElementById(idWithType) as NodeElement
          const sameNode = document.getElementById('before' + id) as NodeElement
          changeColor(sameNode, targetNode)
        } else {
          const targetNode = document.getElementById(idWithType) as NodeElement
          const sameNode = document.getElementById('before' + sameBlockID) as NodeElement
          changeColor(sameNode, targetNode)
        }
      }
    }
  }

  const handleSame = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as NodeElement;
    findSameBlock(
      target.id,
      target.name,
      target.className,
    )
    e.preventDefault()
  }

  const handleFull = () => {
    setLocalFullMode(!localFullMode)
  }

  // 전체 모드가 detail이면 기본적으로 detail 모드
  // 전체 모드가 simple이면 기본적으로 simple 모드
  // localFullMode로 개별 노드의 모드를 토글
  const isDetailMode = layoutConfig.labelType === 'detail' 
    ? !localFullMode  // detail 모드에서는 localFullMode가 true일 때 simple로
    : localFullMode   // simple 모드에서는 localFullMode가 true일 때 detail로

  // detail 모드일 때는 큰 크기, simple 모드일 때는 작은 크기
  const nodeWidth = isDetailMode ? 350 : 45
  const nodeHeight = isDetailMode ? 300 : 45

  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        id="a"
        isConnectable={false}
        style={{
          left: '20%',
          right: 'auto',
          background: 'transparent',
          border: 'transparent',
        }}
      />
      <Handle
        type="source"
        position={Position.Top}
        id="b"
        isConnectable={false}
        style={
          `${data.isSame}` === 'yes'
            ? {
                right: '20%',
                left: 'auto',
                background: COLORS.PURPLE,
                border: 'none',
                borderRadius: '0px',
                height: '3.5px',
              }
            : {
                right: '20%',
                left: 'auto',
                background: COLORS.GRAY,
                border: 'none',
                borderRadius: '0px',
                height: '3.5px',
              }
        }
      />
      <button
        className={`${data.isSame}`}
        onClick={handleSame}
        onDoubleClick={handleFull}
        id={data.block_id}
        name={data.type}
        style={{ 
          backgroundColor: 'white',
          width: `${nodeWidth}px`,
          height: `${nodeHeight}px`,
          transition: 'all 0.3s ease',
          overflow: 'auto',
          whiteSpace: isDetailMode ? 'normal' : 'nowrap',
          padding: isDetailMode ? '10px' : '0',
          fontSize: isDetailMode ? '14px' : '12px',
          textAlign: isDetailMode ? 'left' : 'center'
        }}
      >
        {isDetailMode ? (
          <div>
            {data.label.map(function (item: string, i: number) {
              return <p key={i}>{item}</p>
            })}
          </div>
        ) : (
          <>{data.block_id.substring(data.block_id.indexOf('%'))}</>
        )}
      </button>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        isConnectable={false}
        style={
          `${data.isSame}` === 'yes'
            ? {
                right: '20%',
                left: 'auto',
                background: COLORS.PURPLE,
                border: 'none',
                borderRadius: '0px',
                height: '3.5px',
              }
            : {
                right: '20%',
                left: 'auto',
                background: COLORS.GRAY,
                border: 'none',
                borderRadius: '0px',
                height: '3.5px',
              }
        }
      />
      <Handle
        type="target"
        position={Position.Left}
        id="b"
        isConnectable={false}
        style={{
          background: 'transparent',
          border: 'transparent',
        }}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="b"
        isConnectable={false}
        style={{
          background: 'transparent',
          border: 'transparent',
        }}
      />
    </>
  )
})
