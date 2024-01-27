import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type SettingType = {
  maxAttempts: number
  maxNumber: number
  attemptOptions: number[]
  maxNumberOptions: number[]
}

const initialState: SettingType = {
  maxAttempts: 3,
  maxNumber: 100,
  attemptOptions: [3, 5, 8],
  maxNumberOptions: [100, 250, 500],
}

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    updateSetting: (
      state,
      action: PayloadAction<{ maxAttempts?: number; maxNumber?: number }>,
    ) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { updateSetting } = settingSlice.actions
export default settingSlice.reducer
