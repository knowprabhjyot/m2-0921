import React, { Component } from 'react'
import UserContext from '../context/userContext'

export default class ComponentC extends Component {
  render() {
    return (
        <UserContext.Consumer>
              {
                  (userArray) => {
                    return <div>
                        {
                            userArray && userArray.map((value) => {
                                return <div>{value.email}</div>
                            })
                        }
                        </div>
                  }
              }
        </UserContext.Consumer>
    )
  }
}
