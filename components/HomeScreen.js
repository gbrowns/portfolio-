import React, {Component} from 'react'

class HomeScreen extends Component{
  constructor(props){
    super(props);

    this.state = {
      firstName: "Godwin",
      lastName: "Brown",
      title: "Software developer",
    }
  }

  render(){
    const {firstName, lastName, title} = this.state;
    return (
      <div className = "main-page">

        <div className = "overlay"></div>

        <div className = "board">

          <h1> {firstName} <span>{lastName}</span> </h1>
          <h3>{title}</h3>

          <div className = "icons">

            <a href = "https://twitter.com/home">
              <div className = "icon">
                <i className="fab fa-twitter fa-lg"></i>
              </div>
            </a>

            <a href = "https://www.facebook.com/">
              <div className = "icon">
                <i className="fab fa-facebook-f fa-lg"></i>
              </div>
            </a>

            <a href = "https://www.linkedin.com/feed/">
              <div className = "icon">
                <i className="fab fa-linkedin-in fa-lg"></i>
              </div>
            </a>

            <a href = "https://github.com/Godwin254">
              <div className = "icon">
                <i className="fab fa-github fa-lg"></i>
              </div>
            </a>

          </div>
          
          <div className = "buttons">

            <input type = "button" value = "Read more"/>
            <input type = "button" value = "Portfolio"/>

          </div>
        
        </div>

      </div>
    )
  }
}

export default HomeScreen