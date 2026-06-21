import { create } from "zustand";

const usePopStore = create((set) => ({
  isModalOpen: false,

  openModal: () =>
    set({
      isModalOpen: true,
    }),

  closeModal: () =>
    set({
      isModalOpen: false,
    }),
}));

export default usePopStore;