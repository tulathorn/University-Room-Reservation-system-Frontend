import React, { Component } from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import styled, { createGlobalStyle } from 'styled-components'
import LoginCard from '../Components/loginCom'
import Swal from 'sweetalert2'

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

const languageLink = {
  color: 'white'
}

class LoginView extends Component {

  render() {
    return(

      <div style={bgStyle}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-4" >
              <br/><br/><br/>
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
            <button type="button" className="btn btn-link" style={languageLink}>English</button>
            <button type="button" className="btn btn-link" style={languageLink}>ภาษาไทย</button>
            <br/>
          </center>
        </div>
      </div>
    );
  }
}

export default LoginView
