import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Input = ({ label, place, icon, type = "text",name,value,onChange }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full" dir="rtl">
      {/* تسمية الحقل */}
      <label htmlFor={label} className="text-sm font-semibold text-gray-700 cursor-pointer">
        {label}
      </label>
      
      {/* حاوي الحقل والأيقونة */}
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute right-3.5 text-gray-400 pointer-events-none flex items-center justify-center">
            <FontAwesomeIcon icon={icon} className="text-base" />
          </div>
        )}
        
        {/* حقل الإدخال */}
        <input  
          id={label}
          name={name}
          type={type}
          placeholder={place}
          value={value}
          onChange={onChange}
          className={`w-full py-2.5 pl-4 border border-gray-200 rounded-xl text-sm text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:border-[#3730a3] focus:border-2 focus:ring-2 focus:ring-[#3730a3]/10 transition-all duration-200 ${
            icon ? 'pr-11' : 'pr-4'
          }`}
        />
      </div>
    </div>
  );
};