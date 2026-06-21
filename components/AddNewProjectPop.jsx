'use client'
import React, { useState } from 'react'
import api from '@/utils/api'


export const AddNewProjectPop = ({ isOpen,setIsOpen }) => {
    const [projectName,setProjectName]=useState('')
    const [projectDisc,setProjectDisc]=useState('')
    const [statue,setStatus]=useState({type:'',text:''})

    async function handelSubmit(){
        if(!projectDisc || !projectName){

        }
        else{
            try {
                setStatus({
                    type:'loading',
                    text:'جاري انشاء المشروع '
                })

                try {
                    const response=await api.post()
                } catch (error) {
                    
                }
                
            } catch (error) {
                
            }
        }
    }

    return (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-4' dir="rtl">
            <div className='p-6 flex flex-col gap-5 bg-white rounded-2xl w-full max-w-md shadow-2xl'>

                <div className='flex justify-between items-center border-b pb-3 border-gray-100'>
                    <h3 className='text-lg font-bold text-gray-800'>إنشاء مشروع جديد</h3>
                    <button
                        className='transition-all duration-300 w-8 h-8 flex justify-center items-center cursor-pointer hover:bg-gray-100 text-gray-500 hover:text-gray-800 rounded-full text-sm'
                        onClick={()=>{setIsOpen(!isOpen)}}
                    >
                        ✕
                    </button>
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-1.5'>
                        <label className='text-sm font-medium text-gray-700'>اسم المشروع</label>
                        <input
                            type="text"
                            placeholder='أدخل اسم المشروع...'
                            className='outline-none border border-gray-300 p-2.5 rounded-xl focus:border-indigo-700 transition-colors text-sm'
                            onChange={(e)=>{setProjectName(e.target.value)}}
                        />
                    </div>

                    <div className='flex flex-col gap-1.5'>
                        <label className='text-sm font-medium text-gray-700'>الوصف</label>
                        <textarea
                            rows="3"
                            placeholder='اكتب وصفاً مختصراً للمشروع...'
                            className='outline-none border border-gray-300 p-2.5 rounded-xl focus:border-indigo-700 transition-colors text-sm resize-none'
                            onChange={(e)=>{setProjectDisc(e.target.value)}}
                        ></textarea>
                    </div>


                </div>

                <div className='flex gap-3 mt-2 justify-end'>
                    <button
                        className='px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl cursor-pointer transition-colors'
                        onClick={()=>{setIsOpen(!isOpen)}}
                    >
                        إلغاء
                    </button>
                    <button
                        className='px-5 py-2 text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 rounded-xl cursor-pointer transition-colors'
                        onClick={handelSubmit}
                    >
                        إضافة المشروع
                    </button>
                </div>

            </div>
        </div>
    )
}