'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export const ThemeButton = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // تأكيد تحميل الـ component على الـ client لتجنب مشاكل الـ Hydration في Next.js
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <div className="w-10 h-10" /> // مساحة محجوزة مؤقتاً لشكل الزر

    const isDark = theme === 'dark'

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="
                flex items-center justify-center
                w-10 h-10 
                rounded-full
                /* الـ Light Mode: 
                bg-[#E4E4E7] hover:bg-[#D4D4D8] text-[#131313]
                /* الـ Dark Mode: 
                dark:bg-[#1E1E1E] dark:hover:bg-[#2A2A2A] dark:text-[#C8C8B0]
                transition-all duration-300
                shadow-sm
                cursor-pointer
            "
            aria-label="Toggle Theme"
        >
            <FontAwesomeIcon
                icon={isDark ? faSun : faMoon}
                className={`text-lg transition-colors duration-300 ${isDark ? 'text-[#F2CA50]' : 'text-slate-700'}`}
            />
        </button>
    )
}