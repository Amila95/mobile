import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    auth: AuthReducer,
    errors:errorReducer
})