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
            <div class="col-12 col-md-11">
            </div>
            <div class="col-6 col-md-1">
              <button type="button" class="btn btn-link" style={text1Style}>User</button>
            </div>
          </div>


          <div class="row justify-content-center">

            <div class="col-sm-4" style={logoStyle}>
              <br/><br/><br/>
              <center>
                <img src={require("../Pictures/logoText.png")} alt=""/>
              </center>
              <br/><br/>
            </div>


            <div style={cardColor} class="col-sm-8" >
              <br/>
              <div style={cardColor} class="jumbotron">

                <h3 align="left" style={helpLink}>
                  Administrator Login.
                </h3>

                <br/>

                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1" style={helpLink}>Username</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"/>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputPassword1" style={helpLink}>Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                  </div>
                </form>
                <br/>


                <button type="button" class="btn btn-outline-danger">Login</button>


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
