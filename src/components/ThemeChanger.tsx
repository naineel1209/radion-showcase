"use client"

import { useTheme } from 'next-themes'
import React from 'react'
import ActionButton from '@/components/ActionButton'
import { Sunrise, Sunset } from '@geist-ui/icons'


const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  return (
    <ActionButton
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
    >
      {theme === 'dark' ? (<div className='flex items-center gap-1'>
        <Sunrise />
        Light
      </div>)
        : (<div className='flex items-center gap-1'>
          <Sunset />
          Dark
        </div>)
      }
    </ActionButton>
  )
}

export default ThemeChanger