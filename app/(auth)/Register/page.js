import { RegisterForm } from '@/components/RegisterForm';
import Image from 'next/image'

export default async function Register() {


  return (
    <div className='w-full min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-50' dir="rtl">
        
        {/* شق نموذج التسجيل: يأخذ الارتفاع الكامل المتاح ليتوسط داخله المكون */}
        <div className='w-full lg:w-1/2 flex flex-1 justify-center items-center p-4 md:p-8 min-h-screen lg:min-h-0'>
          <RegisterForm />
        </div>

        {/* شق الصورة الجانبية */}
        <div className='hidden lg:flex lg:w-1/2 min-h-screen bg-[#3730a3] justify-center items-center p-12 border-e border-gray-100'>
          <div className='w-full max-w-xl'>
            <div className="relative w-full aspect-square bg-white dark:bg-zinc-900/50 rounded-3xl p-6 shadow-xl shadow-indigo-100/40 dark:shadow-none border border-indigo-100/50 dark:border-zinc-800/50">
              <Image 
                src="/photo3.png"
                alt="إدارة المشاريع الذكية"
                width={600}
                height={600}
                priority 
                className="w-full h-full object-contain rounded-2xl drop-shadow-sm transform hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>
        </div>

    </div>
  )
}