import React, { Component } from 'react'
import Child1 from './child1'

export default class Parent1 extends Component {
  render() {
    return (
      <div>
          <Child1 title={this.props.childData} description="I am child components' description" />
      </div>
    )
  }
}
