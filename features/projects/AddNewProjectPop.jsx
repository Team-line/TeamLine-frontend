'use client'
import React from 'react'
import useBoardStore from '@/store/BoardStore'
import { useCreateProject } from '@/features/projects/useCreateProject'
import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form'

export const AddNewProjectPop = ({ isOpen, setIsOpen }) => {
    //? React Hook Form
    const { 
        register, 
        handleSubmit, 
        reset,
        formState: { errors } 
    } = useForm({
        defaultValues: {
            projectName: '',
            projectDisc: ''
        }
    })

    //? React Query Hooks
    const { isCreating, createProject } = useCreateProject()

    //? Zustand Store
    const workspaceId = useBoardStore((state) => state.WorkSpaceId)

    if (!isOpen) return null;

    const handleClose = () => {
        reset();
        setIsOpen(false);
    };

    // دالة الإرسال التي يتم تمريرها لـ handleSubmit
    const onSubmitData = (data) => {
        if (!workspaceId) {
            toast.error('خطأ: لم يتم تحديد مساحة العمل الحالية!');
            console.error("Workspace ID is missing from useBoardStore");
            return;
        }

        createProject({ workspaceId, newProject:{ 
                    name: data.projectName, 
                    description: data.projectDisc 
                    } 
            },
            {
                onSuccess: () => {
                    console.log("تم الاستجابة بنجاح وإغلاق النافذة");
                    handleClose();
                },
                onError: (error) => {
                    console.error("خطأ من السيرفر  :", error);
                }
            }
        );
    }

    return (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-4' dir="rtl">
            
            {/* تأكد أن الـ <form> يغلق كافة العناصر والأزرار بداخله */}
            <form 
                onSubmit={handleSubmit(onSubmitData)} 
                className='p-6 flex flex-col gap-5 bg-white rounded-2xl w-full max-w-md shadow-2xl'
            >
                {/* الرأس */}
                <div className='flex justify-between items-center border-b pb-3 border-gray-100'>
                    <h3 className='text-lg font-bold text-gray-800'>إنشاء مشروع جديد</h3>
                    <button
                        type="button" // تأكيد أنه زر إغلاق عادي وليس Submit
                        className='transition-all duration-300 w-8 h-8 flex justify-center items-center cursor-pointer hover:bg-gray-100 text-gray-500 hover:text-gray-800 rounded-full text-sm'
                        onClick={handleClose}
                        disabled={isCreating}
                    >
                        ✕
                    </button>
                </div>

                {/* الحقول */}
                <div className='flex flex-col gap-4'>
                    {/* حقل اسم المشروع */}
                    <div className='flex flex-col gap-1.5'>
                        <label className='text-sm font-medium text-gray-700'>اسم المشروع</label>
                        <input
                            type="text"
                            disabled={isCreating}
                            placeholder='أدخل اسم المشروع...'
                            className={`outline-none border p-2.5 rounded-xl focus:border-indigo-700 transition-colors text-sm disabled:bg-gray-50 ${
                                errors.projectName ? 'border-red-500 focus:border-red-500' : 'border-gray-300'
                            }`}
                            {...register('projectName', { 
                                required: 'اسم المشروع مطلوب وعملي',
                                validate: value => !!value.trim() || 'لا يمكن أن يكون الاسم فارغاً'
                            })}
                        />
                        {errors.projectName && (
                            <span className='text-xs text-red-500 font-medium'>{errors.projectName.message}</span>
                        )}
                    </div>

                    {/* حقل الوصف */}
                    <div className='flex flex-col gap-1.5'>
                        <label className='text-sm font-medium text-gray-700'>الوصف</label>
                        <textarea
                            rows="3"
                            disabled={isCreating}
                            placeholder='اكتب وصفاً مختصراً للمشروع...'
                            className={`outline-none border p-2.5 rounded-xl focus:border-indigo-700 transition-colors text-sm resize-none disabled:bg-gray-50 ${
                                errors.projectDisc ? 'border-red-500 focus:border-red-500' : 'border-gray-300'
                            }`}
                            {...register('projectDisc', { 
                                required: 'وصف المشروع مطلوب لمساعدة الفريق',
                                validate: value => !!value.trim() || 'لا يمكن أن يكون الوصف فارغاً'
                            })}
                        />
                        {errors.projectDisc && (
                            <span className='text-xs text-red-500 font-medium'>{errors.projectDisc.message}</span>
                        )}
                    </div>
                </div>

                {/* أزرار التحكم */}
                <div className='flex gap-3 mt-2 justify-end'>
                    <button
                        type="button" 
                        className='px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                        onClick={handleClose}
                        disabled={isCreating}
                    >
                        إلغاء
                    </button>

                    <button
                        type="submit" // هذا الزر يطلق حدث onSubmit تلقائياً للـ form
                        className='px-5 py-2 text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 rounded-xl cursor-pointer transition-colors disabled:bg-indigo-400 disabled:cursor-not-allowed'
                        disabled={isCreating}
                    >
                        {isCreating ? 'جاري الإنشاء...' : 'إضافة المشروع'}
                    </button>
                </div>
            </form>
        </div>
    )
}