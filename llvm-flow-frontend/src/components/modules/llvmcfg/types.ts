export interface NodeType {
  id: string
  data: { id: string; label: string; name: string }
  type: string
  position: { x: number; y: number }
  isSame: string
}

export interface EdgeType {
  id: string
  source: string
  target: string
  type: string
  label?: string
  labelStyle: object
}
