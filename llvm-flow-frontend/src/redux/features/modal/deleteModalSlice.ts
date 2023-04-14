import { createSlice } from '@reduxjs/toolkit'

interface ModalState {
  isDeleteOpen: boolean
}

const initialState: ModalState = {
  isDeleteOpen: false,
}

export const deleteModalSlice = createSlice({
  name: 'deleteModal',
  initialState,
  reducers: {
    setIsDeleteOpenTrue: (state) => {
      state.isDeleteOpen = true
    },
    setIsDeleteOpenFalse: (state) => {
      state.isDeleteOpen = false
    },
  },
})

export const { setIsDeleteOpenFalse, setIsDeleteOpenTrue } =
  deleteModalSlice.actions

export default deleteModalSlice.reducer
