import React from 'react'
import { LandingPageCard } from './LandingPageCard'
import { 
  faFolderOpen, 
  faTableColumns,
  faSquareCheck, 
  faUsers, 
  faChartPie 
} from '@fortawesome/free-solid-svg-icons'

export const StrongTools = () => {
  const data = [
    { icon: faFolderOpen, title: "إدارة المشاريع المركزية", dic: 'نظم جميع ملفاتك، تواصل فريقك وجداولك الزمنية في مكان واحد آمن ومنظم.', id: 1, color: '#4f46e5' }, 
    { icon: faTableColumns, title: "لوحات كانبان مرنة", dic: 'تتبع تقدم العمل بصرياً وقم بتحريك المهام بكل سهولة بين مراحل التنفيذ المختلفة.', id: 2, color: '#06b6d4' }, 
    { icon: faSquareCheck, title: "تتبع المهام الدقيق", dic: 'لا تفوت أي موعد تسليم مع نظام التنبيهات الذكي وتتبع الوقت لكل مهمة.', id: 3, color: '#10b981' }, 
    { icon: faUsers, title: "تعاون الفريق المباشر", dic: 'تواصل مع فريقك في الوقت الفعلي، شارك الملاحظات، واطرح الأفكار في بيئة عمل تعاونية.', id: 4, color: '#f59e0b' }, 
    { icon: faChartPie, title: "تقارير وتحليلات", dic: 'اتخذ قرارات مبنية على البيانات مع لوحات المعلومات التحليلية المتقدمة.', id: 5, color: '#ef4444' }   
  ]

  return (
    <div className='w-full bg-gray-100 py-16 border-t border-slate-100'> 
      <div className='container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
        
        <div className='flex flex-col justify-center items-center gap-3 text-center mb-12'>
          <h3 className='text-[#3730a3] font-black text-3xl md:text-4xl tracking-tight'>أدوات قوية لنمو أسرع</h3>
          <p className='text-slate-500 max-w-2xl text-base md:text-lg leading-relaxed'>
            كل ما تحتاجه لإدارة مشاريعك في متناول يدك، مصمم بدقة لتسهيل العمل الجماعي وزيادة الإنتاجية.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'>
          {data.map((ele) => (
            <LandingPageCard 
              key={ele.id}
              title={ele.title}
              disc={ele.dic}
              icon={ele.icon}
              color={ele.color}
            />
          ))}
        </div>
      </div>
    </div>
  )
}