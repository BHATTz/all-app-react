import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [],
    editingIndex: null,
  },
  reducers: {
    setEditingIndex: (state, action) => {
      state.editingIndex = action.payload;
    },
    addUserData: (state, action) => {
      state.userData.push(action.payload);
    },
    updateUserData: (state, action) => {
      const { index, newData } = action.payload;
      state.userData[index] = newData;
      state.editingIndex = null;
    },
    deleteUserData: (state, action) => {
      state.userData = state.userData.filter((_, i) => i !== action.payload);
      state.editingIndex = null;
    },
  },
});

export const { setEditingIndex, addUserData, updateUserData, deleteUserData } =
  userSlice.actions;

export default userSlice.reducer;
