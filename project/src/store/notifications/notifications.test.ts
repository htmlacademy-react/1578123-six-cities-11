import { nanoid } from 'nanoid';
import { NotificationData } from '../../types/state';
import { makeFakeNotification } from '../../utils/mocks';
import {
  clearNotification,
  notifications,
  pushNotification,
} from './notifications';

describe('Reducer: notifications', () => {
  let state: NotificationData;

  beforeEach(() => {
    state = {
      notifications: [],
    };
  });

  it('Should return initial state without additional parameters', () => {
    expect(
      notifications.reducer(undefined, { type: 'UNKNOWN_ACTION' })
    ).toEqual({
      notifications: [],
    });
  });

  describe('pushNotification test', () => {
    it('pushNotification', () => {
      const fakeNotifications = Array.from({ length: 5 }, () =>
        makeFakeNotification()
      );
      const fakeNotificationNew = makeFakeNotification();
      const fakeNotificationsAll = fakeNotifications.concat([
        fakeNotificationNew,
      ]);

      expect(
        notifications.reducer(
          { notifications: fakeNotifications },
          pushNotification(fakeNotificationNew)
        )
      ).toEqual({
        notifications: fakeNotificationsAll,
      });
    });
  });

  describe('clearNotification test', () => {
    it('clearNotification', () => {
      const fakeNotifications = Array.from({ length: 5 }, () =>
        makeFakeNotification()
      );
      const id = nanoid();
      const fakeNotificationsAll = fakeNotifications.filter(
        (item) => item.id !== id
      );
      expect(
        notifications.reducer(
          { notifications: fakeNotifications },
          clearNotification(id)
        )
      ).toEqual({
        notifications: fakeNotificationsAll,
      });
    });
  });
});
