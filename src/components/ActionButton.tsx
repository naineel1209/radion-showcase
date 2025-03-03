"use client"

import React from 'react'
import { ArrowUpRight, ArrowRight } from '@geist-ui/icons';

interface ActionButtonProps {
  children: React.ReactNode;
  additionalClasses?: string;
  onClick: () => void;
}

const ActionButton = ({ children, onClick, additionalClasses }: ActionButtonProps) => {
  if (!additionalClasses) {
    additionalClasses = '';
  }

  return (
    <button
      role='button'
      className={"group font-bold bg-button-light dark:bg-button-dark hover:bg-button-hover-light hover:dark:bg-button-hover-dark text-button-text-light dark:text-button-text-dark px-4 py-1 rounded-md cursor-pointer transition-all duration-500 overflow-hidden relative " + additionalClasses}
      onClick={onClick}
    >
      <div className="w-full h-full flex flex-col items-center text-sm">
        <span className="transform transition-transform duration-500 group-hover:-translate-y-[500%]">
          <div className="flex items-center gap-2">
            {children} <ArrowUpRight size={16} fontWeight={'bolder'} />
          </div>
        </span>
        <span className="absolute transform transition-transform duration-500 translate-y-[500%] group-hover:translate-y-0">
          <div className="flex items-center gap-2">
            {children} <ArrowRight size={16} fontWeight={'bolder'} />
          </div>
        </span>
      </div>
    </button >
  )
}

export default ActionButton