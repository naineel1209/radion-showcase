import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const move = (e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  }

  useEffect(() => {
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
    }
  }, []);

  return (
    <motion.div
      className='pointer-events-none hidden md:block w-[30px] h-[30px] fixed top-0 left-0 z-1001 border-accent border-2 bg-transparent rounded-full'
      animate={{
        x: mousePosition.x - 15, // Offset by half the width
        y: mousePosition.y - 15  // Offset by half the height
      }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 150,
        mass: 0.1
      }}
    />
  )
}

export default CustomCursor