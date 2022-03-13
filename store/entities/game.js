import { createSlice, createAction } from '@reduxjs/toolkit'

const defaultInitial = {
  isLose: false,
  isCorrect: false,
  useHint: false,
  startNumber: 0,
  attempt: 1,
  hiddenNumber: '??',
  gameMessage: 'Hidden number could be between',
}

const slice = createSlice({
  name: 'game',
  initialState: {
    isLose: false,
    isCorrect: false,
    useHint: false,
    correctNumber: null,
    startNumber: 0,
    endNumber: null,
    attempt: 1,
    totalAttempt: null,
    hiddenNumber: '??',
    gameMessage: 'Hidden number could be between',
  },
  reducers: {
    showHint: (state, action) => {
      const check = state.correctNumber % 2
      const checked = check ? 'Odd' : 'Even'
      return { ...state, useHint: true, hiddenNumber: checked }
    },
    startGame: (state, action) => {
      return {
        ...defaultInitial,
        correctNumber: action.payload.correctNumber,
        endNumber: action.payload.endNumber,
        totalAttempt: action.payload.totalAttempt,
      }
    },
    checkAnswer: (state, action) => {
      const answer = Number(action.payload.answer)
      const temp = { ...state }
      const check = temp.correctNumber - answer // + or - or 0
      temp.attempt += 1

      if (check > 0) {
        temp.startNumber = answer
      }
      if (check < 0) {
        temp.endNumber = answer
      }
      if (check === 0) {
        temp.isCorrect = true
        temp.gameMessage = 'Congratulations, you win!!'
      }
      return { ...temp }
    },
    setLose: (state, action) => {
      return { ...state, isLose: true, gameMessage: 'You Lose. Try again.' }
    },
  },
})

export const { showHint, startGame, checkAnswer, setLose } = slice.actions

export const gameStarted = createAction('gameStarted')

export default slice.reducer
