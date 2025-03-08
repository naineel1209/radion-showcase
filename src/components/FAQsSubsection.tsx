import React, { useState } from 'react'
import { motion } from 'motion/react'

interface FAQsSubsectionProps {
  question: string,
  answer: string
}

const FAQsSubsection = ({ question, answer }: FAQsSubsectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 overflow-hidden">
      <div
        className="flex flex-col items-start cursor-pointer py-4"
        onClick={toggleAnswer}
      >
        <div className="flex justify-between w-full">
          <span className="text-lg font-medium">{question}</span>
          <span className="text-xl">{isOpen ? '▲' : '▼'}</span>
        </div>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className=""
        >
          <div className="text-md text-neutral-500 dark:text-neutral-400 mt-4">
            {
              answer
            }
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FAQsSubsection