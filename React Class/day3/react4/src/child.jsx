import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    console.log(this.props.children);
    return (
      <div>{this.props.children}</div>
    )
  }
}
