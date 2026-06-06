import { create } from "zustand";

type Notification = {
  id: string;
  message: string;
};

type State = {
  notifications: Notification[];
  add: (message: string) => void;
  remove: (id: string) => void;
};

export const useNotificationStore = create<State>((set) => ({
  notifications: [],

  add: (message) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        {
          id: crypto.randomUUID(),
          message,
        },
      ],
    })),

  remove: (id) =>
    set((state) => ({
      notifications: state.notifications.filter(
        (n) => n.id !== id
      ),
    })),
}));