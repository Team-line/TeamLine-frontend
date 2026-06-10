import React from 'react'
import { useDroppable } from '@dnd-kit/core'

export const Column = ({ column, children }) => {
  const { setNodeRef, isOver } = useDroppable({ id: column.id })

  return (
    <div 
      ref={setNodeRef}
      className={`flex flex-col w-80 p-4 rounded-2xl transition-colors duration-300 ${
        isOver ? 'bg-slate-800 border-blue-500' : 'bg-slate-900/50'
      } border border-slate-700 min-h-[500px]`}
    >
      {/* عنوان العمود */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-slate-200 uppercase text-sm">
          {column.name}
        </h3>
        <span className="bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full text-xs">
          {/* يمكنك هنا وضع عدد المهام في هذا العمود */}
        </span>
      </div>

      {/* منطقة المهام */}
      <div className="flex flex-col gap-3 flex-grow">
        {children}
      </div>
    </div>
  )
}