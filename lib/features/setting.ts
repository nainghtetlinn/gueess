import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type SettingType = {
  maxAttempt: number
  maxNumber: number
  attemptOptions: number[]
}

const initialState: SettingType = {
  maxAttempt: 3,
  maxNumber: 100,
  attemptOptions: [3, 5, 10],
}

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    updateSetting: (
      state,
      action: PayloadAction<{ maxAttempt?: number; maxNumber?: number }>
    ) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { updateSetting } = settingSlice.actions
export default settingSlice.reducer