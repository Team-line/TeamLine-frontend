import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ControllerBoardCard = ({title,value,icon}) => {
  return (
    <div className='p-4 bg-white rounded-xl  flex flex-col  gap-2 border-2 border-gray-300 transition-all duration-500 hover:scale-104 hover:drop-shadow-lg'>
            <div className={`p-4  w-fit rounded-2xl ${title==='فواتير معلقة'?  'bg-[#f5690b34]' : 'bg-[#3830a31b]'}`}>
                <FontAwesomeIcon icon={icon} className={`${title==='فواتير معلقة'?  'text-[#f57c0b]' : 'text-[#3730a3]'}`} />
            </div>
            <h3 className='text-gray-700'>{title}</h3>
            <h2 className='font-bold text-2xl'>{value}</h2>
        </div>
  )
}
