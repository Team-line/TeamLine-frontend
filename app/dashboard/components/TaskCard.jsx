import React from 'react'
import { useDraggable } from '@dnd-kit/core'
import usePopStore from '@/store/PopStore'

export const TaskCard = ({ task }) => {
  const { setNodeRef, listeners, attributes, transform, isDragging } = useDraggable({ 
    id: task.id 
  })

  const openModal = usePopStore((state) => state.openModal)

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    opacity: isDragging ? 0.4 : 1,
    cursor: isDragging ? 'grabbing' : 'grab',
  }

  return (
    <div 
      ref={setNodeRef} 
      {...attributes} 
      {...listeners} 
      style={style}
      className="dark:bg-slate-800 bg-gray-100 border border-slate-700 p-4 rounded-xl shadow-md hover:border-blue-500 transition-colors duration-200 dark:text-white font-medium select-none active:cursor-grabbing"
    >
      <p
        style={{ cursor: isDragging ? 'grabbing' : 'pointer' }}
        className='hover:text-blue-300 transition-colors duration-500 p-4'
        onClick={(e) => {
          e.stopPropagation()
          openModal('editTask', task)
        }}
      >
        {task.title}
      </p>
    </div>
  )
}