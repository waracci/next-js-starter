/* global fetch */

import { put, takeEvery } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { loadDataSuccess } from '../../actions/DataAction'
import * as actionTypes from '../../actions/constants'
import { failure } from '../../actions/actions';

es6promise.polyfill()

function * loadDataSaga () {
    try {
      const res = yield fetch('https://jsonplaceholder.typicode.com/users?limit=9')
      const data = yield res.json()
      yield put(loadDataSuccess(data))
    } catch (err) {
      yield put(failure(err))
    }
  }

  function* watchLoadData() {
    yield takeEvery(actionTypes.LOAD_DATA, loadDataSaga);
  }
  
  export default watchLoadData;
