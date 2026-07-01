import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: '',
      setToken: (token) => set({ token }),
      setUser: (user) => set({ user }),
      clearAuth: () => set({ user: null, token: '' }),
    }),
    {
      name: 'auth-storage'
    }
  )
)

export default useAuthStore;