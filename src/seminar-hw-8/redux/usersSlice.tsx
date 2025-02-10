import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    id: number;
    name: string;
}

interface UsersState {
    users: User[];
}

const initialState: UsersState = {
    users: [
        { id: 1, name: 'Матвей Рудинский' },
        { id: 2, name: 'Вова Виноградов' },
    ],
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        updateUserName(state, action: PayloadAction<{ id: number; name: string }>) {
            const { id, name } = action.payload;
            const user = state.users.find((user) => user.id === id);
            if (user) {
                user.name = name;
            }
        },
    },
});

export const { updateUserName } = usersSlice.actions;
export default usersSlice.reducer;