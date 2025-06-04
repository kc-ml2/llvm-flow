export interface NodeFlow {
  id: string
  data: { id: string; label: string; name: string }
  type: string
  position: { x: number; y: number }
  isSame: string
}

export interface EdgeFlow {
  id: string
  source: string
  target: string
  type: string
  label?: string
  labelStyle: object
}

export interface GraphNode {
  _gvid: number
  name: string
  label: string
  shape: string
}

export interface GraphEdge {
  _gvid: number
  tail: number
  head: number
  tailport?: string
}

export interface GraphJSON {
  name: string
  directed: boolean
  strict: boolean
  label: string
  _subgraph_cnt: number
  objects: GraphNode[]
  edges: GraphEdge[]
}

export interface GraphState {
  before_json: GraphJSON
  before_output?: Array<string>
  after_json: GraphJSON
  after_output?: Array<string>
  file_pass?: string
  isReady?: boolean
  filterID?: number
  beforeg_data?: string
  afterg_data?: string
}