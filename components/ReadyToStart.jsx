'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export const ReadyToStart = () => {
  const router=useRouter()
  return (
    <div className='w-full pt-20 mb-20'>
      <div className='container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
        <div className='p-8 w-full text-white bg-[#3730a3] rounded-4xl flex flex-col items-center justify-center gap-8'>
            <h3 className='text-5xl font-bold'>جاهز لرفع كفاءة فريقك اليوم؟</h3>
            <p className='text-gray-300 '>انضم إلى آلاف الشركات التي تثق في مسار لإدارة أهم أعمالها.</p>
            <button className='p-4 bg-white font-bold text-[#3730a3] rounded-xl drop-shadow-lg transition-all duration-500 hover:scale-110'
            onClick={()=>{router.push('/Register')}}
            >ابدأ التجربة معنا</button>
        </div>
        </div>
    </div>
  )
}
