import { create } from "zustand"
import useBoardStore from "./BoardStore"

const useTaskStore=create((set,get)=>({
    task:{},
    loading:false,
    
    
    //!because i dont have real database 
    getTaskByID:(taskID)=>{
        const allTasks=useBoardStore.getState.tasks
        return allTasks.find((ele)=>ele.id===taskID)
    },

    //?add Task
    addTask:async (newTask)=>{
        set({loading:false})
        try {
            const project=useBoardStore.getState.project
            
        } catch (error) {
            console.error('Error fetching Tasks:', error);
            set({ loading: false });
        }

    }

}))