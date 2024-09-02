import { create } from "zustand";

const useUserStore = create((set) => ({
  userData: [],

  addUserData: (newData) => {
    set((state) => ({
      userData: [...state.userData, newData],
    }));
  },

  updateUserData: (index, newData) => {
    set((state) => {
      const updatedData = [...state.userData];
      updatedData[index] = newData;
      return { userData: updatedData };
    });
  },

  deleteUserData: (index) => {
    set((state) => {
      const updatedData = state.userData.filter((_, i) => i !== index);
      return { userData: updatedData };
    });
  },
}));

export default useUserStore;
