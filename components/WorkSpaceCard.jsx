'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export const WorkSpaceCard = ({ name }) => {
    const shortName = name ? name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() : 'WS'
    const router=useRouter()



  function handleClick(){
    router.push('/dashboard/WorkSpace/projects')
  }

  return (
    <div className="group p-5 rounded-2xl bg-white border border-gray-400 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.08)] hover:border-slate-300 flex flex-col justify-between h-40 cursor-pointer"
    onClick={handleClick}
    >
      
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center font-semibold text-sm tracking-wider transition-all duration-300 group-hover:bg-indigo-50 group-hover:border-indigo-100 group-hover:text-indigo-600 shrink-0">
          {shortName}
        </div>
        
        <div className="overflow-hidden">
          <h3 className="font-medium text-slate-900 text-base leading-6 truncate transition-colors duration-200 group-hover:text-indigo-600">
            {name}
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">شخصية</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-50">
        <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
          نشط
        </span>
        
        <button className="text-xs font-semibold text-indigo-600 transition-colors duration-200 flex items-center gap-1">
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

    </div>
  )
}