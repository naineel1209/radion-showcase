"use client"

import { useTheme } from 'next-themes'
import React from 'react'
import ActionButton from './action-button'
import { Sunrise, Sunset } from '@geist-ui/icons'


const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  return (
    <ActionButton
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
    >
      {theme === 'dark' ? <Sunrise /> : <Sunset />}
    </ActionButton>
  )
}

export default ThemeChanger