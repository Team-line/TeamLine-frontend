'use client'
import React, { useState } from 'react'
import { Loader } from '@/components/Loader'
import useBoardStore from '@/store/BoardStore'
import { ProjectCard } from '@/features/projects/ProjectCard'
import { AddNewProjectPop } from '@/features/projects/AddNewProjectPop'
import { useGetProjects } from '@/features/projects/useGetProjects'

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false)

  const WorkSpaceId = useBoardStore((state) => state.WorkSpaceId)

  const { projects: AllProjects, isLoading, error } = useGetProjects(WorkSpaceId)

  if (isLoading) return <Loader />

  if (error) {
    return (
      <div className="text-center p-6 text-red-500 bg-red-50 rounded-xl m-6">
        <p>حدث خطأ أثناء جلب المشاريع: {error.message}</p>
      </div>
    )
  }

  return (
    <>
      <div className='p-6 flex flex-col gap-6'>

        <div className='flex justify-between items-center border-b pb-4'>
          <h1 className='text-2xl font-bold'>
            قائمة المشاريع
          </h1>

          <button
            onClick={() => setIsOpen(true)}
            className='bg-indigo-600 hover:bg-indigo-700 transition-colors text-white px-4 py-2 rounded-lg text-sm font-medium'
          >
            إضافة مشروع جديد
          </button>
        </div>

        {/* 5. عرض رسالة إذا كانت قائمة المشاريع فارغة */}
        {!AllProjects || AllProjects.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p className="text-base">لا توجد مشاريع في هذه المساحة حالياً.</p>
            <p className="text-xs text-gray-400 mt-1">اضغط على "إضافة مشروع جديد" للبدء!</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {AllProjects.map((ele) => (
              <ProjectCard
                key={ele.id || ele._id}
                project={ele}
              />
            ))}
          </div>
        )}

      </div>

      {isOpen && (
        <AddNewProjectPop
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  )
}