import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'setting',
  initialState: {
    attempt: 3,
    maxNumber: 100,
  },
  reducers: {
    updated: (setting, action) => {
      const newSetting = { ...setting }
      newSetting.attempt = action.payload.attempt
      newSetting.maxNumber = action.payload.maxNumber

      return { ...newSetting }
    },
  },
})

export const { updated } = slice.actions
export default slice.reducer
