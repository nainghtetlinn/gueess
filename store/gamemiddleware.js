import { gameStarted, startGame, checkAnswer, setLose } from './entities/game'

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const gamemiddleware =
  ({ dispatch, getState }) =>
  next =>
  action => {
    if (action.type === gameStarted.type) {
      next(action)
      const { attempt, maxNumber } = getState().setting
      dispatch(
        startGame({
          correctNumber: getRandom(0, maxNumber),
          endNumber: maxNumber,
          totalAttempt: attempt,
        })
      )
      return
    }

    if (action.type === checkAnswer.type) {
      next(action)
      const { attempt, totalAttempt, isCorrect } = getState().game
      if (attempt > totalAttempt && !isCorrect) {
        dispatch(setLose())
      }
      return
    }
    next(action)
  }

export default gamemiddleware
