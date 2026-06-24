import React from 'react'

export default async function ProjectId({ params }) {
  const { id } = await params;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800">تفاصيل المشروع</h1>
      <p className="text-sm text-gray-500 mt-2">
        رقم المشروع الحالي هو: <span className="text-blue-600 font-mono font-bold">{id}</span>
      </p>
    </div>
  )
}