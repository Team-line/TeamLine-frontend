'use client'
import { Loader } from '@/components/Loader'
import useBoardStore from '@/store/BoardStore'
import React, { useEffect } from 'react'
import {ProjectCard} from '../../components/ProjectCard'

export default function Projects() {
      const fetchProjects=useBoardStore((state)=>state.fetchProjects)
      const AllProjects=useBoardStore((state)=>state.AllProjects)
      const loading=useBoardStore((state)=>state.loading)
    
      useEffect(()=>{
            fetchProjects()
      },[])

      if(loading)return <Loader />

      return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 '>
                {AllProjects?.data?.map((ele)=>{
                  return(
                        <ProjectCard key={ele.id}
                        project={ele}
                        />
                  )
                })}
            </div>
      
      )
      }
