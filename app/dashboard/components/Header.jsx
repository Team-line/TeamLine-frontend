'use client'
import { ThemeButton } from "@/components/ThemeButton"
import { usePathname } from "next/navigation"

export const Header = () => {
      const path = usePathname()

      const links = [
            { id: 1, name: 'لوحة التحكم', url: '/dashboard' },
            { id: 2, name: 'المشاريع', url: '/dashboard/projects' },
            { id: 3, name: 'سجلاتي الزمنية', url: '/dashboard/time-logs' },
      ]

      const activeLink = links.find((l) => l.url === path)

      return (
            <header
                  className="
                  w-full
                  px-6 py-4
                  flex justify-between items-center
                  bg-white/80 backdrop-blur-md
                  dark:bg-slate-950/80
                  border-b border-slate-200
                  dark:border-slate-800
                  shadow-sm
                  transition-all duration-300
                  z-50
                  "
            >
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white">
                        {activeLink ? activeLink.name : 'Dashboard'}
                  </h3>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                        <ThemeButton />
                  </div>
            </header>
      )
}