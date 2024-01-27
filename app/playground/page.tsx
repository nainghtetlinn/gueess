'use client'

import HiddenNumber from './HiddenNumber'
import Control from './Control'

import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/hook'
import { startGame } from '@/lib/features/game'

const PlaygroundPage = () => {
  const dispatch = useAppDispatch()
  const { isGameOver } = useAppSelector(store => store.game)
  const { maxNumber, maxAttempts } = useAppSelector(store => store.setting)

  useEffect(() => {
    dispatch(startGame({ maxAttempts, endNumber: maxNumber }))
  }, [])

  return (
    <>
      <HiddenNumber />
      <Control />
    </>
  )
}

export default PlaygroundPage
