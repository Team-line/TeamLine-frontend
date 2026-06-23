import { create } from "zustand"
import api from '../utils/api'

const useWorkSpaceStore = create((set, get) => ({
    workSpace: [],
    loading: false,
    error: null,

    fetchWorkSpace: async () => {
        set({ loading: true, error: null })
        try {
            const response = await api.get('/api/v1/workspaces')
            console.log(response)
            if (response.data) {
                const data = Array.isArray(response.data) ? response.data : response.data.data || []
                set({ workSpace: data, loading: false })
            } else {
                console.log("خطأ في إيجاد البيانات")
                set({ loading: false })
            }
        } catch (err) {
            set({ loading: false, error: err.message || err })
        }
    },


    deleteWorkSpace: async (workSpaceID) => {
        set({ loading: true, error: null })
        const prevWorkSpace = [...get().workSpace]
        
        try {
            const response = await api.delete(`/api/v1/workspaces/${workSpaceID}`)
            
            if (response) {
                const updateWorkSpace = get().workSpace.filter((ele) => ele.id !== workSpaceID)
                set({ workSpace: updateWorkSpace, loading: false })
            } else {
                console.log("حدث خطأ في الحذف")
                set({ loading: false })
            }
            
        } catch (error) {
            set({ loading: false, error: error.message || error, workSpace: prevWorkSpace })
        }
    },


    updateWorkSpace:async()=>{
        set({ loading: true, error: null })
        

    }


}))

export default useWorkSpaceStore;