'use client'
import React from 'react'
import Image from 'next/image'
import { LightText } from './LightText'
import { HeroSectionBottun } from './HeroSectionBottun'
import { useRouter } from 'next/navigation'

export const HeroSection = () => {
  const router = useRouter()

  return (
    // تغيير لون الخلفية ليكون متناسقاً وناعماً جداً
    <div className='w-full bg-slate-50/50 flex justify-center overflow-hidden'>

      {/* تحديث الـ container: أضفنا max-w-7xl وضبطنا الـ padding والمسافات */}
      <div className='container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col-reverse lg:flex-row justify-between items-center gap-12 lg:gap-8 py-16 lg:py-24'>

        {/* القسم الأيمن: النصوص والأزرار */}
        <div className='flex flex-col gap-6 max-w-xl text-center lg:text-right items-center lg:items-start w-full lg:w-1/2'>
          
          <LightText
            text={'أول منصة عربية لإدارة المشاريع الذكية'}
            ballColor={'#3730a3'}
          />
          
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.2] mt-2'>
            منصة عربية متكاملة <span className='text-[#3730a3]'>لإدارة المشاريع</span> والتعاون
          </h1>

          <p className='text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal'>
            ارتقِ بأداء فريقك إلى مستويات جديدة مع واجهة عربية احترافية، أدوات تتبع ذكية،
            وتتحليلات دقيقة تساعدك على اتخاذ القرارات الصحيحة في الوقت المناسب.
          </p>

          <div className='flex gap-4 w-full sm:w-auto justify-center lg:justify-start mt-2'>
            <HeroSectionBottun
              text={'ابدأ الآن مجاناً'}
              onclick={() => { router.push('/dashboard') }}
              color={`#3730a3`}
            />
            <HeroSectionBottun
              text={'تسجيل الدخول'}
              onclick={() => { router.push('/Login') }}
              color={'transparent'}
            />
          </div>

        </div>

        {/* القسم الأيسر: الصورة والـ Mockup */}
        <div className='w-full lg:w-1/2 flex justify-center items-center max-w-md lg:max-w-xl'>
          <div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-white dark:bg-zinc-900/50 rounded-3xl p-4 shadow-xl shadow-slate-100 dark:shadow-none border border-slate-100 dark:border-zinc-800/50">
            <Image 
              src="/photo2.png"
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