import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  nickname: string | undefined
}

const initialState: AuthState = {
  nickname: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<string>) => {
      state.nickname = payload
    },
    setLogout: (state) => {
      state.nickname = undefined
    },
  },
})

export const { setAuthData, setLogout } = authSlice.actions

export default authSlice.reducer
