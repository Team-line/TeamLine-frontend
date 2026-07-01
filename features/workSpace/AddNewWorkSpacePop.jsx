'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCreateWorkSpace } from './useCreateWorkSpace' // 👈 استيراد الهوك الجديد
import { toast } from 'react-hot-toast'

export const AddNewWorkSpacePop = ({ isOpen, setIsOpen }) => {
    //? States 
    const [projectName, setProjectName] = useState('')
    const [projectDisc, setProjectDisc] = useState('')
    
    const router = useRouter()
    //? hooks using
    const { isCreating, createWorkspace } = useCreateWorkSpace() 
    

    if (!isOpen) return null;

    const handleClose = () => {
        setProjectName('')
        setProjectDisc('')
        setIsOpen(false)
    }

    function handelSubmit() {
        if (!projectDisc.trim() || !projectName.trim()) {
            toast.error('الرجاء ملء جميع الحقول المفروضة')
            return;
        }

        //? Mutation من React Query
        createWorkspace(
            { name: projectName, description: projectDisc },
            {
                onSuccess: () => {
                    handleClose();
                    router.push('/dashboard/WorkSpace');
                }
            }
        );
    }

    return (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-4' dir="rtl">
            <div className='p-6 flex flex-col gap-5 bg-white rounded-2xl w-full max-w-md shadow-2xl'>

                {/* الرأس */}
                <div className='flex justify-between items-center border-b pb-3 border-gray-100'>
                    <h3 className='text-lg font-bold text-gray-800'>إنشاء مساحة عمل جديدة</h3>
                    <button
                        className='transition-all duration-300 w-8 h-8 flex justify-center items-center cursor-pointer hover:bg-gray-100 text-gray-500 hover:text-gray-800 rounded-full text-sm'
                        onClick={handleClose}
                        disabled={isCreating}
                    >
                        ✕
                    </button>
                </div>

                {/* الحقول */}
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-1.5'>
                        <label className='text-sm font-medium text-gray-700'>اسم مساحة العمل</label>
                        <input
                            type="text"
                            value={projectName}
                            disabled={isCreating}
                            placeholder='أدخل اسم مساحة العمل...'
                            className='outline-none border border-gray-300 p-2.5 rounded-xl focus:border-indigo-700 transition-colors text-sm disabled:bg-gray-50'
                            onChange={(e) => setProjectName(e.target.value)}
                        />
                    </div>

                    <div className='flex flex-col gap-1.5'>
                        <label className='text-sm font-medium text-gray-700'>الوصف</label>
                        <textarea
                            rows="3"
                            value={projectDisc}
                            disabled={isCreating}
                            placeholder='اكتب وصفاً مختصراً لمساحة العمل...'
                            className='outline-none border border-gray-300 p-2.5 rounded-xl focus:border-indigo-700 transition-colors text-sm resize-none disabled:bg-gray-50'
                            onChange={(e) => setProjectDisc(e.target.value)}
                        ></textarea>
                    </div>
                </div>

                {/* أزرار التحكم */}
                <div className='flex gap-3 mt-2 justify-end'>
                    <button
                        className='px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                        onClick={handleClose}
                        disabled={isCreating}
                    >
                        إلغاء
                    </button>
                    
                    <button
                        className='px-5 py-2 text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 rounded-xl cursor-pointer transition-colors disabled:bg-indigo-400 disabled:cursor-not-allowed'
                        onClick={handelSubmit}
                        disabled={isCreating}
                    >
                        {isCreating ? 'جاري الإنشاء...' : 'إضافة مساحة عمل'}
                    </button>
                </div>

            </div>
        </div>
    )
}