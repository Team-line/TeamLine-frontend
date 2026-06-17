'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export const StartNowBotton = () => {
    const router =useRouter()

    function handleClick(){
        router.push('/Login')
    }

  return (
    <button onClick={handleClick}
    className='p-2 px-4 bg-[#F2CA50] rounded-lg transition-all duration-500 hover:bg-[#a38427] cursor-pointer'
    >ابدأ الأن</button>
  )
}
