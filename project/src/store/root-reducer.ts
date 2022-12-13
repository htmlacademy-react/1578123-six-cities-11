import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { comments } from './comments/comments';
import { favorites } from './favorites/favorites';
import { notifications } from './notifications/notifications';
import { offers } from './offers/offers';
import { ui } from './ui/ui';
import { user } from './user/user';

export const rootReducer = combineReducers({
  [NameSpace.Offer]: offers.reducer,
  [NameSpace.Ui]: ui.reducer,
  [NameSpace.User]: user.reducer,
  [NameSpace.Comments]: comments.reducer,
  [NameSpace.Favorites]: favorites.reducer,
  [NameSpace.Notifications]: notifications.reducer,
});
