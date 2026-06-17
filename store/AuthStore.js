import { create } from 'zustand'

const useAuthStore = create((set) => ({
  user: null,
  token: '',
  // دالة بسيطة لتحديث التوكن من الخارج
  setToken: (token) => set({ token }),
  clearAuth: () => set({ user: null, token: '' })
}))

export default useAuthStore;