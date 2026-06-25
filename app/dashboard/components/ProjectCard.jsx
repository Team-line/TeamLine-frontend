import React, { useState } from 'react'
import { DetailButton } from './DetailButton'
import { ActionMenu } from '@/components/ActionMenu'
import useBoardStore from '@/store/BoardStore'

export const ProjectCard = ({ project }) => {
  //? States 
  const [isEditing, setIsEditing] = useState(false)
  const [editName, setEditName] = useState(project?.name || '')
  const [editDescription, setEditDescription] = useState(project?.description || '')

  //? Zustand Store 
  const deleteProject = useBoardStore((state) => state.deleteProject)
  const updateProject = useBoardStore((state) => state.updateProject) 

  function handleDelete() {
    if (confirm('هل أنت متأكد من حذف هذا المشروع؟')) {
      deleteProject(project.id)
    }
  }

  function handleSaveEdit() {

    if (!editName.trim()) return
    
    if (updateProject) {
      updateProject(project.id, { name: editName, description: editDescription })
    }
    setIsEditing(false)
  }

  function handleCancelEdit() {
    setEditName(project?.name || '')
    setEditDescription(project?.description || '')
    setIsEditing(false)
  }

  return (
    <div className="group p-6 relative rounded-2xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-500/50 hover:-translate-y-1 flex flex-col justify-between h-auto min-h-[200px] w-full max-w-sm">
      
      {isEditing ? (
        /*Editing State*/
        <div className="flex flex-col gap-3 w-full h-full justify-between">
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-slate-700">تعديل المشروع  </h4>
            <input 
              type="text" 
              className="border border-slate-300 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-indigo-500"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              placeholder="اسم المشروع"
            />
            <textarea 
              className="border border-slate-300 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-indigo-500 resize-none h-16"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              placeholder="الوصف (اختياري)"
            />
          </div>
          
          <div className="flex justify-end gap-2 mt-2">
            <button 
              onClick={handleCancelEdit} 
              className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600"
            >
              إلغاء
            </button>
            <button 
              onClick={handleSaveEdit} 
              className="text-xs px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              حفظ التغييرات
            </button>
          </div>
        </div>
      ) : (
        
        /*Nromal State*/
        <>
          <div>
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                {project?.name}
              </h2>
              {/* ربط زر التعديل بتغيير الحالة */}
              <ActionMenu onEdit={() => setIsEditing(true)} onDelete={handleDelete} />
            </div>

            <div className="mb-6">
              <p className="text-gray-600 line-clamp-2 leading-relaxed text-sm">
                {project?.description || <span className="text-gray-400 italic text-xs">لا يوجد وصف للمشروع</span>}
              </p>
            </div>
          </div>

          <div className="mt-auto flex justify-between items-center border-t border-gray-100 pt-4">
            <div className="text-sm text-gray-500">
              المهام: <span className="text-indigo-600 font-bold">{project?.tasks?.length || 0}</span>
            </div>
            <DetailButton projectId={project?.id} />
          </div>
        </>
      )}
    </div>
  )
}