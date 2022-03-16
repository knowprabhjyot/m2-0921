import React, { Component } from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default class Class1  extends Component {

  // MOUNTING PHASE OF CLASS BASED COMPONENT

  constructor() {
      super(); // If you are extending from any other class, use super keyword
      console.log("1");
  }

  // This type of lifecycle hook is used when for example we have to call an api
  componentDidMount() {
    console.log("3");
  }

  render() {
    console.log("2");
    return (
      <div>class</div>
    )
  }
}
