import * as constant from '../constant/actionTypes'

export const fetchApiAction = (data) =>
{
    return{
        type: constant.FETCH_DATA,
        payload: data
    }
} 

export const fetchSuccessAction = (data) =>
{
    return{
        type: constant.FETCH_DATA_SUCCESS,
        payload: data
    }
}

export const fetchFailAction = () =>
{
    return{
        type: constant.FETCH_DATA_FAILED
    }
}