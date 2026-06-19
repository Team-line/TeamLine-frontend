import React from 'react'

export const HeroSectionBottun = ({text,onclick,color}) => {
  return (
    <button onClick={onclick}
    className={`bg-[${color}] font-bold p-4 rounded-xl  transition-all duration-500
    ${color==="transparent"?'border-2 border-[#3730a3] hover:bg-[#3730a3] hover:text-white ':'hover:bg-[#120c62] text-white'}
    `}>{text}</button>
  )
}
