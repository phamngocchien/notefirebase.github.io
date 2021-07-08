
import './App.css';
import Nav from './Nav';
import NodeList from './NodeList';
import NodeForm from './NodeForm';
import {noteData } from './Components/firebaseConnect';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }
  // }
  // addData = (item) => {
  //   noteData.push(item)
  // }
  showForm = () => {
    if(this.props.isEdit){
      return <NodeForm/>
    }
  }
  


  render(){

    return (
      <div>
        <Nav/>
        <div className="container">
          <div className="row">
            <NodeList/>
            {/* <NodeForm getData={(item)=>this.addData(item)} /> */}
            {this.showForm()}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return{
      isEdit: state.isEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return{
      changeEditStatus: () =>{
          dispatch({type:"CHANGE_EDIT_STATUS"})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
