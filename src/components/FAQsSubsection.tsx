import React, { useState } from 'react'

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
    <div className="faq-item border-b border-gray-200">
      <div
        className="faq-question flex justify-between items-center cursor-pointer py-4"
        onClick={toggleAnswer}
      >
        <span className="text-lg font-medium">{question}</span>
        <span className="text-xl">{isOpen ? '▲' : '▼'}</span>
      </div>
      <div
        className={`faq-answer overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}
      >
        <div className="py-2">
          {answer}
        </div>
      </div>
    </div>
  )
}

export default FAQsSubsection