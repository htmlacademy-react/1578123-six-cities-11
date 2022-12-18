import { AuthorizationStatus, FetchStatus } from '../../const';
import { UserProcessData } from '../../types/state';
import { checkAuthAction, logoutAction } from '../api-actions';
import { user } from './user';

describe('Reducer: user', () => {
  let state: UserProcessData;

  beforeEach(() => {
    state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      user: null,
      fetchStatus: FetchStatus.Idle,
    };
  });

  it('Should return initial state without additional parameters', () => {
    expect(user.reducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual({
      authorizationStatus: AuthorizationStatus.Unknown,
      user: null,
      fetchStatus: FetchStatus.Idle,
    });
  });

  describe('checkAuthAction test', () => {
    it('should update authorizationStatus to "Auth" if loginAction fulfilled', () => {
      expect(
        user.reducer(state, { type: checkAuthAction.fulfilled.type })
      ).toEqual({
        authorizationStatus: AuthorizationStatus.Auth,
        user: undefined,
        fetchStatus: FetchStatus.Success,
      });
    });

    it('should update authorizationStatus to "No_Auth" if loginAction rejected', () => {
      expect(
        user.reducer(state, { type: checkAuthAction.rejected.type })
      ).toEqual({
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: null,
        fetchStatus: FetchStatus.Error,
      });
    });
  });

  describe('logoutAction test', () => {
    it('should update authorizationStatus to "No_Auth" if logoutAction fulfilled', () => {
      expect(
        user.reducer(state, { type: logoutAction.fulfilled.type })
      ).toEqual({
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: null,
        fetchStatus: FetchStatus.Success,
      });
    });
  });
});
