import {createAction} from 'redux-actions';

export const ADD_COUNT = 'ADD_COUNT';

export class CountAction {
    static add = createAction(ADD_COUNT, (num: number) => num);
}