import {call, put, select, fork, take} from 'redux-saga/effects'
import {CountAction, DECREASE_COUNT} from "./action-types";

function getDecreaseValue(num) {
    let value = parseInt((Math.random() * 10).toFixed(1)) + num;
    return Promise.resolve(value);
    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve(value);
    //     }, 1000);
    // });
}

function* worker(): any {
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

export function* watcher(): any {
    yield [
        fork(worker)
    ];
}