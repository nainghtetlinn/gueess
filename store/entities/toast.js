import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'toast',
  initialState: {
    isShow: false,
    type: '',
    msg: '',
  },
  reducers: {
    showToast: (state, action) => {
      return {
        ...state,
        isShow: true,
        msg: action.payload.message,
        type: action.payload.type,
      }
    },
    hideToast: (state, action) => {
      return { ...state, isShow: false, msg: '', type: '' }
    },
  },
})

export const { showToast, hideToast } = slice.actions
export default slice.reducer
