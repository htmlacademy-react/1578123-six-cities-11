import { createSelector } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { Review } from '../../types/reviews';
import { State } from '../../types/state';

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
