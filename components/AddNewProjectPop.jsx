'use client'
import React, { useState } from 'react'
import useBoardStore from '@/store/BoardStore'
import { useRouter } from 'next/router'

export const AddNewProjectPop = ({ isOpen, setIsOpen }) => {
    //todo State Elements
    const [projectName, setProjectName] = useState('')
    const [projectDisc, setProjectDisc] = useState('')
    const [status, setStatus] = useState({ type: '', text: '' })

    
    //todo Zustand Elements
    const addProject = useBoardStore((state) => state.addProject)

    if (!isOpen) return null;

    const handleClose = () => {
        setProjectName('')
        setProjectDisc('')
        setStatus({ type: '', text: '' })
        setIsOpen(false)
    }

    async function handleSubmit() {
        if (!projectDisc || !projectName) {
            setStatus({ type: 'error', text: 'الرجاء ملء جميع الحقول' })
            return;
        }
        const ProjectData = {
        name: projectName,
        description: projectDisc
        }
        try {
            setStatus({ type: 'loading', text: 'جاري إنشاء المشروع...' })
            const response = await addProject(ProjectData)
            if (response) {
                setStatus({ type: 'success', text: 'تم إنشاء المشروع بنجاح! 🎉' })

                setTimeout(() => {
                    handleClose()
                }, 1000)
            }
        } catch (error) {
            setStatus({
                type: 'error',
                text: error.response?.data?.message || 'فشل إنشاء المشروع'
            })
        }
    }

    return (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-4' dir="rtl">
            <div className='p-6 flex flex-col gap-5 bg-white rounded-2xl w-full max-w-md shadow-2xl'>

                {/* الرأس */}
                <div className='flex justify-between items-center border-b pb-3 border-gray-100'>
                    <h3 className='text-lg font-bold text-gray-800'>إنشاء مشروع جديد</h3>
                    <button
                        className='transition-all duration-300 w-8 h-8 flex justify-center items-center cursor-pointer hover:bg-gray-100 text-gray-500 hover:text-gray-800 rounded-full text-sm'
                        onClick={handleClose}
                        disabled={status.type === 'loading'}
                    >
                        ✕
                    </button>
                </div>

                {/* الحقول */}
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-1.5'>
                        <label className='text-sm font-medium text-gray-700'>اسم المشروع</label>
                        <input
                            type="text"
                            value={projectName}
                            disabled={status.type === 'loading' || status.type === 'success'}
                            placeholder='أدخل اسم المشروع...'
                            className='outline-none border border-gray-300 p-2.5 rounded-xl focus:border-indigo-700 transition-colors text-sm disabled:bg-gray-50'
                            onChange={(e) => setProjectName(e.target.value)}
                        />
                    </div>

                    <div className='flex flex-col gap-1.5'>
                        <label className='text-sm font-medium text-gray-700'>الوصف</label>
                        <textarea
                            rows="3"
                            value={projectDisc}
                            disabled={status.type === 'loading' || status.type === 'success'}
                            placeholder='اكتب وصفاً مختصراً للمشروع...'
                            className='outline-none border border-gray-300 p-2.5 rounded-xl focus:border-indigo-700 transition-colors text-sm resize-none disabled:bg-gray-50'
                            onChange={(e) => setProjectDisc(e.target.value)}
                        ></textarea>
                    </div>
                </div>

                {status.text && (
                    <div className={`text-xs font-semibold p-2.5 rounded-lg border ${status.type === 'error'
                            ? 'bg-red-50 text-red-600 border-red-100'
                            : status.type === 'success'
                                ? 'bg-green-50 text-green-600 border-green-100'
                                : 'bg-indigo-50 text-indigo-600 border-indigo-100'
                        }`}>
                        {status.text}
                    </div>
                )}

                {/* أزرار التحكم */}
                <div className='flex gap-3 mt-2 justify-end'>
                    <button
                        className='px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                        onClick={handleClose}
                        disabled={status.type === 'loading' || status.type === 'success'}
                    >
                        إلغاء
                    </button>

                    <button
                        className='px-5 py-2 text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 rounded-xl cursor-pointer transition-colors disabled:bg-indigo-400 disabled:cursor-not-allowed'
                        onClick={handleSubmit}
                        disabled={status.type === 'loading' || status.type === 'success'}
                    >
                        {status.type === 'loading'
                            ? 'جاري الإنشاء...'
                            : status.type === 'success'
                                ? 'تم بنجاح!'
                                : 'إضافة المشروع'}
                    </button>
                </div>

            </div>
        </div>
    )
}