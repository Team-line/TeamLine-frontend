'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; // نحتاج سهم واحد فقط

export const QuastionCard = ({ name, disc }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className='p-4 bg-white  rounded-3xl cursor-pointer max-w-2xl w-full mb-3 shadow-sm hover:shadow-md transition-shadow' 
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className='flex justify-between items-center'>
        <h3 className='font-medium text-gray-800'>{name}</h3>
        {/* تدوير السهم */}
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className="w-4 h-4 text-gray-600" 
          />
        </div>
      </div>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-3 pt-2' : 'max-h-0 opacity-0'}`}
      >
        <p className='text-gray-700 text-sm'>
          {disc}
        </p>
      </div>
    </div>
  )
}