import React from 'react'
import { DetailButton } from './DetailButton'

export const ProjectCard = ({ project }) => {
  return (
    // تم تحويل الخلفية لـ bg-white والحدود لـ border-gray-100 والظل خفيف ليناسب لوحة التحكم
    <div className="flex flex-col h-full bg-white border border-gray-100 rounded-2xl p-6 m-4 w-full max-w-sm shadow-sm hover:shadow-md hover:border-blue-500/50 hover:transform hover:translate-y-[-5px] transition-all duration-500 group">
      
      {/* Header Section */}
      <div className="mb-4">
        {/* تغيير النص ليكون متناسقاً مع درجات الرمادي الداكن للنصوص الرئيسية */}
        <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          {project.info.name}
        </h2>
        <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">
          Project ID: {project.info.id}
        </p>
      </div>

      {/* Description */}
      {/* الـ flex-grow تضمن بقاء الزر بالأسفل دائماً حتى لو اختلف طول النص */}
      <div className="flex-grow">
        <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed text-sm">
          {project.info.description}
        </p>
      </div>

      {/* Footer Section */}
      {/* تم تعديل لون خط الفصل (border-gray-100) ليتماشى مع الهيكل العام */}
      <div className="mt-auto flex justify-between items-center border-t border-gray-100 pt-4">
        <div className="text-sm text-gray-500">
          المهام: <span className="text-blue-600 font-bold">{project.tasks.length}</span>
        </div>
        
        {/* زر التفاصيل سيتلقى الـ ID الآن */}
        <DetailButton projectId={project.id} />
      </div>
    </div>
  )
}