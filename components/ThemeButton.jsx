'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export const ThemeButton = () => {
      const { theme, setTheme } = useTheme()

      const isDark = theme === 'dark'

      return (
            <button
                  onClick={() => setTheme(isDark ? 'light' : 'dark')}
                  className="
                              flex items-center gap-2
                              px-4 py-2
                              rounded-xl
                              bg-slate-800
                              hover:bg-slate-700
                              dark:bg-slate-700
                              dark:hover:bg-slate-600
                              transition-all duration-300
                              shadow-md
                              cursor-pointer
                              "
                              >
                  <FontAwesomeIcon
                        icon={isDark ? faSun : faMoon}
                        className="text-yellow-400"
                  />

                  <span className="hidden md:block text-white">
                        {isDark ? 'Light Mode' : 'Dark Mode'}
                  </span>
            </button>
      )
}