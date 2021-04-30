import React, { Component } from 'react';
import './Dogs.css';
import { Link, withRouter} from "react-router-dom";



class Appp extends Component {
  
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
      const chipNumber  = this.props.match.params.chipNumber;
      console.log(chipNumber)
  
      return(
        <div className="container">
          <div className="jumbotron">
          <h1 className="display-1">Doggy daycare: </h1>
          </div>
          <div className="users">

          {names .filter((user) => {
              if(user.chipNumber.toLowerCase() === chipNumber.toLowerCase())
              {return user} 
              else {
              return null}
            })
      
            .map((user) => (
              <div className="card" key={user.chipNumber}>
              <img src={user.img} className="card-img-top" alt={`${user.name} img`} />
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h5 className="card-title">{user.sex}</h5>
                <h5 className="card-title">{user.breed} </h5>
                <p className="card-text">Owners name is:{user.owner.name} {user.owner.lastName}</p>
                <p className="card-text">{user.owner.name}s Number: {user.owner.phoneNumber}</p>

              </div>
              </div>
  
            ))}
                </div>
            </div>
      )
    }
   
  }
  
  
  export default withRouter(Appp);