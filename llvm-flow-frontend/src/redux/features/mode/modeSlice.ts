import { createSlice } from '@reduxjs/toolkit'

interface ModeState {
  isFull: boolean
  isFullIndex: number
}

const initialState: ModeState = {
  isFull: false,
  isFullIndex: 0,
}

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setIsFullTrue: (state) => {
      state.isFull = true
      state.isFullIndex = 1
    },
    setIsFullFalse: (state) => {
      state.isFull = false
      state.isFullIndex = 0
    },
  },
})

export const { setIsFullTrue, setIsFullFalse } = modeSlice.actions

export default modeSlice.reducer
