'use client'

import { create } from "zustand"
import api from '../utils/api'

const useWorkSpaceStore = create((set, get) => ({
  workSpace: [],
  loading: false,
  error: null,

  // 1. جلب مساحات العمل
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

  // 2. حذف مساحة عمل
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

  // 3. تحديث مساحة عمل
  updateWorkSpace: async (workSpaceID, updatedData) => {
    set({ loading: true, error: null })
    try {
      const response = await api.put(`/api/v1/workspaces/${workSpaceID}`, updatedData)

      if (response.data) {
        const updatedItem = response.data.data || response.data
        const updatedList = get().workSpace.map((item) => 
          item.id === workSpaceID ? { ...item, ...updatedItem } : item
        )
        set({ workSpace: updatedList, loading: false })
      } else {
        set({ loading: false })
      }
    } catch (error) {
      console.error("UPDATE ERROR:", error)
      set({ loading: false, error: error.response?.data?.message || error.message || error })
    }
  }
}))

export default useWorkSpaceStore;