'use client'
import { useState } from 'react'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'

export const NavBar = () => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [activeHash, setActiveHash] = useState('#home') // افتراضياً القسم الرئيسي نشط

    const links = [
        { name: "الرئيسية", hash: "#home", id: 1 },
        { name: "المميزات", hash: "#features", id: 2 },
        { name: "عن المنصة", hash: "#about", id: 3 },
        { name: "تواصل معنا", hash: "#contact", id: 4 }
    ]

    return (
        <nav className='bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 px-6 py-4 flex justify-between items-center drop-shadow-sm' dir="rtl">
            
            <div>
                <h3 className='font-bold text-2xl text-[#3730a3] tracking-wide cursor-pointer' onClick={() => router.push('/')}>
                    تيم لاين
                </h3>
            </div>

            <div className='hidden md:flex items-center gap-6'>
                {links.map((ele) => {
                    const isActive = activeHash === ele.hash
                    return (
                        <Link 
                            key={ele.id}
                            href={ele.hash}
                            onClick={() => setActiveHash(ele.hash)}
                            className={`font-medium transition-colors duration-300 hover:text-[#3730a3] relative pb-1 after:content-[""] after:absolute after:bottom-0 after:right-0 after:h-[2px] after:bg-[#3730a3] after:transition-all after:duration-300 ${
                                isActive 
                                ? "text-[#3730a3] font-semibold after:w-full" 
                                : "text-gray-600 after:w-0 hover:after:w-full"
                            }`}
                        >
                            {ele.name}
                        </Link>
                    )
                })}
            </div>

            <div className='hidden md:flex items-center gap-4'>
                <button 
                    onClick={() => router.push('/Login')}
                    className='py-2 px-4 text-gray-600 font-medium hover:text-[#3730a3] transition-colors'
                >
                    تسجيل الدخول
                </button>
                <button 
                    onClick={() => router.push('/Register')}
                    className='py-2 px-5 bg-[#3730a3] text-white font-medium rounded-xl shadow-md shadow-indigo-100 transition-all duration-300 hover:bg-[#2e288a] hover:shadow-lg'
                >
                    إنشاء حساب
                </button>
            </div>

            <div className='md:hidden'>
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className='text-gray-600 hover:text-[#3730a3] text-xl transition-colors p-2'
                    aria-label="Toggle Menu"
                >
                    <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
                </button>
            </div>

            {isOpen && (
                <div className='absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-6 flex flex-col gap-2 z-50 md:hidden animate-fade-in-down'>
                    {links.map((ele) => {
                        const isActive = activeHash === ele.hash
                        return (
                            <Link 
                                key={ele.id}
                                href={ele.hash}
                                onClick={() => {
                                    setActiveHash(ele.hash);
                                    setIsOpen(false);
                                }}
                                className={`p-3 rounded-lg font-medium transition-all duration-200 ${
                                    isActive 
                                    ? "text-[#3730a3] font-semibold bg-indigo-50/50" 
                                    : "text-gray-600 hover:bg-gray-50"
                                }`}
                            >
                                {ele.name}
                            </Link>
                        )
                    })}
                    
                    <div className='flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100'>
                        <button 
                            onClick={() => { router.push('/Login'); setIsOpen(false); }}
                            className='w-full py-2.5 text-center text-gray-600 font-medium bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'
                        >
                            تسجيل الدخول
                        </button>
                        <button 
                            onClick={() => { router.push('/Register'); setIsOpen(false); }}
                            className='w-full py-2.5 text-center bg-[#3730a3] text-white font-medium rounded-xl hover:bg-[#2e288a] transition-colors'
                        >
                            إنشاء حساب
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}