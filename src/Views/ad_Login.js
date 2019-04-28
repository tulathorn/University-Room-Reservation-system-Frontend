import React, { Component } from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import AdLoginCard from '../Components/ad_loginForm'
import language from '../languages.json'

 const bgImage = require('../Pictures/bg.png');
 const bgStyle = {
   width: 'auto',
   height: '100%',
   backgroundImage: `url(${bgImage})`,
   backgroundSize: 'absolute'
 }

const cardColor = {
  backgroundColor: 'white'
}

const languageLink = {
  color: '#6c757d'
}

class AdLoginView extends Component {
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
      <div style={bgStyle} >
        <div className="container">
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <div className="row justify-content-center">
            <div className="col-sm-4" >
              <br/><br/><br/>
              <center>
                <img src={require("../Pictures/logoText3.png")} alt=""/>
              </center>
              <br/><br/>
            </div>
            <div style={cardColor} className="col-sm-8" >
              <br/>
              <AdLoginCard/>
            </div>
          </div>
          <center>
            <button type="button" onClick={() => this.langEN()} className="btn btn-link" style={languageLink}>{language[localStorage.getItem('language')].adLogin.English}</button>
            <button type="button" onClick={() => this.langTH()} className="btn btn-link" style={languageLink}>{language[localStorage.getItem('language')].adLogin.Thai}</button>
            <br/>
          </center>
          <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      </div>
    );
  }
}

export default AdLoginView
