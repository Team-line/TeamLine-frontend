'use client'
import React, { useState, useEffect, useRef } from 'react'

export const ActionMenu = ({ onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className="relative">
      {/* زر النقاط الثلاث */}
      <div 
        className="flex flex-col gap-1 p-2 cursor-pointer hover:bg-gray-100 rounded-full w-8 h-8 justify-center items-center"
        onClick={(e) => {
          setIsOpen(!isOpen)
        }}
      >
        <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
      </div>

      {/* قائمة الخيارات (تعديل / حذف) */}
      {isOpen && (
        <div className="absolute left-0 top-10 bg-white border border-slate-100 shadow-xl rounded-xl flex flex-col py-1.5 min-w-[120px] z-20">
          <button 
            onClick={(e) => {
              onEdit()
              setIsOpen(false)
            }}
            className="text-right px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 w-full"
          >
            تعديل
          </button>
          <button 
            onClick={(e) => {
              onDelete()
              setIsOpen(false)
            }}
            className="text-right px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 w-full"
          >
            حذف
          </button>
        </div>
      )}
    </div>
  )
}