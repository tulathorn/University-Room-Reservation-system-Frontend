import React, { Component } from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import LoginCard from '../Components/loginForm'
import language from '../languages.json'


 const bgImage = require('../Pictures/bg.png');
 const bgStyle = {
   width: 'auto',
   height: '100%',
   backgroundImage: `url(${bgImage})`,
   backgroundSize: 'absolute'
 }

const languageLink = {
  color: 'white'
}

class LoginView extends Component {
  componentWillMount() {
    localStorage.setItem('language', localStorage.getItem('language') || 0 )  
  }

  langEN = () => {
    localStorage.setItem('language',0)
    window.location.reload()
  }

  langTH = () => {
    localStorage.setItem('language',1)
    window.location.reload()
  }

  render() {
    return(

      <div style={bgStyle}>
        <div className="container">
          <br/><br/><br/><br/>
          <div className="row justify-content-center">
            <div className="col-sm-4" >
              <br/><br/><br/><br/><br/><br/><br/><br/>
                <center>
                  <img src={require("../Pictures/logoText3.png")} alt=""/>
                </center>
              <br/><br/>
            </div>
            <div className="col-sm-8" >
              <LoginCard />
            </div>
          </div>
          <center>
            <button type="button" onClick={() => this.langEN()} className="btn btn-link" style={languageLink}>{language[localStorage.getItem('language')].Login.English}</button>
            <button type="button" onClick={() => this.langTH()} className="btn btn-link" style={languageLink}>{language[localStorage.getItem('language')].Login.Thai}</button>
            <br/>
          </center>
          <br/><br/><br/><br/><br/><br/>
        </div>
      </div>
    );
  }
}

export default LoginView
