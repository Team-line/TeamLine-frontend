'use client'
import React from 'react'
import { WorkSpaceCard } from './WorkSpaceCard'
import { Loader } from '@/components/Loader'
import { useGetWorkSpace } from './useGetWorkSpace'

export const WorkSpaceCards = () => {
    const { workSpace, isLoading, error } = useGetWorkSpace()
    
    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return (
            <div className="text-center p-4 text-red-500 bg-red-50 rounded-lg">
                <p>للأسف، حدث خطأ: {error.message || "فشل جلب البيانات"}</p>
            </div>
        )
    }



    if (!workSpace || workSpace.length === 0) {
        return (
            <div className="text-center p-4 text-gray-500">
                <p>لا توجد مساحات عمل حالياً. ابدأ بإنشاء واحدة جديدة!</p>
            </div>
        )
    }

    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {workSpace.map((ele) => (
                <WorkSpaceCard 
                    key={ele._id || ele.id} 
                    name={ele.name}
                    id={ele.id || ele._id}
                    description={ele.description}
                />
            ))}
        </div>
    )
}