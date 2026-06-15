import { create } from "zustand";

const usePopStore = create((set) => ({
  isModalOpen: false,
  modalType: null,
  modalData: null,

  openModal: (type, data = null) =>
    set({
      isModalOpen: true,
      modalType: type,
      modalData: data,
    }),

  closeModal: () =>
    set({
      isModalOpen: false,
      modalType: null,
      modalData: null,
    }),
}));

export default usePopStore;