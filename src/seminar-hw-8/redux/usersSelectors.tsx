import { RootState } from './store.tsx';

export const selectUsers = (state: RootState) => state.users.users;

export const selectUserById = (state: RootState, userId: number) =>
    state.users.users.find((user) => user.id === userId);