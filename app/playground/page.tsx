'use client'

import Control from './Control'
import HiddenNumber from './HiddenNumber'

import { startGame } from '@/lib/features/game'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import { useEffect } from 'react'

const PlaygroundPage = () => {
  const dispatch = useAppDispatch()
  const { maxNumber, maxAttempts } = useAppSelector(store => store.setting)

  const start = () => {
    dispatch(startGame({ maxAttempts, endNumber: maxNumber }))
  }

  useEffect(start, [])

  return (
    <>
      <HiddenNumber />
      <Control start={start} />
    </>
  )
}

export default PlaygroundPage
