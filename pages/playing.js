import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { gameStarted } from '../store/entities/game'

import Restart from '../components/game/Restart'
import HiddenNum from '../components/game/HiddenNum'
import GamePad from '../components/game/GamePad'

const game = () => {
  const { isCorrect, isLose } = useSelector(store => store.game)
  const dispatch = useDispatch()

  const handleRestart = () => {
    dispatch(gameStarted())
  }

  useEffect(() => {
    dispatch(gameStarted())
  }, [])

  return (
    <>
      <HiddenNum />
      {isCorrect || isLose ? (
        <Restart string="Restart" restart={handleRestart} />
      ) : (
        <GamePad />
      )}
    </>
  )
}

export default game
