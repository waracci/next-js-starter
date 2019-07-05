import { fork, all } from 'redux-saga/effects';
import watchLoadData from './LoadDataSaga';
import watchClock from './ClockSaga';

export default function* rootSaga() {
    yield all([
        fork(watchLoadData),
        fork(watchClock)
    ])

}
