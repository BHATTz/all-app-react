import { create } from "zustand";

const useUserStore = create((set) => ({
  userData: [],
  addUserData: (data) =>
    set((state) => ({ userData: [...state.userData, data] })),
  clearUserData: () => set({ userData: [] }),
}));

export default useUserStore;
