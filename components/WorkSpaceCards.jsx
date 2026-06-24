'use client'
import useWorkSpaceStore from '@/store/WorkSpaceStore' // تأكد أن المسار مضبوط الآن 👍
import React, { useEffect } from 'react'
import { WorkSpaceCard } from './WorkSpaceCard'
import { Loader } from './Loader'

export const WorkSpaceCards = () => {
    const workSpace = useWorkSpaceStore((state) => state.workSpace)
    const fetchWorkSpace = useWorkSpaceStore((state) => state.fetchWorkSpace)
    const loading = useWorkSpaceStore((state) => state.loading) 

    useEffect(() => {
        fetchWorkSpace()
    }, [])
    
    
    if (loading) {
        return <Loader />
    }

    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {workSpace?.map((ele) => {
                return (
                    <WorkSpaceCard 
                        key={ele._id || ele.id} 
                        name={ele.name}
                        id={ele.id}
                        description={ele.description}
                    />
                )
            })}
        </div>
    )
}