'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { StartNowBotton } from './StartNowBotton'
import { ThemeButton } from "./ThemeButton"

export const NavBar = () => {
    //!mobile popScreen
    const [isOpen, setIsOpen] = useState(false) 
    const path = usePathname()

    const links = [
        { name: "الرئيسية", url: "/", id: 1 },
        { name: "التقارير", url: "/dashboard/reports", id: 2 },
        { name: "المشاريع", url: "/dashboard/projects", id: 3 },
        { name: "الأسعار", url: "/prices", id: 4 }
    ]

    return (
        <nav className='w-full bg-[#F4F4F5] drop-shadow-lg dark:bg-[#131313E5] p-4 relative mb-15'>
            <div className='container mx-auto px-4 flex justify-between items-center'>
                
                {/* Small Screens */}
                <div className='md:hidden flex items-center gap-2'>
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="text-black dark:text-white text-2xl p-1"
                    >
                        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
                    </button>
                </div>

                {/*Large screen  */}
                <div className='hidden md:flex gap-6 items-center'>
                    {links.map((ele) => {
                        const isActive = path === ele.url
                        return (
                            <Link 
                                key={ele.id}
                                href={ele.url}
                                className={`transition-all duration-200 pb-1 ${
                                    isActive 
                                    ? 'text-[#F2CA50] font-bold border-b-2 border-[#F2CA50]' 
                                    : 'text-slate-700 dark:text-[#C8C8B0] hover:text-[#F2CA50]'
                                }`}
                            >
                                {ele.name}
                            </Link>
                        )
                    })}
                </div>

                {/* 3. الأزرار والأيقونات (موجودة دايماً في كل الشاشات) */}
                <div className='flex items-center gap-3'>
                    <button className="text-slate-700 dark:text-[#C8C8B0] hover:text-[#F2CA50] text-lg p-1">
                        <FontAwesomeIcon icon={faBell} />
                    </button>
                    <button className="text-slate-700 dark:text-[#C8C8B0] hover:text-[#F2CA50] text-lg p-1">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                    <ThemeButton />

                    {/* Hidden StartButoon in Small Screens */}
                    <div className="hidden sm:block">
                        <StartNowBotton />
                    </div>
                </div>
            </div>

            {/* 4. قائمة الموبايل المنسدلة (تفتح وتغلق بناءً على الـ State) */}
            {isOpen && (
                <div className='absolute top-full  right-0 w-full bg-[#F4F4F5] dark:bg-[#131313] drop-shadow-xl md:hidden z-50 flex flex-col p-4 gap-4 border-t border-slate-200 dark:border-zinc-800 animate-fadeIn'>
                    {links.map((ele) => {
                        const isActive = path === ele.url
                        return (
                            <Link 
                                key={ele.id}
                                href={ele.url}
                                onClick={() => setIsOpen(false)} // قفل المنيو عند الضغط على لينك
                                className={`p-2 rounded-lg transition-all ${
                                    isActive 
                                    ? 'bg-[#F2CA50]/10 text-[#F2CA50] font-bold' 
                                    : 'text-slate-700 dark:text-[#C8C8B0] hover:bg-slate-200 dark:hover:bg-zinc-800'
                                }`}
                            >
                                {ele.name}
                            </Link>
                        )
                    })}
                    {/* تظهر هنا أيضاً للأجهزة الصغيرة جداً */}
                    <div className="sm:hidden pt-2 border-t border-slate-200 dark:border-zinc-800">
                        <StartNowBotton />
                    </div>
                </div>
            )}
        </nav>
    )
}