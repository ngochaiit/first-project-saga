import { combineReducers } from 'redux';
import apiReducers from './apiReducer';

const allReducers = combineReducers(
    {
        apiReducers
    }
)

export default allReducers;