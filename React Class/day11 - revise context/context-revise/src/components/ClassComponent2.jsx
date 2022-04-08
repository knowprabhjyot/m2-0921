import React, { Component } from 'react'
import UserContext from '../context/UserContex'

export default class ClassComponent2 extends Component {
  render() {
    return (
      <UserContext.Consumer>
       {
         // Array
         (photos) => {
          return <div>
            {
              photos && photos.map((data) => {
                return <div>{data.title}</div>
              })
            }
          </div>
         }
       }
      </UserContext.Consumer>
    )
  }
}
