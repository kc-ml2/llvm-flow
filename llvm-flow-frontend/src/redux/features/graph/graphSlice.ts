// import { NodeType, EdgeType } from '@/components/modules/llvmcfg/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import exBefore from '../../../exData/exBefore.json'
import exAfter from '../../../exData/exAfter.json'
import { GraphJSON, GraphNode, GraphEdge, GraphState } from '@/types/graph'

const initialState: GraphState = {
  before_json: exBefore as GraphJSON,
  before_output: ['Function', '%12', '%14', '%15', '%34', 'Function'],
  after_json: exAfter as GraphJSON,
  after_output: ['1:', '%12', '%14', '%15', '%33', '2:'],
  file_pass: '-float2int -coro-elide -ipconstprop -simplifycfg',
  isReady: false,
  filterID: undefined,
  beforeg_data: undefined,
  afterg_data: undefined,
}

export const graphSlice = createSlice({
  name: 'graph',
  initialState,
  reducers: {
    setGraphData: (state, { payload }: PayloadAction<GraphState>) => {
      state.before_json = payload.before_json
      state.before_output = payload.before_output
      state.after_json = payload.after_json
      state.after_output = payload.after_output
      state.file_pass = payload.file_pass
      state.isReady = true
      state.filterID = payload.filterID
      state.beforeg_data = payload.beforeg_data
      state.afterg_data = payload.afterg_data
    },
  },
})

export const { setGraphData } = graphSlice.actions

export default graphSlice.reducer
