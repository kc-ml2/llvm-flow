// import { NodeType, EdgeType } from '@/components/modules/llvmcfg/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PathState {
  pathData: string | undefined
}

const initialState: PathState = {
  pathData: undefined,
}

export const pathSlice = createSlice({
  name: 'path',
  initialState,
  reducers: {
    setPathData: (state, { payload }: PayloadAction<string>) => {
      state.pathData = payload
    },
  },
})

export const { setPathData } = pathSlice.actions

export default pathSlice.reducer
