import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { getRandom } from '../util'

type GameType = {
  isHintUsed: boolean
  isGameOver: boolean
  correctNumber: number
  startNumber: number
  endNumber: number
  attemptCount: number
  hint: string
  gameMessage: string
}

const initialState: GameType = {
  isHintUsed: false,
  isGameOver: false,
  correctNumber: 0,
  startNumber: 0,
  endNumber: 0,
  attemptCount: 0,
  hint: '??',
  gameMessage: 'Hidden number could be between',
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    showHint: state => {
      if (!state.isHintUsed) return
      const isEven = state.correctNumber % 2 == 0
      return {
        ...state,
        isHintUsed: true,
        hint: isEven ? 'Even' : 'Odd',
      }
    },

    startGame: (state, action: PayloadAction<{ endNumber: number }>) => {
      state.isHintUsed = false
      state.isGameOver = false
      state.correctNumber = getRandom(0, action.payload.endNumber)
      state.startNumber = 0
      state.endNumber = action.payload.endNumber
      state.attemptCount = 0
      state.hint = '??'
      state.gameMessage = 'Hidden number could be between'

      return state
    },

    checkAnswer: (state, action: PayloadAction<{ answer: number }>) => {
      const answer = action.payload.answer

      if (state.correctNumber === answer) {
        state.gameMessage = 'Congratulations, you win!!'
      } else if (state.correctNumber > answer) {
        state.startNumber = answer
        state.gameMessage = 'Incorrect'
      } else if (state.correctNumber < answer) {
        state.endNumber = answer
        state.gameMessage = 'Incorrect'
      }

      state.attemptCount++

      return state
    },

    setLose: state => {
      state.isGameOver = true
      state.gameMessage = 'You Lose. Try again.'

      return state
    },
  },
})

export const { startGame, checkAnswer, showHint } = gameSlice.actions
export default gameSlice.reducer
