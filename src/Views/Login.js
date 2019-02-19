import React, { Component } from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import styled, { createGlobalStyle } from 'styled-components'

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

            <div style={cardColor} className="col-sm-8" >

              <div style={cardColor} className="jumbotron">



                <div className="row">
                  <div className="col-11 col-md-11 col-sm-10">
                  </div>
                  <div className="col-1 col-md-1 col-sm-2">
                    <a href="/login" class="text-secondary">Admin</a>
                  </div>
                </div><br/>





                <h3 align="left" style={helpLink}>
                  Please enter KMUTT username and password.<br/>Click on the Login button to continue.
                </h3>

                <br/>

                <form>
                  <div className="form-group">
                    <label for="exampleInputEmail1" style={helpLink}>Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"/>
                    <small id="emailHelp" className="form-text text-muted">Enter your KMUTT student ID or username.</small>
                  </div>

                  <div className="form-group">
                    <label for="exampleInputPassword1" style={helpLink}>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                  </div>
                </form>

                <br/>

                <div className="row">
                  <div className="col-2 col-md-2" >
                    <a href="/" className="btn btn-outline-info">Login</a>
                  </div>
                  <div className="col-8 col-md-9">
                  </div>
                  <div className="col-2 col-md-1">
                    <a href="/login" class="text-info">Help</a>
                  </div>
                </div>

              </div>

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
