'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export const DetailButton = ({projectId}) => {
    const router=useRouter()
    
    function handleClick() {
        router.push(`/dashboard/WorkSpace/projects/${projectId}`) 
    }

  return (
    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg transition-all shadow-md"
    onClick={handleClick}
    >
      إنتقل للمشروع
    </button>
  )
}
