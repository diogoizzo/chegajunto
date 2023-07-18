import React, { ReactNode, useContext, useReducer, Dispatch } from 'react';
import notificationReducer, {
   NotificationActions
} from '../reducer/notificationReducer';
import INotification from '../interfaces/INotification';

interface GlobalContextProviderProps {
   children: ReactNode;
}

const NotificationContext = React.createContext<INotification[]>([]);
const NotificationDispatchContext = React.createContext<
   React.Dispatch<NotificationActions> | Function
>(() => {});

export function useNotificationContext() {
   return useContext(NotificationContext);
}

export function useNotificationDispatch() {
   return useContext(NotificationDispatchContext);
}

export default function GlobalContext({
   children
}: GlobalContextProviderProps) {
   const [notificationState, notificationDispatch] = useReducer(
      notificationReducer,
      []
   );

   return (
      <NotificationDispatchContext.Provider value={notificationDispatch}>
         <NotificationContext.Provider value={notificationState}>
            {children}
         </NotificationContext.Provider>
      </NotificationDispatchContext.Provider>
   );
}
