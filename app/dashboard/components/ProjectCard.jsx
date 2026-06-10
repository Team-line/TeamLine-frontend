import React from 'react'
import { DetailButton } from './DetailButton'

export const ProjectCard = ({ project }) => {
  return (
    // أضفنا h-full ليأخذ الكارد كامل ارتفاع الحاوية الأب
    <div className="flex flex-col h-full dark:bg-slate-900 border border-slate-700 rounded-2xl p-6 m-4 w-full max-w-sm shadow-lg hover:border-blue-500/50 hover:transform hover:translate-y-[-5px] transition-all duration-500 group">
      
      {/* Header Section */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold dark:text-white group-hover:text-blue-400 transition-colors">
          {project.info.name}
        </h2>
        <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">
          Project ID: {project.info.id}
        </p>
      </div>

      {/* Description */}
      {/* استخدمنا flex-grow ليأخذ الوصف مساحة مرنة ويجبر الـ footer على النزول لأسفل الكارد دائماً */}
      <div className="flex-grow">
        <p className="text-slate-300 mb-6 line-clamp-2 leading-relaxed">
          {project.info.description}
        </p>
      </div>

      {/* Footer Section */}
      {/* سيبقى هذا الجزء دائماً في أسفل الكارد بسبب flex-grow في الأعلى */}
      <div className="mt-auto flex justify-between items-center border-t border-slate-700 pt-4">
        <div className="text-sm text-slate-400">
          Tasks: <span className="text-blue-400 font-bold">{project.tasks.length}</span>
        </div>
        
        <DetailButton 
        projectId={project.id} />
      </div>
    </div>
  )
}