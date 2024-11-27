import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IAdmin {
  isLoggedIn: boolean;
}

const initialState: IAdmin = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "AdminAuth",
  initialState,
  reducers: {
    setAdminLoggedIn: (state: IAdmin, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setAdminLoggedIn } = authSlice.actions;
export default authSlice.reducer;
