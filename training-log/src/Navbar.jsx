import React, { Component } from 'react'
import './Components.css'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  
  render(){
    return(
      <nav className="navbar navbar-default navbar-fixed-top navbar-expand-lg navbar-inverse">
        <div >
          
          <Link to="/" className="navbar-brand"> trainable.io </Link> 
          <Link to="/schedule" className="navbar-item"> Training Schedule </Link>
          <Link to="/createExercise" className="navbar-item"> Create Exercise </Link> 
        </div>
      </nav>
    )
  }
}

export default Navbar