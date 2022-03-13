import { combineReducers } from '@reduxjs/toolkit'
import settingReducer from './entities/setting'
import toastReducer from './entities/toast'
import gameReducer from './entities/game'

export default combineReducers({
  setting: settingReducer,
  toast: toastReducer,
  game: gameReducer,
})
