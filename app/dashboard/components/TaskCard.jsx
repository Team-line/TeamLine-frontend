import React from 'react'
import { useDraggable } from '@dnd-kit/core'

export const TaskCard = ({ task }) => {
  const { setNodeRef, listeners, attributes, transform, isDragging } = useDraggable({ 
    id: task.id 
  })

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
      className="bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-md hover:border-blue-500 transition-colors duration-200 text-white font-medium select-none active:cursor-grabbing"
    >
      {task.title}
    </div>
  )
}