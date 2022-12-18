import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, FetchStatus, NameSpace } from '../../const';
import { UserProcessData } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

const initialState: UserProcessData = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  fetchStatus: FetchStatus.Idle,
};

export const user = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.fetchStatus = FetchStatus.Success;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.fetchStatus = FetchStatus.Error;
      })
      .addCase(loginAction.pending, (state) => {
        state.fetchStatus = FetchStatus.Pending;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
        state.fetchStatus = FetchStatus.Success;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.fetchStatus = FetchStatus.Error;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = null;
        state.fetchStatus = FetchStatus.Success;
      });
  },
});
