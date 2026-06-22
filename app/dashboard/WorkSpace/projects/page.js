'use client'
import React from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { useEffect ,useState } from 'react'
import  api from '../../../utils/api'

export default function Projects() {
      const [projects, setProjects] = useState([])

     useEffect(() => {
            const getData = async () => {
                  try {
                        const response =await api.get('/projects')
                        if(response){
                              setProjects(response)  
                        }
                        else {
                    console.log('No data found')
                        }
                  }catch(error) {
                        console.error('Error fetching projects:', error)
                  }
                            
            }

            getData()
     },[])



      return (
            <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 '>
                  {projects.map((project)=>{
                        return (
                              <ProjectCard key={project.id}  project={project}  />
                        )
                  })}
            </div>
            </>
      )
      }
