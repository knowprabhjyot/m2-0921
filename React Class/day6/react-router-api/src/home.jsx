import logo from './logo.svg';
import { Component } from 'react';
import Card from './card';

class Home extends Component {

  state = {
    users: []
  }
  constructor() {
    super();
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users').then((response) => {
      return response.json();
    })
    .then((res) => {
      this.setState({
        users: res.data
      })
    })
  }

  render() {
    return (
      <div>
        {
          this.state.users.map((item , index) => {
            return <Card key={index} data={item} />
          })
        }
      </div>
    )
  }
}

export default Home;
