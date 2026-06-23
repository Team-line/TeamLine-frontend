'use client'

import { DndContext } from '@dnd-kit/core'
import React from 'react'
import { useEffect, useState, use } from 'react'

// استخدام الـ Aliases لتفادي مشاكل الحروف والمسارات النسبية المكسورة على Vercel
import { Column } from '@/components/Column'
import { TaskCard } from '@/components/TaskCard'
import { Loading } from '@/components/Loading'
import { TaskPopWindow } from '@/components/TaskPopWindow'
import { AddColumnPop } from '@/components/AddColumnPop'

import useBoardStore from '@/store/BoardStore'
import usePopStore from '@/store/PopStore'

export default function Projects({ params }) {
      const resolveParams = use(params)
      const projectId = resolveParams.id

      const fetchProject = useBoardStore((state) => state.fetchProject)
      const moveTask = useBoardStore((state) => state.moveTask)

      const project = useBoardStore(state => state.project)
      const tasks = useBoardStore(state => state.tasks)
      const loading = useBoardStore(state => state.loading)
      const columns = useBoardStore(state => state.columns)

      const { isModalOpen } = usePopStore()
      const [showAddColumn, setShowAddColumn] = useState(false)

      useEffect(() => {
            fetchProject(projectId)
      }, [fetchProject, projectId])

      function handleDragEnd(event) {
            const { active, over } = event
            if (!over || active.id === over.id) return

            moveTask(active.id, over.id, projectId)
      }

      if (loading) return <Loading />

      return (
            <div className="p-8 min-h-screen relative">
                  {isModalOpen && <TaskPopWindow />}
                  {showAddColumn && <AddColumnPop setShowAddColumn={setShowAddColumn} />}

                  <div className='flex justify-between items-center mb-10'>
                        <h1 className="text-3xl font-bold dark:text-white mb-8">
                              {project?.name || ''}
                        </h1>

                        <button
                              className='py-2 px-4 font-bold bg-[#3730a3] rounded-lg text-white transition-all duration-500 cursor-pointer hover:bg-[#564fc0]'
                              onClick={() => setShowAddColumn(true)}
                        >
                              + أضف عمود
                        </button>
                  </div>

                  <DndContext onDragEnd={handleDragEnd}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-4">
                              {columns?.map((col) => (
                                    <Column key={col.id} column={col}>
                                          {tasks
                                                ?.filter((t) => t.columnId === col.id)
                                                ?.map((task) => (
                                                      <TaskCard key={task.id} task={task} />
                                                ))}
                                    </Column>
                              ))}
                        </div>
                  </DndContext>
            </div>
      )
}