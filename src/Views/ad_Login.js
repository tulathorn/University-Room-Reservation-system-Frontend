import React, { Component } from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import styled, { createGlobalStyle } from 'styled-components'
import AdLoginCard from '../Components/ad_loginForm'

 const logoImage = require('../Pictures/logoBg.png');
 const logoStyle = {
   width: 'auto',
   height: 'auto',
   backgroundImage: `url(${logoImage})`,
   backgroundSize: 'absolute'
 }

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

const text1Style = {
  color: 'white',
  textAlign: 'right',
};

const text2Style = {
  color: 'white',
  textAlign: 'center'
};

const bgColor = {
  backgroundColor: '#1F384B'
}

const languageLink = {
  color: '#6c757d'
}

const helpLink = {
  color: '#1F384B'
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
            <button type="button" className="btn btn-link" style={languageLink}>English</button>
            <button type="button" className="btn btn-link" style={languageLink}>ภาษาไทย</button>
            <br/>
          </center>
          <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      </div>
    );
  }
}

export default AdLoginView
