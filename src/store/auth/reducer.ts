import { createAction } from "@reduxjs/toolkit";

export const signin = createAction('auth-signin');
export const signinSuccess = createAction('auth-signin-success');
export const signinFail = createAction('auth-signin-fail');
