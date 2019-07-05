/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { tickClock } from '../../actions/ClockAction'
import * as actionTypes from '../../actions/constants';
es6promise.polyfill()

function * runClockSaga () {
  yield take(actionTypes.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield delay(1000)
  }
}


function * watchClock () {
  yield all([
    call(runClockSaga),
  ])
}

export default watchClock
