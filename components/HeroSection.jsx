'use client'
import React from 'react'
import Image from 'next/image'
import { LightText } from './LightText'
import {HeroSectionBottun} from './HeroSectionBottun'
import { useRouter } from 'next/navigation'

export const HeroSection = () => {
  const router =useRouter()

  return (
    <div className='container mx-auto px-4 flex flex-col-reverse lg:flex-row justify-between items-center gap-12 py-12 lg:py-20 mb-20'>

      <div className='flex flex-col gap-5 max-w-xl text-center lg:text-right items-center lg:items-start w-full lg:w-1/2'>
          
          <LightText
            text={'أول منصة عربية لإدارة المشاريع الذكية'}
            ballColor={'#F2CA50'}
          />
          
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight mt-2'>
            منصة عربية متكاملة <span className='text-[#F2CA50]'>لإدارة المشاريع</span> والتعاون
          </h1>

          <p className='text-base sm:text-lg text-[#52504d] dark:text-[#D0C5AF] leading-relaxed'>
            ارتقِ بأداء فريقك إلى مستويات جديدة مع واجهة عربية احترافية، أدوات تتبع ذكية،
            وتحليلات دقيقة تساعدك على اتخاذ القرارات الصحيحة في الوقت المناسب.
          </p>

        <div className='flex gap-4'>
          <HeroSectionBottun
          text={'ابدا الان مجانا'}
          onclick={()=>{router.push('/dashboard')}}
          color={`#F2CA50`}
          />
          <HeroSectionBottun
          text={'تسجيل الدخول'}
          onclick={()=>{router.push('/Login')}}
          color={'transparent'}
          />
        </div>


      </div>

      <div className='w-full lg:w-1/2 flex justify-center items-center max-w-md lg:max-w-xl '>
          <div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-slate-100 dark:bg-zinc-900/50 rounded-2xl p-4 shadow-md border border-slate-200/50 dark:border-zinc-800/50">
              <Image 
                src="/cfb5885e679e68b34483eab1377a69b144ee0cc2.png"
                alt="إدارة المشاريع الذكية"
                width={600}
                height={600}
                priority 
                className="w-full h-full object-contain rounded-xl drop-shadow-xl transform hover:scale-[1.02] transition-transform duration-300"
              />

              <LightText
            text={'اكتمل المشروع'}
            ballColor={'#22C55E'}
          />
          </div>


      </div>


        
    </div>
  )
}