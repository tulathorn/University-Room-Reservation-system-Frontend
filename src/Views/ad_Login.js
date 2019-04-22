import React, { Component } from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import AdLoginCard from '../Components/ad_loginForm'

import LanguageStore from '../stores/LanguageStore'
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
            <button type="button" className="btn btn-link" style={languageLink}>{language[LanguageStore.lang].adLogin.English}</button>
            <button type="button" className="btn btn-link" style={languageLink}>{language[LanguageStore.lang].adLogin.Thai}</button>
            <br/>
          </center>
          <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      </div>
    );
  }
}

export default AdLoginView
