'use client'
import React from 'react'

export const LightText = ({text,ballColor}) => {
  return (
    <div className='flex gap-1 items-center p-1 px-2 border-2 border-[#F2CA50] rounded-4xl dark:text-[#F2CA50] mb-6 w-fit'>
        <p className={`w-2 h-2 rounded-full bg-[${ballColor}]`}></p>
        <p className='text-[10px]'>{text}</p>
        </div>
  )
}
