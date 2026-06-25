'use client'

import { create } from "zustand"
import { persist } from "zustand/middleware"
import api from '../utils/api'

const useWorkSpaceStore = create((set, get) => ({
      workSpace: [],
      loading: false,
      error: null,

      //! Get All WorkSpaces
      fetchWorkSpace: async () => {
        set({ loading: true, error: null })
        try {
          const response = await api.get('/api/v1/workspaces')
          console.log("FETCH RESPONSE:", response)

          if (response.data) {
            const data = Array.isArray(response.data) ? response.data : response.data.data || []
            set({ workSpace: data, loading: false })
          } else {
            console.log("خطأ في إيجاد البيانات")
            set({ loading: false })
          }
        } catch (err) {
          console.error("FETCH ERROR:", err)
          set({ loading: false, error: err.response?.data?.message || err.message || err })
        }
      },


      //! Delete WorkSpace
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
          console.error("DELETE ERROR:", error)
          set({
            loading: false,
            error: error.response?.data?.message || error.message || error,
            workSpace: prevWorkSpace
          })
        }
      },



      //todo endpoint is not right
      //! Upadate WorkSpace
      updateWorkSpace: async (workSpaceID, updatedData) => {
        set({ loading: true, error: null })
        const prevWorkSpace = [...get().workSpace]
        try {
          const response = await api.put(`/api/v1/workspaces/${workSpaceID}`, updatedData)
          const updatedItem = response.data?.data || response.data || updatedData
          console.log('workSpaceID ',workSpaceID)
          
          const updateWorkspace = get().workSpace.map((ele) => {
            return ele.id === workSpaceID ? { ...ele, ...updatedItem } : ele
          })
          set({ workSpace: updateWorkspace, loading: false })

        } catch (error) {
          console.error("UPDATE ERROR:", error)
          set({ workSpace: prevWorkSpace, loading: false, error: error.response?.data?.message || error.message || error })
        }
      }
    }), 
    
  )

export default useWorkSpaceStore;