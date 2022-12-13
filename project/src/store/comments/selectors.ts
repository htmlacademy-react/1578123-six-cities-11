import { createSelector } from '@reduxjs/toolkit';
import { sortCommentsByDate } from '../../comments';
import { FetchStatus, NameSpace } from '../../const';
import { Review } from '../../types/reviews';
import { State } from '../../types/state';

const MAX_COMMENTS_COUNT = 10;

export const getComments = (state: State): Review[] => state[NameSpace.Comments].comments;

export const getCommentsFetchStatus = (state: State): FetchStatus => state[NameSpace.Comments].fetchStatus;

export const getPostCommentStatus = (state: State): FetchStatus => state[NameSpace.Comments].postStatus;

export const selectPostCommentStatus = createSelector(
  [getPostCommentStatus],
  (status) => ({
    isLoading: status === FetchStatus.Pending,
    isError: status === FetchStatus.Error,
    isSuccess: status === FetchStatus.Success,
  })
);

export const selectCommentsCount = createSelector([getComments], (comments) => comments.length);

export const selectSortedComments = createSelector([getComments], (comments) => {
  const sortedComments = comments.slice().sort(sortCommentsByDate).slice(-MAX_COMMENTS_COUNT);

  return sortedComments;
});
