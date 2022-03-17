import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Child from './child';
import { Fragment } from 'react';

 class App extends Component {


  // ***** MOUNTING PHASE STARTS ******** ///
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      name: "Daniel"
    }
  }

  updateName(typedValue) {




    // this.state.name = "prabh";// This is a wrong practice

    this.setState({
      name: typedValue
    }) // This is the right practice
  }


  render() {
    console.log("render");
    return (
      <> 
         {/* <input value={this.state.name} onChange={(e) => this.updateName(e.target.value)} placeholder='Enter Name' /> */}
         <Child> 
         {/* // children */}
           <h1>Hello</h1> 
         </Child>
        <p>I am here</p>
      </>
    )
  }

  componentDidMount() {
    console.log("componentdidmount");
  }
  

  // This lifecycle method is called just before the render
  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerived state from props");
  //   return {
  //     name: "Daniel"
  //   }
  // }

    // SEQUENCE OF LIFE CYCLE IN MOUNTING PHASE
    // Constructor
    // getDerivedStateFromProps
    // render
    // componentdidmount

    // ***** MOUNTING PHASE ENDS ******** ///


    // ***** UPDATING PHASE STARTS ****** //


    static getDerivedStateFromProps() {
      console.log("getDerived state from props");
    }

    shouldComponentUpdate() {
      console.log("should component update");
      return false;
    }

    componentDidUpdate() {
      console.log("ComponentDidUpdate");
    }


    // SEQUENCE OF LIFE CYCLE IN UPDATING PHASE
    // - getDerivedStateFromProps
    // - shouldComponentUpdate (if it is returned true, then only execute the next functions)
    // - render
    // - componentDidUpdate


    // **** UPDATING PHASE ENDS ***** //


  // ***** UNMOUNTING PHASE STARTS ******** ///

  componentWillUnmount() {
    console.log("Componentwillunmount");
  }

  // **** UNMOUNTING PHASE ENDS ***** //


}

//  class NewApp extends Component {
//   render() {
//     return (
//       <h1>I am new app</h1>
//     )
//   }
// }

// If  component is exporting only one Function/cllass
export default App;
