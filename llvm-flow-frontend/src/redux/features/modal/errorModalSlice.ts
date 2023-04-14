import { createSlice } from '@reduxjs/toolkit'

interface ModalState {
  isErrorOpen: boolean
}

const initialState: ModalState = {
  isErrorOpen: false,
}

export const errorModalSlice = createSlice({
  name: 'errorModal',
  initialState,
  reducers: {
    setIsErrorOpenTrue: (state) => {
      state.isErrorOpen = true
    },
    setIsErrorOpenFalse: (state) => {
      state.isErrorOpen = false
    },
  },
})

export const { setIsErrorOpenFalse, setIsErrorOpenTrue } =
  errorModalSlice.actions

export default errorModalSlice.reducer
