import * as actionTypes from './constants';

export function failure (error) {
  return {
    type: actionTypes.FAILURE,
    error
  }
}


