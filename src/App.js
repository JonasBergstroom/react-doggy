import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      names: []
    
      
    }

  }
  componentDidMount() {
    const url = "https://api.jsonbin.io/b/60882ce55210f622be3b4768";
   
    fetch(url) 
      .then(data => data.json())
      .then(data => this.setState({ names: data.dogs}))
    }
  
  render() {
    const { names } = this.state;

    return(
      <div className="container">
        <div className="jumbotron">
        <h1 className="display-1">Doggy daycare: </h1>
        </div>
        <div className="users">
          {names.map((user) => (
            <div className="card" key={user.chipNumber}>
            <img src={user.img} className="card-img-top" alt={`${user.name} img`} />
            <div className="card-body">
              <h5 className="card-title">{user.name} {user.sex}</h5>
              <p className="card-text">Owners name is:{user.owner.name}</p>
              <a href="#" class="btn btn-primary">More about this friend</a>
            </div>
            </div>

          ))}
              </div>
          </div>
    )
  }
 
}

export default App;
