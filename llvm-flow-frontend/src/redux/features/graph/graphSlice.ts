// import { NodeType, EdgeType } from '@/components/modules/llvmcfg/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import exBefore from '../../../exData/exBefore.json'
import exAfter from '../../../exData/exAfter.json'

interface GraphState {
  before_json?: any
  before_output?: Array<string>
  after_json?: any
  after_output?: Array<string>
  file_pass?: string
  isReady?: boolean
  filterID?: number
  beforeg_data?: string
  afterg_data?: string
}

const initialState: GraphState = {
  before_json: exBefore,
  before_output: ['Function', '%12', '%14', '%15', '%34', 'Function'],
  after_json: exAfter,
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
