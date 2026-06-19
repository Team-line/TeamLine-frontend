import React from 'react';
import { faFolderClosed, faListCheck, faFileInvoiceDollar, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { ControllerBoardCard } from './ControllerBoardCard';

export const ControllerBoardCardsSection = () => {

    //?ToDo fetch in zustand to get info from DataBase when api is complete
    const data = [
        { 
            id: 1, 
            name: "إجمالي المشاريع", 
            icon: faFolderClosed, 
            value: 24 
        },
        { 
            id: 2, 
            name: "المهام النشطة", 
            icon: faListCheck, 
            value: 142 
        },
        { 
            id: 3, 
            name: "فواتير معلقة", 
            icon: faFileInvoiceDollar, 
            value: 8 
        },
        { 
            id: 4, 
            name: "أداء الفريق", 
            icon: faChartLine, 
            value: "ممتاز" 
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4" dir="rtl">
            {data.map((item) => (
                <ControllerBoardCard 
                    key={item.id}
                    title={item.name}
                    value={item.value}
                    icon={item.icon} 
                />
            ))}
        </div>
    );
};