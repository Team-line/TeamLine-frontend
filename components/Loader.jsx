import React from 'react'

export const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-slate-50/60 dark:bg-slate-950/60 backdrop-blur-md">
      <div className="relative flex items-center justify-center">
        {/* حلقة التحميل الخارجية الدوارة */}
        <div className="w-20 h-20 rounded-full border-4 border-slate-200 dark:border-slate-800 border-t-[#3730a3] dark:border-t-indigo-500 animate-spin"></div>
        
        {/* نقطة مضيئة بالمنتصف لتعطي لمسة جمالية */}
        <div className="absolute w-4 h-4 rounded-full bg-[#3730a3] dark:bg-indigo-500 animate-pulse"></div>
      </div>
      
      {/* نص التحميل المتناسق مع خطوط مشروعك */}
      <div className="mt-4 flex flex-col items-center gap-1">
        <h3 className="font-black text-xl text-[#3730a3] dark:text-indigo-400 tracking-wide animate-pulse">
          تيم لاين
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wider">
          جاري تهيئة مساحة عملك...
        </p>
      </div>
    </div>
  )
}