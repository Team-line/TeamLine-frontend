import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faEnvelope, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='w-full bg-slate-900 text-slate-300 border-t border-slate-800/80' dir="rtl">
      <div className='container mx-auto px-6 py-12 sm:px-8 lg:px-16'>
        
        <div className='grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12 items-start'>
          
          <div className='flex flex-col gap-4'>
            <h3 className='text-xl font-bold text-white tracking-wide'>تيم لاين</h3>
            <p className='text-sm leading-relaxed text-slate-400 max-w-sm'>
              المنصة الرائدة في الشرق الأوسط لإدارة المشاريع والفرق الاحترافية. صممت لتلهم الإبداع وتسهل الإنجاز.
            </p>
            
            <div className='flex items-center gap-3 mt-2'>
              <Link href="#" className='w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 text-slate-400 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300' title="الموقع">
                <FontAwesomeIcon icon={faEarthAmericas} className="text-lg" />
              </Link>
              <Link href="#" className='w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 text-slate-400 hover:bg-emerald-500/10 hover:text-emerald-400 transition-all duration-300' title="البريد">
                <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
              </Link>
              <Link href="#" className='w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 text-slate-400 hover:bg-orange-500/10 hover:text-orange-400 transition-all duration-300' title="المحادثة">
                <FontAwesomeIcon icon={faCommentDots} className="text-lg" />
              </Link>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-8 lg:col-span-2'>
            
            <div className='flex flex-col gap-4'>
              <h3 className='text-sm font-semibold text-slate-200 uppercase tracking-wider font-md'>
                الشركة
              </h3>
              <div className='flex flex-col gap-3 text-sm'>
                <Link href='/about' className='text-slate-400 hover:text-white hover:underline underline-offset-4 decoration-blue-500/60 transition-all duration-200 w-fit'>عن تيم لاين</Link>
                <Link href='/blog' className='text-slate-400 hover:text-white hover:underline underline-offset-4 decoration-blue-500/60 transition-all duration-200 w-fit'>المدونة</Link>
                <Link href='/contact' className='text-slate-400 hover:text-white hover:underline underline-offset-4 decoration-blue-500/60 transition-all duration-200 w-fit'>تواصل معنا</Link>
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <h3 className='text-sm font-semibold text-slate-200 uppercase tracking-wider font-md'>
                المنتج
              </h3>
              <div className='flex flex-col gap-3 text-sm'>
                <Link href='/features' className='text-slate-400 hover:text-white hover:underline underline-offset-4 decoration-blue-500/60 transition-all duration-200 w-fit'>المميزات</Link>
                <Link href='/integrations' className='text-slate-400 hover:text-white hover:underline underline-offset-4 decoration-blue-500/60 transition-all duration-200 w-fit'>تكامل التطبيق</Link>
                <Link href='/docs' className='text-slate-400 hover:text-white hover:underline underline-offset-4 decoration-blue-500/60 transition-all duration-200 w-fit'>دليل المستخدم</Link>
              </div>
            </div>

          </div>
          
        </div>

        <div className='border-t border-slate-800/60 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500'>
          <p>© {new Date().getFullYear()} تيم لاين. جميع الحقوق محفوظة.</p>
          <div className='flex gap-6'>
            <Link href="/privacy" className='hover:text-slate-400 transition-colors'>سياسة الخصوصية</Link>
            <Link href="/terms" className='hover:text-slate-400 transition-colors'>شروط الخدمة</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};