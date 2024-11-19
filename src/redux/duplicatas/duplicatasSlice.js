import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    positions: [
        { id: 1, position: [-9.6445, -35.7378] },
        { id: 2, position: [-3.0986, -60.0219] },
        { id: 3, position: [-1.4478, -51.7731] },
        { id: 4, position: [-12.9714, -38.5014] },
        { id: 5, position: [-3.7197, -38.5389] },
        { id: 6, position: [-19.1953, -40.2927] },
        { id: 7, position: [-16.6749, -49.2455] },
        { id: 8, position: [-5.4483, -44.2948] },
        { id: 9, position: [-19.9167, -43.9333] },
        { id: 10, position: [-20.9037, -54.9081] },
        { id: 11, position: [-12.5755, -55.7081] },
        { id: 12, position: [-2.8278, -53.2193] },
        { id: 13, position: [-6.8825, -35.2042] },
        { id: 14, position: [-8.0543, -35.2042] },
        { id: 15, position: [-5.0901, -42.8153] },
        { id: 16, position: [-25.4278, -51.9253] },
        { id: 17, position: [-22.9083, -43.1828] },
        { id: 18, position: [-5.8142, -35.2042] },
        { id: 19, position: [-30.0333, -51.2167] },
        { id: 20, position: [-27.595, -48.549] },
        { id: 21, position: [-10.8925, -37.0833] },
        { id: 22, position: [-23.5505, -46.6333] },
        { id: 23, position: [-9.5378, -48.3328] },
    ],
    estadosDuplicatas: [
        { estado: "AL", duplicatas: 102 },
        { estado: "AM", duplicatas: 57 },
        { estado: "AP", duplicatas: 4 },
        { estado: "BA", duplicatas: 1323 },
        { estado: "CE", duplicatas: 5602 },
        { estado: "ES", duplicatas: 203 },
        { estado: "GO", duplicatas: 102 },
        { estado: "MA", duplicatas: 6 },
        { estado: "MG", duplicatas: 4006 },
        { estado: "MS", duplicatas: 34 },
        { estado: "MT", duplicatas: 4 },
        { estado: "PA", duplicatas: 30 },
        { estado: "PB", duplicatas: 214 },
        { estado: "PE", duplicatas: 2817 },
        { estado: "PI", duplicatas: 276 },
        { estado: "PR", duplicatas: 624 },
        { estado: "RJ", duplicatas: 888 },
        { estado: "RN", duplicatas: 273 },
        { estado: "RS", duplicatas: 312 },
        { estado: "SC", duplicatas: 1298 },
        { estado: "SE", duplicatas: 1630 },
        { estado: "SP", duplicatas: 158240 },
        { estado: "TO", duplicatas: 43 },
    ],
};

const duplicatasSlice = createSlice({
    name: 'duplicatasSlice',
    initialState,
    reducers: {
        addPosition(state, action) {
            state.positions.push(action.payload);
        },
        addEstadoDuplicata(state, action) {
            state.estadosDuplicatas.push(action.payload);
        },
    },
});

export const { addPosition, addEstadoDuplicata } = duplicatasSlice.actions;

export default duplicatasSlice.reducer;
