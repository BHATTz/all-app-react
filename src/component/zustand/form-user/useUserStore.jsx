import { create } from "zustand";

const useUserStore = create((set) => ({
  userData: [],
  editingIndex: null,

  setEditingIndex: (index) => set({ editingIndex: index }),

  addUserData: (newData) => {
    set((state) => ({
      userData: [...state.userData, newData],
    }));
  },

  updateUserData: (index, newData) => {
    set((state) => {
      const updatedData = [...state.userData];
      updatedData[index] = newData;
      return { userData: updatedData, editingIndex: null };
    });
  },

  deleteUserData: (index) => {
    set((state) => {
      const updatedData = state.userData.filter((_, i) => i !== index);
      return { userData: updatedData, editingIndex: null };
    });
  },
}));

export default useUserStore;
