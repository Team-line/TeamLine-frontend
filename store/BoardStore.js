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

            //!Get All Projects
            fetchProjects: async (workSpaceId) => {
                set({loading: true,error: null})
                try {
                    const response = await api.get(`/api/v1/workspaces/${workSpaceId}/boards`)
                    console.log(response)
                    set({
                        AllProjects: response.data,
                        loading: false
                    })
                } catch (error) {
                    console.error(error)
                    set({loading: false,error})
                }
            },


             //!Add new  Project
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
            },

      //! Delete Project
        deleteProject: async (projectId) => {
        const prevProjects = [...get().AllProjects];
        const workspaceId = get().WorkSpaceId;

        const filteredProjects = prevProjects.filter((ele) => ele.id !== projectId);
        set({ AllProjects: filteredProjects, loading: true, error: null });

        try {
            await api.delete(`/api/v1/workspaces/${workspaceId}/boards/${projectId}`);
            set({ loading: false });
        } catch (error) {
            console.error("Delete ERROR:", error);
            set({ AllProjects: prevProjects, error: error.message || error, loading: false });
        }
    }


        }),

        //!The name in Local Storage 
        {
            name: "board-storage",
            
             partialize:(state)=>({
             WorkSpaceId: state.WorkSpaceId
             })
        }
    )
)

export default useBoardStore