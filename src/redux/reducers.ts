import {ADD_COUNT, DECREASE_COUNT_SUCCEEDED} from './action-types';

export interface Counter {
    total?: number;
}

const initialState: Counter = {
    total: 888,
};

export const counter = (state: Counter = initialState, action) => {
    switch (action.type) {
        case ADD_COUNT:
            const total = state.total + action.payload;
            return {...state, total};
        case DECREASE_COUNT_SUCCEEDED:
            return {...state, total: state.total - action.payload};
        default:
            return state;
    }
};