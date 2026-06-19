import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const LandingPageCard = ({ title, disc, icon, color }) => {
  return (
    <div 
      className="flex flex-col gap-4 items-start p-6 bg-white border border-slate-100 rounded-3xl text-right shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
    >
      <div 
        style={{ backgroundColor: `${color}15`, color: color }} 
        className="text-xl p-3.5 rounded-2xl flex items-center justify-center aspect-square"
      >
        <FontAwesomeIcon icon={icon} />
      </div>
            <h3 className="text-lg font-bold text-slate-800 tracking-tight">{title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed font-normal">{disc}</p>
    </div>
  )
}