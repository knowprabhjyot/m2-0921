import './App.css';
import { Component } from 'react';
import UserContext from './context/userContext';
import ComponentA from './components/ComponentA';

class App extends Component {


  state = {
    user: []
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users').then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({
        user: data
      })
    })
  }

  render() {
   return (
   <UserContext.Provider value={this.state.user.data}>
     <ComponentA />
   </UserContext.Provider>
   )
  }
}

export default App;
