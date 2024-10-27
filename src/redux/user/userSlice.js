import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';
import { toast } from 'react-toastify';

// Ação assíncrona para login do usuário
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (data, { rejectWithValue }) => {
        try {
            const response = await api.post('/users/login', data);
            return response.data[0];
        } catch (error) {
            toast.error('Erro ao fazer login.');
            return rejectWithValue(error.response.data || error.message);
        }
    }
);

const initialState = {
    user: JSON.parse(localStorage.getItem('UserData')) || null,
    status: 'idle', // idle, loading, succeeded, failed
    error: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.user = null;
            state.status = 'idle';
            localStorage.removeItem('UserData');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
                localStorage.setItem('UserData', JSON.stringify(action.payload));
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
