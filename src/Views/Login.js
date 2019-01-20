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

const cardColor = {
  backgroundColor: 'white'
}

const text1Style = {
  color: 'white',
  textAlign: 'right'
};

const text2Style = {
  color: 'white',
  textAlign: 'center'
};

const bgColor = {
  backgroundColor: '#1F384B'
}

const languageLink = {
  color: 'white'
}

const helpLink = {
  color: '#1F384B'
}

class LoginView extends Component {
  render() {
    return(

      <div style={bgColor} >

        <div class="container">

          <div class="row">
            <div class="col-sm" >
              <p style={text1Style}>Admin</p>
            </div>
          </div>

          <div class="row justify-content-center">

            <div class="col-sm-4" style={logoStyle}>
              <br/><br/>
              <center>
                <img src={require("../Pictures/logoText.png")} alt=""/>
              </center>
              <br/><br/>
            </div>


            <div style={cardColor} class="col-sm-8" >
              <br/>
              <div class="jumbotron">

                <h3 align="left">
                  Please enter KMUTT username and password. Click on the Login button to continue.
                </h3>

                <br/>

                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                  </div>
                </form>

                <div class="row">
                  <div class="col-sm">
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                  <div class="col-sm">
                    <button type="button" class="btn btn-link" style={helpLink}><u>Help</u></button>
                  </div>
                </div>




              </div>
            </div>

          </div>

          <center>
            <button type="button" class="btn btn-link" style={languageLink}>English</button>
            <button type="button" class="btn btn-link" style={languageLink}>ภาษาไทย</button>
            <br/><br/><br/>
          </center>

        </div>

      </div>
    );
  }
}

export default LoginView
