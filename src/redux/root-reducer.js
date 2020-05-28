
// reducers/index.js

import { combineReducers } from 'redux';
import { listReducer } from './find-work';

const reducers = combineReducers({
    list: listReducer
});

export default reducers;