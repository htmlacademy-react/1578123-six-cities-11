import { FetchStatus } from '../../const';
import { Comments } from '../../types/state';
import { makeFakeComment } from '../../utils/mocks';
import { fetchCommentsAction, postCommentAction } from '../api-actions';
import { comments } from './comments';

describe('Reducer: comments', () => {
  let state: Comments;

  beforeEach(() => {
    state = {
      comments: [],
      fetchStatus: FetchStatus.Idle,
      postStatus: FetchStatus.Idle,
    };
  });

  it('Should return initial state without additional parameters', () => {
    expect(comments.reducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual({
      comments: [],
      fetchStatus: FetchStatus.Idle,
      postStatus: FetchStatus.Idle,
    });
  });

  describe('fetchCommentsAction test', () => {
    it('fetchCommentsAction fulfilled', () => {
      const fakeComments = Array.from({ length: 5 }, () => makeFakeComment());

      expect(
        comments.reducer(state, {
          type: fetchCommentsAction.fulfilled.type,
          payload: fakeComments,
        })
      ).toEqual({
        comments: fakeComments,
        fetchStatus: FetchStatus.Success,
        postStatus: FetchStatus.Idle,
      });
    });

    it('fetchCommentsAction rejected', () => {
      expect(
        comments.reducer(state, { type: fetchCommentsAction.rejected.type })
      ).toEqual({
        comments: [],
        fetchStatus: FetchStatus.Error,
        postStatus: FetchStatus.Idle,
      });
    });

    it('postCommentAction fulfilled', () => {
      expect(
        comments.reducer(state, { type: postCommentAction.fulfilled.type })
      ).toEqual({
        comments: undefined,
        fetchStatus: FetchStatus.Idle,
        postStatus: FetchStatus.Success,
      });
    });

    it('postCommentAction rejected', () => {
      expect(
        comments.reducer(state, { type: postCommentAction.rejected.type })
      ).toEqual({
        comments: [],
        fetchStatus: FetchStatus.Idle,
        postStatus: FetchStatus.Error,
      });
    });
  });
});
