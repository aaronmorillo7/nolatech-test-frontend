import { apiLogin, apiCheckToken, apiSignup } from "../../api/repositories/auth/index";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: {},
  },
  reducers: {
    login: async (state, action) => {
      const { data, error } = await apiLogin(action.payload);

      if (!data?.success || error) {
        localStorage.removeItem("access_token");
        return;
      }

      localStorage.setItem("access_token", data.access_token);

      window.location.pathname = "/dashboard";

      state.data = {
        ...state.data,
        ...data,
      };
    },
    signup: async (state, action) => {
      const { data, error } = await apiSignup(action.payload);
      if (!data?.success || error) {
        localStorage.removeItem("access_token");
        return;
      }

      window.location.pathname = "/login";

      state.data = {
        ...state.data,
        ...data,
      };
    },
    checkToken: async (state) => {
      const accessToken =
        state.auth?.access_token || localStorage.getItem("access_token");
      const { data, error } = await apiCheckToken(accessToken);

      if (!data?.success || error) {
        localStorage.removeItem("access_token");
        window.location.pathname = "/login";
      }

      state.data = {
        ...state.data,
        ...{
          isLoggedIn: true,
        },
      };
    },
  },
});

export const { login, signup, checkToken } = authSlice.actions;
export default authSlice.reducer;
