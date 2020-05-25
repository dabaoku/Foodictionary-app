import { Credentials } from '../models/credentials.model';
import { User } from '../models/user.model';
import { createAction, props } from '@ngrx/store';

export const loadUserSuccess = createAction(
  '[init] load user success',
  props<{ user: User }>(),
);

export const loadUserFailure = createAction(
  '[init] load user failure',
  props<{ error: any }>(),
);

export const getAccountBasicInfoSuccess = createAction(
  '[auth/api] get account basic info success (login success)',
  props<{ user: User }>(),
);

export const getAccountBasicInfoFailure = createAction(
  '[auth/api] get account basic info failure (login failure)',
  props<{ error: any }>(),
);

export const refreshTokenSuccess = createAction(
  '[auth/api] refresh token success (login success)',
  props<{ user: User }>(),
);

export const refreshTokenFailure = createAction(
  '[auth/api] refresh token failure (login failure)',
  props<{ error: any }>(),
);

export const login = createAction(
  '[login page] login',
  props<{ credentials: Credentials }>(),
);

export const loginSuccess = createAction(
  '[auth/api] login success',
  props<{ user: User }>(),
);

export const loginFailure = createAction(
  '[auth/api] login failure',
  props<{ error: any }>(),
);

export const logOut = createAction('[app] log out');
