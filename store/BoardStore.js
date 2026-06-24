import { create } from "zustand"
import { persist } from "zustand/middleware"
import api from '../utils/api'

const useBoardStore = create(
    persist(
        (set, get) => ({

            WorkSpaceId: '',
            AllProjects: [],
            project: {},
            tasks: [],
            loading: false,
            columns: [],
            error: null,

            setWorkSpaceId: (id) => {
                set({WorkSpaceId: id})
            },


            fetchProjects: async (workSpaceId) => {
                set({loading: true,error: null})
                try {
                    const response = await api.get(`/api/v1/workspaces/${workSpaceId}/boards`)
                    set({
                        AllProjects: response,
                        loading: false
                    })
                } catch (error) {
                    console.error(error)
                    set({loading: false,error})
                }
            },

            addProject: async (newProject) => {
                const workSpaceId = get().WorkSpaceId
                if(!workSpaceId){
                throw new Error("Workspace ID not found")
                }

                const currentProjects = get().AllProjects
                try {
                    const response = await api.post(`/api/v1/workspaces/${workSpaceId}/boards`,newProject)

                    set({AllProjects:[...currentProjects,response?.data]})
                    return response
                    
                } catch (error) {
                    console.error("ADD ERROR", error)
                    set({error})
                    throw error
                }
            }
        }),







        //!The name in Local Storage 
        {
            name: "board-storage"
        }
    )
)

export default useBoardStore