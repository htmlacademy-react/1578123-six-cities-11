import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { datatype } from 'faker';
import { NameSpace } from '../../const';
import { Notification } from '../../types/notification';
import { NotificationData } from '../../types/state';

const initialState: NotificationData = {
  notifications: [],
};

export const notifications = createSlice({
  name: NameSpace.Notifications,
  initialState,
  reducers: {
    pushNotification: (state, action: PayloadAction<Omit<Notification, 'id'>>) => {
      const id = String(datatype.number());
      state.notifications.push({ id, ...action.payload });
    },
    clearNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter((item) => item.id !== action.payload);
    },
  },
});

export const { pushNotification, clearNotification } = notifications.actions;
