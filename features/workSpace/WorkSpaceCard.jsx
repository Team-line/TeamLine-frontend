'use client'
import useBoardStore from '@/store/BoardStore'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { ActionMenu } from './ActionMenu'
import { useDeleteWorkSpace } from './useDeleteWorkSpace' // 👈 استيراد هوك الحذف
import { useUpdateWorkSpace } from './useUpadateWorkSpace' // 👈 استيراد هوك التعديل

export const WorkSpaceCard = ({ name, id, description }) => {
  const shortName = name ? name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() : 'WS'
  const router = useRouter()
  
  //? States
  const [isEditing, setIsEditing] = useState(false)
  const [editName, setEditName] = useState(name)
  const [editDescription, setEditDescription] = useState(description || '')

  //? React Query Hooks 
  const { isDeleting, deleteWorkspace } = useDeleteWorkSpace()
  const { isUpdating, updateWorkspace } = useUpdateWorkSpace()

  //? Zustand Store 
  const setWorkSpaceId = useBoardStore((state) => state.setWorkSpaceId)

  function handleClick() {
    setWorkSpaceId(id)
    router.push('/dashboard/WorkSpace/projects')
  }

  //! Delete WorkSpace by React Query
  function handleDelete() {
    deleteWorkspace(id)
  }

  function handleEditClick() {
    setIsEditing(true)
  }

  //! Save Changes by React Query
  async function handleSaveEdit() {
    if (!editName.trim()) return
    
    updateWorkspace({ 
      workspaceId: id, 
      updatedData: { name: editName, description: editDescription } 
    }, {
      // نغلق واجهة التعديل فقط عند نجاح العملية في السيرفر
      onSuccess: () => setIsEditing(false)
    })
  }

  function handleCancelEdit() {
    setIsEditing(false)
    setEditName(name)
    setEditDescription(description || '')
  }

  return (
    <div className="group p-5 relative rounded-2xl bg-white border border-gray-400 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.08)] hover:border-slate-300 flex flex-col justify-between h-auto min-h-40 cursor-pointer">
      
      {isEditing ? (
        <div className="flex flex-col gap-3 w-full">
          <h4 className="text-sm font-semibold text-slate-700">تعديل مساحة العمل</h4>
          <input 
            type="text" 
            disabled={isUpdating} // قفل المدخلات أثناء الحفظ
            className="border border-slate-300 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-indigo-500 disabled:opacity-50"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            placeholder="اسم مساحة العمل"
          />
          <textarea 
            disabled={isUpdating}
            className="border border-slate-300 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-indigo-500 resize-none h-16 disabled:opacity-50"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="الوصف (اختياري)"
          />
          <div className="flex justify-end gap-2 mt-1">
            <button 
              onClick={handleCancelEdit} 
              disabled={isUpdating}
              className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 disabled:cursor-not-allowed"
            >
              إلغاء
            </button>
            <button 
              onClick={handleSaveEdit} 
              disabled={isUpdating}
              className="text-xs px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-1 disabled:opacity-50"
            >
              {isUpdating ? "جاري الحفظ..." : "حفظ التغييرات"}
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className='flex justify-between items-center'>
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center font-semibold text-sm tracking-wider">
                {shortName}
              </div>

              <div className="overflow-hidden">
                <h3 className="font-medium text-slate-900 text-base leading-6 truncate">
                  {name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">شخصية</p>
              </div>
            </div>

            <ActionMenu onEdit={handleEditClick} onDelete={handleDelete} isDeleting={isDeleting} />
          </div>

          <div className='p-2 text-gray-600 text-sm truncate'>
            {description || <span className="text-slate-400 italic text-xs">لا يوجد وصف</span>}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-50">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 ${isDeleting ? "text-red-600" : "text-emerald-600"}`}>
              {isDeleting ? "جاري الحذف..." : "نشط"}
            </span>

            <button 
              className="p-4 bg-gray-100 rounded-2xl text-xs font-semibold text-indigo-800 transition-all duration-500 hover:scale-105 hover:bg-gray-300 flex items-center gap-1"
              onClick={handleClick}
            >
              فتح المساحة
              <svg
                className="w-3.5 h-3.5 transform transition-transform duration-200 group-hover:translate-x-[-2px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  )
}