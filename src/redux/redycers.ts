import {ADD_COUNT} from './action-types';

export interface Counter {
    total?: number;
}

const initialState: Counter = {
    total: 0,
};

export const counter = (state: Counter = initialState, action) => {
    switch (action.type) {
        case ADD_COUNT:
            const total = state.total + action.payload;
            return {...state, total};
        default:
            return state;
    }
};