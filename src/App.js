import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      names: [],
      
    


    }

  }
  componentDidMount() {
    const url = "https://api.jsonbin.io/b/5f4d604b514ec5112d136cd6";
   

    
    fetch(url) 
      .then(data => data.json())
      .then(data => this.setState({ names: data}))


    }

  
  render() {
    const { names } = this.state;

    return(
      <div>
          {names.map((user) => (
          <p key={user.chipNumber}>{user.owner.name} {user.owner.lastName}</p>

          ))}

      </div>
    
    )
  }
 
}

export default App;
