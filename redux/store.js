import {legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import taskReducer from './reducers/taskReducer';
// const thunk = require('redux-thunk').default
const rootReducer = combineReducers({ tasks: taskReducer });
const store= legacy_createStore(rootReducer,applyMiddleware(thunk));

export default store;