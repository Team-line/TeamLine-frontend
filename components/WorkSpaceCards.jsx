'use client'
import useAuthStore from '@/store/AuthStore'
import React, { useEffect } from 'react'
import api from '@/utils/api'

export const WorkSpaceCards = () => {
    const userId=useAuthStore((state)=>state.id)

    useEffect(()=>{
        const getData=async()=>{
            try {
                const response=await api.get('/api/v1/workspaces')
                console.log(response)
            } catch (error) {
                console.log('error',error)
            }
        }

        getData()

    },[])

  return (
    <div>WorkSpaceCards</div>
  )
}
