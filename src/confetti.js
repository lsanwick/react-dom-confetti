import React, { useEffect, useImperativeHandle, useRef } from 'react'
import { confetti } from 'dom-confetti'

const defaultStyle = {
  position: 'relative',
}

export default function Confetti({ config, className, style, active }, ref) {
  const confettiRef = useRef()
  useImperativeHandle(ref, () => ({
    fire: () => {
      confetti(confettiRef.current, config)
    },
  }))

  useEffect(() => {
    if (active) {
      confetti(confettiRef.current, config)
    }
  }, [active])

  return (
    <div
      className={className}
      style={{ ...defaultStyle, ...style }}
      ref={confettiRef}
    />
  )
}
