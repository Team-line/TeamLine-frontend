import React from 'react'
import Link from 'next/link'
export const ControllerBoardDetailsActiveProjectsBox = () => {
  return (
    <div className='p-4 bg-white rounded-xl border-2 border-gray-500'>
        <div className='flex justify-between items-center  border-b-gray-500'>
            <h3>المشاريع النشطة</h3>
            <Link href={'/projects'}
            className='text-[#3730a3] font-bold transition-all duration-500 hover:underline'
            >عرض الكل </Link>
        </div>
        </div>
  )
}
