import React from 'react'
import { DetailButton } from './DetailButton'

export const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col h-full bg-white border border-gray-100 rounded-2xl p-6 m-4 w-full max-w-sm shadow-sm hover:shadow-md hover:border-blue-500/50 hover:transform hover:translate-y-[-5px] transition-all duration-500 group">
      
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
          {project?.name}
        </h2>
      </div>

      <div className="flex-grow">
        <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed text-sm">
          {project?.description || <span className="text-gray-400 italic text-xs">لا يوجد وصف للمشروع</span>}
        </p>
      </div>

      <div className="mt-auto flex justify-between items-center border-t border-gray-100 pt-4">
        <div className="text-sm text-gray-500">
          المهام: <span className="text-indigo-600 font-bold">{project?.tasks?.length || 0}</span>
        </div>
        <DetailButton projectId={project?.id} />
      </div>
    </div>
  )
}