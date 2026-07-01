import { create } from "zustand"
import { persist } from "zustand/middleware"

const useBoardStore = create(
    persist(
        (set) => ({
            WorkSpaceId: '',

            setWorkSpaceId: (id) => {
                set({ WorkSpaceId: id })
            },
        }),
        {
            name: "board-storage",
            partialize: (state) => ({
                WorkSpaceId: state.WorkSpaceId
            })
        }
    )
)

export default useBoardStore;