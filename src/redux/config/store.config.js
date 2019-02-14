import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from '../reducer/index';
import rootSaga from '../sagas/rootSaga';


//rootSaga dung de quan ly nhieu saga 
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  allReducers,
 applyMiddleware(sagaMiddleware)
);

 sagaMiddleware.run(rootSaga);

export  default store;
  