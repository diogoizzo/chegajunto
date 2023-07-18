import INotification from '../interfaces/INotification';

export enum NotificationActionsTypes {
   addNotification = 'addNotification',
   removeNotification = 'removeNotification'
}

export interface NotificationActions {
   type: NotificationActionsTypes;
   payload: INotification[];
}

export default function inboxReducer(
   state: INotification[],
   action: NotificationActions
) {
   switch (action.type) {
      case NotificationActionsTypes.addNotification:
         return [...state];
      case NotificationActionsTypes.removeNotification:
         return [...state];
   }
}
