'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
      faHouse,
      faFolderOpen,
      faListCheck,       
      faChartPie,        
      faFileInvoiceDollar, 
      faGear,
      faCircleQuestion,    
      faRightFromBracket   
} from '@fortawesome/free-solid-svg-icons'
import useAuthStore from '@/store/AuthStore'
import { useRouter } from 'next/navigation'



export const SideBar = () => {
      const pathname = usePathname()
      const logout=useAuthStore((state)=>state.clearAuth)
      const router=useRouter()
      const links = [
            {
                  id: 1,
                  name: 'لوحة التحكم',
                  url: '/dashboard',
                  icon: faHouse,
            },
            {
                  id: 2,
                  name: 'مساحة عمل ',
                  url: '/dashboard/WorkSpace',
                  icon: faFolderOpen,
            },
            {
                  id: 3,
                  name: 'المهام',
                  url: '/dashboard/tasks',
                  icon: faListCheck,
            },
            {
                  id: 4,
                  name: 'التقارير',
                  url: '/dashboard/reports',
                  icon: faChartPie,
            },
            {
                  id: 5,
                  name: 'الفواتير',
                  url: '/dashboard/time-logs',
                  icon: faFileInvoiceDollar,
            },
            {
                  id: 6,
                  name: 'الاعدادات',
                  url: '/dashboard/settings',
                  icon: faGear,
            },
      ]

      const handleLogout = () => {
            logout()
            router.push('/')
      }

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
                              flex flex-col justify-between
                              "
            >
                  <div className="flex flex-col w-full">
                        {/* Header */}
                        <div className="p-4 border-b border-slate-200 dark:border-slate-800">
                              <h2 className="hidden md:block text-3xl font-bold tracking-wide text-[#3730a3] dark:text-purple-400">
                                    تيم لاين
                              </h2>
                        </div>

                        {/* Links */}
                        <nav className="flex flex-col gap-2 p-3 w-full">
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
                                                            ? 'bg-[#3730a3] text-white shadow-md'
                                                            : 'hover:bg-slate-100 dark:hover:bg-slate-900'
                                                      }
                                                      `}
                                          >
                                                <FontAwesomeIcon icon={link.icon} className="text-lg w-5 text-center" />
                                                <span className="hidden md:block font-medium">
                                                      {link.name}
                                                </span>
                                          </Link>
                                    )
                              })}
                        </nav>
                  </div>


                  <div className="flex flex-col gap-2 p-3 border-t border-slate-200 dark:border-slate-800 w-full">
                        {/* زر المساعدة */}
                        <Link 
                              href="/dashboard/help"
                              className="flex items-center justify-center md:justify-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-900"
                        >
                              <FontAwesomeIcon icon={faCircleQuestion} className="text-lg w-5 text-center text-slate-500" />
                              <span className="hidden md:block font-medium">المساعدة</span>
                        </Link>

                        {/* زر تسجيل الخروج */}
                        <button
                              onClick={handleLogout}
                              className="flex items-center justify-center md:justify-start gap-3 p-3 rounded-xl transition-all duration-300 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30"
                        >
                              <FontAwesomeIcon icon={faRightFromBracket} className="text-lg w-5 text-center" />
                              <span className="hidden md:block font-medium">تسجيل الخروج</span>
                        </button>
                  </div>
            </aside>
      )
}