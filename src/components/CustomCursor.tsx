import React, { useState, useEffect } from 'react'

const CustomCursor = () => {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);

  const move = (e: MouseEvent) => {
    setXPos(e.clientX);
    setYPos(e.clientY);
  }

  useEffect(() => {
    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
    }
  })

  return (
    <div className='hidden md:block w-[30px] h-[30px] absolute top-0 left-0 z-1001 border-accent border-2 bg-transparent rounded-full translate-x-[-50%] translate-y-[-50%]' style={{
      transform: `translate(${xPos}px, ${yPos}px)`,
      transition: 'transform 20ms ease'
    }}>
    </div>
  )
}

export default CustomCursor