import * as constant from '../constant/actionTypes'
//Saga effect
import{put, takeLatest,call} from 'redux-saga/effects'
import {Api} from './api'

function* fetchData()
{
    try{
        console.log('start fetch Data')
        console.log(Api.getApi,'content api')
        const recievedData = yield call(Api.getApi);
        console.log(recievedData,'nhan api')
        yield put({type: constant.FETCH_DATA_SUCCESS, payload: recievedData})

    }
    catch(error)
    {
        yield put({type: constant.FETCH_DATA_FAILED  })
    }
}


    export function* watchFetchMovies()
    {
        yield takeLatest(constant.FETCH_DATA, fetchData)
    }