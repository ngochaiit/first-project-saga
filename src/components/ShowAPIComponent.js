import React, { Component } from 'react';

class ShowAPIComponent extends Component {
 
 renderData = () =>
 {

   let {ondata} = this.props;
   console.log(ondata)
  if(ondata.data)
  {
   console.log(ondata.data.data)
   const renderArray = ondata.data.data.map((dt,index) =>{
     return(
       <div key={index}>
       <div>{dt.title}</div>
       <div>{dt.content}</div></div>
       
     )
   })
   return(
     <div>
       <div>{ondata.data.result}</div>
      <div>{renderArray}</div>
     </div>
     
   )
  }
  else{
    console.log('vao else')
  }
   
 }
  render() {
  let {ondata} = this.props;
  console.log(ondata,'ben component')
    return (
      <div class="container">
        <button type="button" class="btn btn-primary" onClick = {() => this.props.onFetchApi('banh xeo')}>Fetch Movie</button>
        <button type="button" class="btn btn-primary">Add Movie</button>
       <div>{this.renderData()}</div>
    </div>
        

    );
  }
}

export default ShowAPIComponent;
