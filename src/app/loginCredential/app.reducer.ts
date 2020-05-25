import { User } from '../models/user.model';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  select,
} from '@ngrx/store';
import * as AppActions from './app.actions';
import { pipe } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

export const appFeatureKey = 'app';

export interface State {
  user: User;
  loaded: boolean;
}

export const INITIAL_STATE: State = {
  user: null,
  loaded: false,
};

export const UNAUTHENTICATED_STATE: State = {
  user: null,
  loaded: true,
};

export const reducer = createReducer(
  INITIAL_STATE,
  on(AppActions.loadUserFailure, () => UNAUTHENTICATED_STATE),
  on(AppActions.getAccountBasicInfoSuccess, (_, { user }) => ({
    user,
    loaded: true,
  })),
  on(AppActions.refreshTokenSuccess, (_, { user }) => ({
    user,
    loaded: true,
  })),
  on(AppActions.refreshTokenFailure, () => UNAUTHENTICATED_STATE),
  on(AppActions.loginSuccess, (state, { user }) => ({ ...state, user })),
  on(AppActions.loginFailure, () => UNAUTHENTICATED_STATE),
  on(AppActions.logOut, () => UNAUTHENTICATED_STATE),
);

export const selectApp = createFeatureSelector<State>(appFeatureKey);

export const selectLoaded = createSelector(selectApp, (state) => state.loaded);

export const selectWhenLoaded = pipe(
  select(selectLoaded),
  filter((loaded) => loaded),
  take(1),
);

export const selectUser = createSelector(selectApp, (state) => state.user);


export const selectAccessToken = pipe(
  select(selectUser),
  filter((user) => !!user),
  map((user) => user.accessToken),
);
