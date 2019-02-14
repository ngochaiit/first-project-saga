
import {all, fork} from 'redux-saga/effects'// nhiem vu cua all la dung de chay nhieu saga
import { watchFetchMovies} from './effectSaga'


export default function* rootSaga()
{
    console.log('nao ta cung choi voi saga')
    yield all([
        fork(watchFetchMovies)
      ]);
}