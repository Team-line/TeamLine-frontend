'use client'
import useAuthStore from '@/store/AuthStore'
import React, { useState } from 'react'
import {AddNewWorkSpacePop} from './AddNewWorkSpacePop'

export const ControllerBoardHeader = () => {
    const user=useAuthStore((state)=>state.user)
    const [isOpen,setIsOpen]=useState(false)

    function handelClick(){
      setIsOpen(true)
    }
  return (
    <>
    <div className='p-4 flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center'>
        <div><h3 className='font-bold text-2xl'>أهلاً بك مجدداً، <span className='text-[#3730a3]'>{user?.name.split(' ')[0]}</span></h3>
        <p className='text-gray-500 '>هنا نظرة سريعة على سير أعمالك لهذا اليوم.</p>
        </div>

        <button className='p-4 text-white bg-[#3730a3] drop-shadow-lg rounded-2xl w-full lg:w-fit transition-all duration-500 hover:bg-[#655fbc]'
        onClick={handelClick}
        >+ مساحة عمل جديدة</button>
    </div>
    
    {isOpen && 
     <AddNewWorkSpacePop
    isOpen={isOpen} 
    setIsOpen={setIsOpen} />}
    </>
  )
}
