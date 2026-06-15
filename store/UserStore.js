import { create } from "zustand";
import api from '../utils/api'

const useUserStore=create((set,get)=>({
    users:[],
    loadimg:false,

    fetchUsers:async(prjectId)=>{
        set({loading:true})
        try {
            const reponse=await api.get(`/users`)
            const SpesifcUsers=reponse.filter((ele)=>{
                return ele.projectId===prjectId
            })
        } catch (error) {
            console.error('Error fetching Users:', error);
            set({ loading: false });
        }
    }
}))