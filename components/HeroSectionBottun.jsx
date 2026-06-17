import React from 'react'

export const HeroSectionBottun = ({text,onclick,color}) => {
  return (
    <button onClick={onclick}
    className={`bg-[${color}] p-4 rounded-xl ${color==="transparent"?'border-2 dark:border-[#C8C8B0] dark:text-[#C8C8B0]':''} transition-all duration-500
    ${color==="transparent"?'hover:bg-[#C8C8B0] hover:text-black':'hover:bg-[#a38427]'}
    `}>{text}</button>
  )
}
