import { create } from "zustand"
import api from '../utils/api'

const useBoardStore=create((set,get)=>({
    project:{},
    tasks:[],
    loading:false,
    columns:[],
    error,

    fetchProjects:async(projectId)=>{
        set({loading:true})
        try {
            const response =await api.get(`/projects/${projectId}`)
            set({project:response,
                })

        } catch (error) {
            console.error('Error fetching project:', error);
            set({ loading: false, error });
        }
    },








    // //? move and save in DB
    // moveTask:async(taskId,newColumnId,projectId)=>{
    //     set({loading:true})
    //     const {tasks,project}=get()
    //     const prevTasks=[...tasks]

    //     const UpdateTasks=tasks.map((ele)=>{
    //         return ele.id===taskId?{...ele,columnId:newColumnId}:ele
    //     })

    //     set({tasks:UpdateTasks})

    //     try {
    //         const response =await api.put(`/projects/${projectId}`,{...project, tasks:UpdateTasks})
    //         set({loading:false})
    //     } catch (error) {
    //         set({ 
    //             tasks:prevTasks,
    //             loading: false });
    //     }

    // },


    // //? Add Column 
    // addColumn:async(ColumnName)=>{
    //     set({loading:true})
    //     const {columns, project, projectID}=get()
    //     const prevColumns=[...columns]
    //     const newColumn={
    //         id:ColumnName.trim().toLowerCase().replaceAll(" ", "-"),
    //         name:ColumnName
    //     }
    //     const updateColumns = [...columns, newColumn];
    //     try {
    //         const response =await api.put(`/projects/${projectID}`,{...project,columns:updateColumns})
    //         set({
    //             columns:updateColumns,
    //             loading:false,
    //         })

    //     } catch (error) {
    //         set({ 
    //             columns:prevColumns,
    //             loading: false });
    //     }
    //     },






}))


export default useBoardStore;