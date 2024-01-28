import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './features/game'
import settingReducer from './features/setting'

export const makeStore = () => {
  return configureStore({
    reducer: { game: gameReducer, setting: settingReducer },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
