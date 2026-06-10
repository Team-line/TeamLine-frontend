'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export const DetailButton = ({projectId}) => {
    const router=useRouter()
    
    function handleClick() {
        router.push(`/dashboard/projects/${projectId}`) // هنا يمكنك تعديل الرابط ليتناسب مع المشروع الذي تريد عرضه
    }

  return (
    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all shadow-lg shadow-blue-900/20"
    onClick={handleClick}
    >
      View Details
    </button>
  )
}
