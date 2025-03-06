import React, { PropsWithChildren } from 'react'
import { motion } from 'motion/react'
import ActionButton from './ActionButton'

interface PlansBoxProps extends PropsWithChildren {
  icon: React.ReactNode,
  name: string,
  pricePerMonth: number,
  description: string,
  features: string[],
  leftTerminal?: boolean,
  rightTerminal?: boolean
}

const PlansBox = ({ icon, name, pricePerMonth, description, features, leftTerminal, rightTerminal }: PlansBoxProps) => {
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

      className='flex flex-col items-start rounded-lg p-[1rem] bg-neutral-900 relative gap-2'>

      <div className='flex items-center gap-4 text-xl'>
        <div className='inline-block p-[0.3rem] bg-black text-accent rounded-lg 
        shadow-[0_0_3px_rgba(255,255,255,0.2)] dark:shadow-[0_0_3px_rgba(255,255,255,0.2)]
        drop-shadow-2xl'>
          {icon}
        </div>
        <div className='text-neutral-500'>
          {name}
        </div>
      </div>
      <div>
        <div className='text-5xl font-bold text-text-light dark:text-text-dark pt-4'>
          ${pricePerMonth}
          <span className='text-lg text-neutral-500 dark:text-neutral-400
        font-normal align-top'> / month</span>
        </div>
        <div className='pt-2 text-neutral-100'>
          <p className='text-md text-justify pt-1 text-neutral-500'>
            {description}
          </p>
        </div>
      </div>
      <div className='w-[100%] my-2'>
        <ActionButton additionalClasses='w-[100%] py-2' onClick={() => console.log('hola amigo, kaise ho theek ho?')} >
          Get Started with {name}
        </ActionButton>
      </div>
      <ul className='text-lg font-bold text-neutral-100 dark:text-neutral-200 pt-4'>
        {
          features.map((feature, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              className='text-neutral-500 dark:text-neutral-400 group'>
              <motion.span
                whileHover={{ rotate: 180 }}
                className='text-accent mr-2 group-hover:rotate-45 duration-100'>+</motion.span> {feature}
            </motion.li>
          ))
        }
      </ul>
    </motion.div >
  )
}

export default PlansBox