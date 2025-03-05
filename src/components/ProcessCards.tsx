import React, { PropsWithChildren } from 'react'
import { motion } from 'motion/react'

interface ProcessCardsProps extends PropsWithChildren {
  icon: React.ReactNode,
  title: string,
  subtitle: string
  leftTerminal?: boolean,
  rightTerminal?: boolean
}

const ProcessCards = ({ icon, title, subtitle, leftTerminal, rightTerminal }: ProcessCardsProps) => {

  const initial = {
    opacity: 0,
    translateX: leftTerminal ? -30 : rightTerminal ? 30 : 0,
    translateY: !leftTerminal && !rightTerminal ? 30 : 0
  }
  const whileInView = {
    opacity: 1,
    translateX: 0,
    translateY: 0
  }

  return (
    <motion.div
      initial={initial}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
      whileInView={whileInView}
      className='rounded-lg p-[1rem] bg-neutral-950 relative'
    >
      <div className='absolute top-0 right-0 w-[20%] h-[20%] bg-button-dark dark:bg-button-dark rounded-md opacity-20 blur-xl bg-gradient-to-r from-transparent'></div>

      <div className='inline-block p-[1rem] bg-black text-accent rounded-lg 
        shadow-[0_0_3px_rgba(255,255,255,0.2)] dark:shadow-[0_0_3px_rgba(255,255,255,0.2)]
        drop-shadow-2xl'>
        {icon}
      </div>
      <div className='pt-4 text-text-light dark:text-text-dark'>
        <h3 className='font-bold text-2xl'>{title}</h3>
        <p className='text-md text-justify pt-1'>{subtitle}</p>
      </div>
    </motion.div>
  )
}

export default ProcessCards