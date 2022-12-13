import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { Review } from '../../types/reviews';
import { fetchCommentsAction, postCommentAction } from '../api-actions';

type Comments = {
  comments: Review[];
  fetchStatus: FetchStatus;
  postStatus: FetchStatus;
};

const initialState: Comments = {
  comments: [],
  fetchStatus: FetchStatus.Idle,
  postStatus: FetchStatus.Idle,
};

export const comments = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.pending, (state) => {
        state.fetchStatus = FetchStatus.Pending;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.fetchStatus = FetchStatus.Success;
        state.comments = action.payload;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.fetchStatus = FetchStatus.Error;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.postStatus = FetchStatus.Pending;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.postStatus = FetchStatus.Success;
      })
      .addCase(postCommentAction.rejected, (state) => {
        state.postStatus = FetchStatus.Error;
      });
  },
});
