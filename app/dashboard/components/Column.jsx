import React from 'react'
import { useDroppable } from '@dnd-kit/core'

export const Column = ({ column, children }) => {
  const { setNodeRef, isOver } = useDroppable({ id: column.id })

  return (
   <div
            ref={setNodeRef}
            className={`flex flex-col min-w-0 w-full p-4 rounded-2xl min-h-40
            border transition-all duration-300 shadow-sm
          ${
            column.id === "todo"
              ? "bg-yellow-500 border-yellow-400/40"
              : column.id === "in-progress"
              ? "bg-red-500 border-red-400/40"
              : column.id === "done"
              ? "bg-green-500 border-green-400/40"
              : "bg-blue-500 border-blue-400/40"
            }
          hover:shadow-lg hover:scale-[1.01]
          ${isOver ? "ring-1 ring-purple-500/60" : ""}
          `}
            >

      {/* عنوان العمود */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-slate-200 uppercase text-sm">
          {column.name}
        </h3>
        <button className='bg-slate-800 text-slate-400 px-2 py-1 rounded-full text-xs hover:bg-red-400 transition-all duration-500'></button>

      </div>

      {/* منطقة المهام */}
      <div className="flex flex-col gap-3 flex-grow">
        {children}
      </div>
    </div>
  )
}