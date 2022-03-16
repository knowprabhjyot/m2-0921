import React, { Component } from 'react'

export default class Child1 extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();

        // This state in class based component 
        this.state = {
            description: "My description"
        }


        // BIND FUNCTION // LETS IGNORE THIS WAY FOR NOW
        // TOMORROW I WILL EXPLAIN CALL APPLY BIND
        // this.changeDescription = this.changeDescription.bind(this);
        
    }

    changeDescription() {
        // setState

        this.setState({
            description: "My description is updated now"
        })
    }

    render() {
        console.log(this.props); // props is a reserved keyword
        return (
            <div>
                <p> {
                    this.props.title
                }</p>
                <p>{this.state.description}</p>
                <button onClick={() => this.changeDescription()}>Change Description</button>
            </div>
        )
    }
}


// Parent1 Component (calls an api and has some data)   ---> MAKE USE OF PROPS (DATA)       --- >   Child1 Component

// MAIN PARENT 
// Parent1
// Parent2

// Context API
// REDUX

