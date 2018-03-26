import {call, put, select, fork, take} from 'redux-saga/effects'
import {CountAction, DECREASE_COUNT} from "./action-types";

function getDecreaseValue(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(parseInt((Math.random() * 10).toFixed(1)) + num);
        }, 1000);
    });
}

function* decreaseNumber(): any {
    while (true) {
        try {
            const action = yield take(DECREASE_COUNT);
            const state = yield select();
            const data = yield call(getDecreaseValue, action.payload);
            yield put(CountAction.decreaseSucceeded(data));
        } catch (error) {
            yield put(CountAction.decreaseFailed(error));
        }
    }
}

export function* rootSaga(): any {
    yield [
        fork(decreaseNumber)
    ];
}