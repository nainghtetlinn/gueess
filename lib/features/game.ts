import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import { getRandom } from '../util'

type GameType = {
  isHintUsed: boolean
  isGameOver: boolean
  correctNumber: number
  startNumber: number
  endNumber: number
  maxAttempts: number
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
  maxAttempts: 0,
  attemptCount: 0,
  hint: '??',
  gameMessage: 'Hidden number could be between',
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    showHint: state => {
      if (state.isHintUsed || state.isGameOver) return

      const isEven = state.correctNumber % 2 == 0
      return {
        ...state,
        isHintUsed: true,
        hint: isEven ? 'Even' : 'Odd',
      }
    },

    startGame: (
      state,
      action: PayloadAction<{ endNumber: number; maxAttempts: number }>,
    ) => {
      state.isHintUsed = false
      state.isGameOver = false
      state.correctNumber = getRandom(0, action.payload.endNumber)
      state.startNumber = 0
      state.endNumber = action.payload.endNumber
      state.maxAttempts = action.payload.maxAttempts
      state.attemptCount = 0
      state.hint = '??'
      state.gameMessage = 'Hidden number could be between'

      return state
    },

    guessNumber: (state, action: PayloadAction<{ guess: number }>) => {
      if (state.isGameOver) return
      if (state.attemptCount === state.maxAttempts) return

      const guess = action.payload.guess
      if (guess < state.startNumber || guess > state.endNumber) return

      state.attemptCount++

      if (state.correctNumber === guess) {
        state.gameMessage = 'Congratulations, you win!!'
        state.isGameOver = true

        return state
      } else if (state.correctNumber > guess) {
        state.startNumber = guess + 1
        state.gameMessage = 'Incorrect'
      } else if (state.correctNumber < guess) {
        state.endNumber = guess - 1
        state.gameMessage = 'Incorrect'
      }

      if (state.attemptCount === state.maxAttempts) {
        state.isGameOver = true
        state.gameMessage = 'You Lose. Try again.'
      }

      return state
    },
  },
})

export const { startGame, guessNumber, showHint } = gameSlice.actions
export default gameSlice.reducer
