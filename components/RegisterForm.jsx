'use client'

import React, { useEffect, useState } from 'react'
import { Input } from './Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import api from '../utils/api'
import useAuthStore from '@/store/AuthStore'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


export const RegisterForm = ({ initialToken }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })


  const setUser = useAuthStore((state)=>state.setUser)

  const [status, setStatus] = useState({
    type:'',
    text:''
  })

  const router = useRouter()


  const data = [
    {
      id:1,
      fieldKey:'name',
      name:'الاسم الكامل',
      place:'ادخل اسمك الكامل',
      icon:faUser,
      type:"text"
    },

    {
      id:2,
      fieldKey:'email',
      name:'البريد الإلكتروني',
      place:'example@gmail.com',
      icon:faEnvelope,
      type:"email"
    },

    {
      id:3,
      fieldKey:'password',
      name:'كلمة المرور',
      place:'••••••••',
      icon:faLock,
      type:'password'
    }
  ]



  function handleChange(e){

    const {name,value}=e.target

    setFormData(prev=>({
      ...prev,
      [name]:value
    }))

  }



  async function handleSubmit(e){

    e.preventDefault()


    setStatus({
      type:'loading',
      text:'جاري إنشاء الحساب...'
    })


    try {


      const response = await api.post(
        '/api/v1/auth/sign-up',
        formData
      )


      console.log("REGISTER RESPONSE:", response)



      const newUser = response.data.newUser



      if(newUser){


        setUser(newUser)


        setStatus({
          type:'success',
          text:'تم إنشاء الحساب بنجاح! جاري التوجيه...'
        })


        setTimeout(()=>{

          router.push('/dashboard')

        },1500)


      }
      else{


        setStatus({
          type:'error',
          text:'فشل في إنشاء الحساب'
        })


      }



    }catch(error){


      console.error("REGISTER ERROR:",error)


      const errorMessage =
      error.response?.data?.message ||
      "حدث خطأ في الاتصال بالسيرفر"


      setStatus({
        type:'error',
        text:errorMessage
      })


    }


  }




return (

<div className='w-full flex flex-col justify-center items-center'>

<div className='w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6'>


<div className='text-center flex flex-col gap-2'>

<h3 className='font-black text-3xl text-[#3730a3]'>
تيم لاين
</h3>


<h4 className='font-bold text-xl text-gray-800'>
ابدأ رحلتك مع تيم لاين
</h4>


<p className='text-sm text-gray-500'>
قم بإنشاء حسابك لإدارة مشاريعك بكفاءة عالية واحترافية.
</p>


</div>



{
status.text &&

<div className={`
p-3 rounded-xl text-sm text-center font-medium

${
status.type==='error'
?
'bg-red-50 text-red-600'
:
status.type==='success'
?
'bg-green-50 text-green-600'
:
'bg-gray-50 text-gray-600'
}

`}>

{status.text}

</div>

}



<form
onSubmit={handleSubmit}
className='flex flex-col gap-4'
>


{
data.map(ele=>(

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

))

}




<button

disabled={status.type==='loading'}

type="submit"

className="
w-full
mt-2
bg-[#3730a3]
hover:bg-[#2d2785]
disabled:bg-gray-400
text-white
py-2.5
rounded-xl
"

>

{
status.type==='loading'
?
'جاري التسجيل...'
:
'إنشاء حساب جديد'
}


</button>



<h3 className='text-gray-500 mx-auto'>

لديك حساب بالفعل؟

<Link
href="/Login"
className='text-[#3730a3] font-bold'
>

تسجيل الدخول

</Link>

</h3>



</form>



</div>


</div>


)

}