import { createAction } from "@reduxjs/toolkit";

export const loginUser = createAction("auth/login");
export const logoutUser = createAction("auth/logout");
