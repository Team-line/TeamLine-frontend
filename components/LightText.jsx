'use client'
import React from 'react'

export const LightText = ({ text, ballColor }) => {
  return (
    <div className={`flex gap-1 font-bold items-center p-1 px-2 border-2 border-[#3730a3] rounded-4xl dark:text-[#F2CA50] mb-6 w-fit
    ${ballColor === '#22C55E' ? "absolute top-5 right-10 rounded-lg" : ''}`}>
        <p 
          className='w-2 h-2 rounded-full' 
          style={{ backgroundColor: ballColor }}
        ></p>
        <p className='text-[10px]'>{text}</p>
    </div>
  )
}