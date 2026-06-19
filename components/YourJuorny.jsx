import React from 'react'
import Image from 'next/image'

export const YourJuorny = () => {

    const data=[
        {id:1,title:'أنشئ مساحة عملك',disc:'ابدأ بإعداد ملفك الشخصي و تخصيص مساحة العمل بما يتناسب مع هزية شركتك'},
        {id:2,title:'أضف فريقك ومشاريعك',disc:'قم بدعوة زملائك، وزع الأدوار، وأنشئ مشاريعك الأولى في دقائق معدودة.'},
        {id:3,title:'أنجز المهام بكفاءة',disc:'ابدأ في تنفيذ المهام، تتبع التقدم، واحتفل بالإنجازات مع فريقك يومياً.'},
    ]

  return (
    <div className='w-full'>
      <div className='container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col-reverse lg:flex-row justify-between items-center gap-12 lg:gap-8 py-16 lg:py-24'>
        <div className='flex flex-col gap-8 items-start'>
            <div className='flex flex-col gap-4'>
                <h3 className='font-bold text-4xl'>رحلتك نحو التنظيم تبدأ هنا</h3>
                <p className='text-md text-gray-500'>ثلاث خطوات بسيطة تفصلك عن نظام العمل الأكثر كفاءة لفريقك.</p>
            </div>

            <div className='flex flex-col gap-8'>
                {data.map((ele)=>{
                    const isActive=1===ele.id
                    return(
                        <div key={ele.id} className='flex gap-4'>
                            <p className={`${isActive?'bg-[#3730a3] text-white':'bg-[#958fe772] text-[#3730a3]'} w-12 h-12 rounded-full flex justify-center items-center text-xl`}>{ele.id}</p>
                            <div>
                                <h3 className='font-bold'>{ele.title}</h3>
                                <p className='text-gray-600'>{ele.disc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            </div>

                    <div className='w-full lg:w-1/2 flex justify-center items-center max-w-md lg:max-w-xl drop-shadow-xl'>
                      <div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-white dark:bg-zinc-900/50 rounded-3xl p-4 shadow-xl shadow-slate-100 dark:shadow-none border border-slate-100 dark:border-zinc-800/50">
                        <Image 
                          src="/photo3.png"
                          alt="إدارة المشاريع الذكية"
                          width={600}
                          height={600}
                          priority 
                          className="w-full h-full object-contain rounded-2xl drop-shadow-sm transform hover:scale-[1.02] transition-transform duration-300"
                        />
                      </div>
                    </div>
        </div>
    </div>
  )
}
