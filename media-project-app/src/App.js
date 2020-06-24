import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
    super()

    this.state = {
      menuButton: false
    }
  };

  closeButton = () =>{
    this.setState({menuButton: !this.state.menuButton})
  }


  render(){
    return(
      <div className="master-class">
      <header className = "header-container">
        <h1 id = "logo">Start Bootstrap</h1>
        <nav className ="nav-buttons">
          <span>Services</span>
          <span>Portfolio</span>
          <span>About</span>
          <span>Team</span>
          <span>Contact</span>
        </nav>



        <div className="alt-menu" onClick={this.closeButton}>Menu</div>
        {this.state.menuButton
          ? (
            <nav className ="menu-button">
              <span>Services</span>
              <span>Portfolio</span>
              <span>About</span>
              <span>Team</span>
              <span>Contact</span>
            </nav>

          )
        : null}
      </header>
        <body>
        </body>

    </div>


    )
  }
}

export default App