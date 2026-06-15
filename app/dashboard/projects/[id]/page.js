'use client'
import { DndContext } from '@dnd-kit/core'
import React from 'react'
import { useEffect, useState , use } from 'react'
import { Column } from '../../components/Column'
import { TaskCard } from '../../components/TaskCard'
import { Loading } from '../../components/Loading'
import useBoardStore from '../../../../store/BoardStore'
import usePopStore from '@/store/PopStore'
import { TaskPopWindow } from '../../components/TaskPopWindow'
import {AddColumnPop}from '../../components/AddColumnPop.jsx'


export default function Projects({params}) {
      const resolveParams=use(params)
      const projectId = resolveParams.id
      const fetchProject=useBoardStore((state)=>state.fetchProject)
      const moveTask=useBoardStore((state)=>state.moveTask)
      //?استدعيت كل واحد لوحده عشان اقلل ال re-rendering 
      const project = useBoardStore(state => state.project)
      const tasks = useBoardStore(state => state.tasks)
      const loading = useBoardStore(state => state.loading)
      const columns = useBoardStore(state => state.columns)
      const { isModalOpen } = usePopStore();
      const [showAddColumn,setShowAddColumn]=useState(false)      

      
      useEffect(()=>{
            fetchProject(projectId)
      },[fetchProject,projectId])

      
      //  Handle drag end event to update task's column
      function handleDragEnd(event) {
            const { active, over } = event
            if (!over || active.id === over.id) return

            moveTask(active.id,over.id,projectId)
}


      if(loading)return <Loading />


      return (
            <div className="p-8 min-h-screen relative">
                  {isModalOpen&& <TaskPopWindow />}
                  {showAddColumn&& <AddColumnPop setShowAddColumn={setShowAddColumn} />}

            <div className='flex justify-between items-center mb-10'>
                  <h1 className="text-3xl font-bold dark:text-white mb-8">
                  </h1>

                  <button className='p-4 bg-gray-100 dark:bg-gray-800 rounded-lg dark:text-white hover:bg-gray-900 transition-all duration-500 cursor-pointer'
                  onClick={()=>setShowAddColumn(true)}
                  >Add Column</button>
            </div>

            <DndContext onDragEnd={handleDragEnd}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-4">
                  {columns?.map((col) => (
                        <Column key={col.id} column={col}>
                        {tasks
                        .filter((t) => t.columnId === col.id)
                        .map((task) => (
                              <TaskCard key={task.id} task={task} />
                        ))}
                        </Column>
                  ))}
                  </div>
            </DndContext>
            </div>
);


}
