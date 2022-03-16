import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import StyledButton from './stylisedButton';


class App extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement() {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      })
    } else {
      alert("The counter value should be more than 0");
    }
  }

  render() {
    return (
      <div className='App'>
        <StyledButton title="Temporary button" />
        <button onClick={() => this.increment()}>+</button>
        <span>{this.state.counter}</span>
        <button  onClick={() => this.decrement()}>-</button>
      </div>
    )
  }
}

export default App;
