import {createAction} from 'redux-actions';

export const ADD_COUNT = 'ADD_COUNT';
export const DECREASE_COUNT = 'DECREASE_COUNT';
export const DECREASE_COUNT_SUCCEEDED = 'DECREASE_COUNT_SUCCEEDED';
export const DECREASE_COUNT_FAILED = 'DECREASE_COUNT_FAILED';

export class CountAction {
    static add = createAction(ADD_COUNT, (num: number) => num);
    static decrease = createAction(DECREASE_COUNT, (num: number) => num);
    static decreaseSucceeded = createAction(DECREASE_COUNT_SUCCEEDED, (num: number) => num);
    static decreaseFailed = createAction(DECREASE_COUNT_FAILED, (error) => error);
}