import { FetchStatus } from '../const';
import { store } from '../store';
import { Review } from './reviews';

export type Comments = {
  comments: Review[];
  fetchStatus: FetchStatus;
  postStatus: FetchStatus;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
