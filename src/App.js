import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      names: [],
      pageNum: 1,
      
    }

  }
  componentDidMount() {
    const url = "https://api.jsonbin.io/b/607eb43024143e5df089b745";
   

    
    fetch(url) 
      .then(data => data.json())
      .then(data => this.setState({ names: data}))


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
            <img src={user.img} class="card-img-top" alt={`${user.name} img`} />
            <div className="card-body">
              <h5 className="card-title">{user.name} {user.sex}</h5>
              <p className="card-text">Owners name is:{user.owner.name}</p>
              <a href="#" class="btn btn-primary">More about this friend</a>
            </div>
            </div>

          ))}
          </div>

          <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">Prev</button>
          <button type="button" class="btn btn-primary">{this.state.pageNum}</button>
          <button type="button" class="btn btn-primary">Next</button>
            </div>   
          </div>

    
    )
  }
 
}

export default App;
