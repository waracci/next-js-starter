import { combineReducers } from 'redux';
import firstReducer from './reducer';

const rootReducer = combineReducers({
    firstReducer: firstReducer
})

export default rootReducer;
