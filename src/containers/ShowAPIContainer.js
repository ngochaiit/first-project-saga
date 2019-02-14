import React, { Component } from 'react';
import ShowAPIComponent from '../components/ShowAPIComponent'
import {connect} from 'react-redux'
import { fetchApiAction } from '../redux/action/getApiAction'

class ShowAPIContainer extends Component {
  render() {
      console.log(this.props.onData)
    return (
     <ShowAPIComponent onFetchApi = {this.props.onFetchApi} ondata = {this.props.onData}/>
    );
  }
}


const mapStateToProps = (state) => 
{
return{
    onData: state.apiReducers.data
}
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        onFetchApi: data => dispatch(fetchApiAction(data))  
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowAPIContainer);
