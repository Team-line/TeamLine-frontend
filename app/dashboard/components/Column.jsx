import React from 'react'
import { useDroppable } from '@dnd-kit/core'

export const Column = ({ column, children }) => {
  const { setNodeRef, isOver } = useDroppable({ id: column.id })

  return (
    <div
      ref={setNodeRef}
      className={`flex flex-col min-w-0 w-full p-4 rounded-2xl min-h-40
          border transition-all duration-300 shadow-sm bg-gray-50/50
          ${
            column.id === "todo"
              ? "border-amber-100"
              : column.id === "in-progress"
              ? "border-blue-100"
              : column.id === "done"
              ? "border-green-100"
              : "border-gray-100"
          }
          hover:shadow-md
          /* عند سحب مهمة فوق العمود، تظهر حدود زرقاء ناعمة بدلاً من الموف الحاد */
          ${isOver ? "ring-2 ring-blue-500/20 border-blue-400 bg-blue-50/30" : ""}
          `}
    >

      {/* عنوان العمود */}
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-100/60">
        <div className="flex items-center gap-2">
          {/* نقطة ملونة صغيرة تميز حالة كل عمود بشكل أنيق */}
          <span className={`w-2.5 h-2.5 rounded-full ${
            column.id === "todo"
              ? "bg-amber-500"
              : column.id === "in-progress"
              ? "bg-blue-500"
              : column.id === "done"
              ? "bg-green-500"
              : "bg-gray-400"
          }`} />
          
          {/* تعديل لون الخط ليكون داكناً ومقروءاً في الثيم الفاتح */}
          <h3 className="font-bold text-gray-700 text-sm">
            {column.name}
          </h3>
        </div>
        
        {/* زر إضافي (يمكنك وضع أيقونة حذف أو تعديل بداخله لاحقاً) */}
        <button className='bg-white border border-gray-200 text-gray-400 px-2.5 py-1 rounded-lg text-xs hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all duration-300 shadow-sm'>
          إجراء
        </button>
      </div>

      {/* منطقة المهام */}
      <div className="flex flex-col gap-3 flex-grow">
        {children}
      </div>
    </div>
  )
}