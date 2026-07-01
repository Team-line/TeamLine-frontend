'use cleint'
import { useQuery } from '@tanstack/react-query'
import {getWorkspaces} from '@/services/workSpaceAPI'
import React from 'react'

export const useGetWorkSpace = () => {
    const {isLoading,error,data:workSpace}=useQuery({
        queryKey:['workSpaces'],
        queryFn:getWorkspaces,
        onSuccess:()=>{
            console.log(data)
        },
        onError:(err)=>console.log(err.message)
    })

  return {workSpace,isLoading,error}
}