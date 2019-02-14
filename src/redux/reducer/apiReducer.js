import * as constant from '../constant/actionTypes'

let initialState = {
    data: {},
   
  };

  const apiReducers = (state = initialState, action) =>
  {
      switch(action.type)
      {
          case constant.FETCH_DATA:
          console.log(action.payload,'banh keo ')
          return { ...state, data: action.payload};

          case constant.FETCH_DATA_SUCCESS:
          return{ ...state, data: action.payload};

          case constant.FETCH_DATA_FAILED:
          return{ ...state}

          default:
          return state;
          
      }
  }

  export default apiReducers;
