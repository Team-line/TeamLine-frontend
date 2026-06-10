'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
      faHouse,
      faFolderOpen,
      faClock,
} from '@fortawesome/free-solid-svg-icons'

export const SideBar = () => {
      const pathname = usePathname()

      const links = [
            {
                  id: 1,
                  name: 'لوحة التحكم',
                  url: '/dashboard',
                  icon: faHouse,
            },
            {
                  id: 2,
                  name: 'المشاريع',
                  url: '/dashboard/projects',
                  icon: faFolderOpen,
            },
            {
                  id: 3,
                  name: 'سجلاتي الزمنية',
                  url: '/dashboard/time-logs',
                  icon: faClock,
            },
      ]

      return (
            <aside
                  className="
                              min-h-screen
                              w-20 md:w-64
                              transition-all duration-300
                              bg-white text-slate-800
                              dark:bg-slate-950 dark:text-white
                              border-r border-slate-200
                              dark:border-slate-800
                              shadow-sm dark:shadow-black/40
                              z-50
                              ">

                  {/* Header */}
                  <div className="p-4 border-b border-slate-200 dark:border-slate-800">
                        <h2 className="hidden md:block text-xl font-bold tracking-wide">
                              Team Line
                        </h2>
                  </div>

                  {/* Links */}
                  <nav className="flex flex-col gap-2 p-3 ">
                        {links.map((link) => {
                              const isActive = pathname === link.url

                              return (
                                    <Link
                                          key={link.id}
                                          href={link.url}
                                          className={`
                                                flex items-center
                                                justify-center md:justify-start
                                                gap-3
                                                p-3
                                                rounded-xl
                                                transition-all duration-300
                                                ${isActive
                                                      ? 'bg-purple-600 text-white shadow-md'
                                                      : 'hover:bg-slate-100 dark:hover:bg-slate-900'
                                                }
                                                `}
                                    >
                                          <FontAwesomeIcon icon={link.icon} className="text-lg" />

                                          <span className="hidden md:block font-medium">
                                                {link.name}
                                          </span>
                                    </Link>
                              )
                        })}
                  </nav>
            </aside>
      )
}