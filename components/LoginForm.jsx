'use client'
import React, { useEffect, useState } from 'react' 
import { Input } from './Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import api from '../utils/api'
import useAuthStore from '@/store/AuthStore';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const LoginForm = ({ initialToken }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  
  const setToken = useAuthStore((state) => state.setToken)
  const setUser = useAuthStore((state) => state.setUser)
  const [status, setStatus] = useState({ type: '', text: '' }) // تعديل لتمييز لون الخطأ عن النجاح
  const router = useRouter()

  const data = [
    { id: 1, fieldKey: 'email', name: 'البريد الإلكتروني', place: 'example@gmail.com', icon: faEnvelope, type: "email" },
    { id: 2, fieldKey: 'password', name: 'كلمة المرور', place: '••••••••', icon: faLock, type: 'password' },
  ]

  useEffect(() => {
    if (initialToken) {
      setToken(initialToken)
    }
  }, [initialToken, setToken])

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  async function handleSubmit(e) {
  e.preventDefault();

  setStatus({
    type: "loading",
    text: "جاري المعالجة..."
  });

  try {

    const response = await api.post(
      "/api/v1/auth/sign-in",
      formData
    );


    console.log("LOGIN RESPONSE:", response);


    const receivedUser = response.data.user;


    if (receivedUser) {

      setUser(receivedUser);

      setStatus({
        type: "success",
        text: "تم تسجيل الدخول بنجاح! جاري التوجيه..."
      });


      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);


    } else {

      setStatus({
        type: "error",
        text: "فشل في الحصول على بيانات المستخدم."
      });

    }


  } catch (error) {

    console.error("LOGIN ERROR:", error);


    const errorMessage =
      error.response?.data?.message ||
      "حدث خطأ في الاتصال، تأكد من تشغيل السيرفر";


    setStatus({
      type: "error",
      text: errorMessage
    });

  }
}

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6'>
        
        <div className='text-center flex flex-col gap-2'>
          <h3 className='font-black text-3xl text-[#3730a3] tracking-wide'>تيم لاين</h3>
          <h4 className='font-bold text-xl text-gray-800 mt-2'>أهلا بك مجددا</h4>
          <p className='text-sm text-gray-500 leading-relaxed'>
            قم بتسجيل الدخول لمتابعة إنتاجيتك وإدارة مشاريعك.
          </p>
        </div>

        {/* عرض رسائل الخطأ أو النجاح ديناميكياً */}
        {status.text && (
          <div className={`p-3 rounded-xl text-sm text-center font-medium ${
            status.type === 'error' ? 'bg-red-50 text-red-600 border border-red-100' :
            status.type === 'success' ? 'bg-green-50 text-green-600 border border-green-100' :
            'bg-gray-50 text-gray-600'
          }`}>
            {status.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          {data.map((ele) => (
            <Input 
              key={ele.id}
              label={ele.name}
              place={ele.place}
              icon={ele.icon}
              type={ele.type}
              name={ele.fieldKey}
              value={formData[ele.fieldKey]}
              onChange={handleChange}
            />
          ))}

          <button 
            type="submit" 
            disabled={status.type === 'loading'}
            className="w-full mt-2 bg-[#3730a3] hover:bg-[#2d2785] disabled:bg-gray-400 text-white font-medium py-2.5 rounded-xl transition-all duration-200 text-sm shadow-sm shadow-[#3730a3]/20 focus:ring-2 focus:ring-[#3730a3]/50 cursor-pointer disabled:cursor-not-allowed"
          >
            {status.type === 'loading' ? 'جاري التسجيل...' : 'تسجيل الدخول'}
          </button>

            <h3 className='text-gray-500 mx-auto'>ليس لديك حساب ؟ <Link href={'/Register'} className='text-[#3730a3] font-bold '>أنشئ حسابا جديدا</Link></h3>

        </form>

      </div>

    </div>
  )
}