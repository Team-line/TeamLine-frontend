'use client'
import React from 'react'
import {QuastionCard} from './QuastionCard'

export const Quastions = () => {

    const data=[
        {id:1,name:'هل تدعم المنصة اللغة العربية بشكل كامل',disc:'نعم، مسار صممت من الصفر لتدعم اللغة العربية وواجهات RTL بشكل كامل، مع مراعاة أدق التفاصيل اللغوية والتصميمية للمستخدم العربي.'},
        {id:1,name:'هل بياناتي آمنة على مسار؟',disc:'أمان البيانات هو أولويتنا القصوى. نستخدم بروتوكولات تشفير متقدمة (AES-256) ونقوم بنسخ احتياطي يومي للبيانات لضمان عدم فقدانها.'},
        {id:1,name:'هل يمكنني نقل بياناتي من منصات أخرى؟',disc:'نعم، نوفر أدوات استيراد سهلة للملفات من منصات مثل Trello و Asana و Monday، لضمان انتقال سلس لفريقك دون فقدان أي بيانات.'}
    ]

  return (
    <div className='w-full bg-gray-100'>
      <div className='container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
            <div className='flex flex-col justify-center items-center py-8 '>
                <h3 className='text-4xl font-bold mb-5'>الأسئلة الشائعة</h3>
                <div className='flex flex-col gap-4'>
                    {data.map((ele)=>{
                        return(
                            <QuastionCard
                            key={ele.id}
                            name={ele.name}
                            disc={ele.disc}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
        </div>
  )
}
