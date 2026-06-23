import { create  } from "zustand"
import api from '../utils/api'

const useWorkSpaceStore=create((set)=>({
    workSpace:[],
    loading:false,
    error:null,

    fetchWorkSpace:async()=>{
        set({loading:true,error:null})
        try {
            const response=await api.get('/api/v1/workspaces')
            console.log(response)
            if(response.data){
                set({workSpace:response.data,loading:false})
            }
            else{
                console.log("خطأ في ايجاد البيانات")
                set({loading:false})
            }
        } catch (err) {
            set({loading:false,error:err})
        }

    },


    
}))

export default useWorkSpaceStore;