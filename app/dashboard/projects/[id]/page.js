'use client'
import { DndContext } from '@dnd-kit/core'
import React from 'react'
import { useEffect, useState , use } from 'react'
import api from '../../../../utils/api'
import { Column } from '../../components/Column'
import { TaskCard } from '../../components/TaskCard'
import { Loading } from '../../components/Loading'

export default function Projects({params}) {
      const resolveParams=use(params)
      const projectId = resolveParams.id
      const [project, setProject]=useState([])
      const [tasks, setTasks]=useState([])
      const [loading, setLoading]=useState(false)


      useEffect(()=>{
            if(!projectId) return
            const getTasks=async()=>{
                  try {
                        const response=await api.get(`/projects/${projectId}`)
                        if(response){
                              setProject(response ||[])
                              setTasks(response.tasks || [])
                        }else{
                              console.log('No tasks found for this project')
                        }
                  } catch (error) {
                        console.error('Error fetching tasks:', error)
                  }
            }
            getTasks()
      },[projectId])




      const putTask=async(UpdatedTasks)=>{
            try {
                 setLoading(true)
                  const response =await api.put(`/projects/${projectId}`, {
                        ...project,
                        tasks:UpdatedTasks
                  })

                  if(response){
                        setTasks(UpdatedTasks)
                        setLoading(false)
                  }
                  else {
                        console.log('Failed to update task')
                  }
            } catch (error) {
                  console.error('Error creating task:', error)
                  setLoading(false)
            }
      }

      
      //* Handle drag end event to update task's column
      function handleDragEnd(event) {
            const { active, over } = event
            if (!over) return
            const UpdatedTasks=tasks.map((task)=>{
                   return (
                        task.id === active.id ? { ...task, columnId: over.id } : task
                   )
            })
            setTasks(UpdatedTasks)
            putTask(UpdatedTasks)

}

      return (
            <div className="p-8 min-h-screen relative">
            <h1 className="text-3xl font-bold dark:text-white mb-8">
                  {project?.info?.name || "Loading Project..."}
            </h1>

            {loading && <Loading />}

            <DndContext onDragEnd={handleDragEnd}>
                  <div className="flex gap-6 items-start overflow-x-auto pb-4">
                  {project?.columns?.map((col) => (
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
