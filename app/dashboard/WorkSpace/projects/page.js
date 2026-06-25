'use client'
import { Loader } from '@/components/Loader'
import useBoardStore from '@/store/BoardStore'
import React, { useEffect, useState } from 'react'
import { ProjectCard } from '../../components/ProjectCard'
import { AddNewProjectPop } from '@/components/AddNewProjectPop'

export default function Projects() {

  const fetchProjects = useBoardStore((state) => state.fetchProjects)
  const AllProjects = useBoardStore((state) => state.AllProjects)
  const loading = useBoardStore((state) => state.loading)
  const WorkSpaceId = useBoardStore((state) => state.WorkSpaceId)
  const [isOpen, setIsOpen] = useState(false)



          useEffect(() => {
            if (!WorkSpaceId) return;
            fetchProjects(WorkSpaceId)

          }, [WorkSpaceId,fetchProjects])


          if (loading) return <Loader />


  return (
    <>
      <div className='p-6 flex flex-col gap-6 '>

        <div className='flex justify-between items-center border-b pb-4'>
          <h1 className='text-2xl font-bold'>
            قائمة المشاريع
          </h1>

          <button
            onClick={() => setIsOpen(true)}
            className='bg-indigo-600 text-white px-4 py-2 rounded-lg'
          >
            إضافة مشروع جديد
          </button>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

          {AllProjects?.map((ele)=>(
            <ProjectCard
              key={ele.id}
              project={ele}
            />
          ))}

        </div>

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