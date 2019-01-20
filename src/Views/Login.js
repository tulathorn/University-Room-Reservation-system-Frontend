import React, { Component } from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import styled, { createGlobalStyle } from 'styled-components'

 const LogoImg = styled.img`
 width: '88%';
 `
const bgImage = require('../Pictures/bg.png');
const bgStyle = {
  width: '1368px',
  height: '912px',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'absolute'
}

const bgColor = {
  backgroundColor: 'white'
};

const text1Style = {
  color: 'white',
  textAlign: 'right'
};

const text2Style = {
  color: 'white',
  textAlign: 'center'
};

class LoginView extends Component {
  render() {
    return(

      <div className="bgComponent" style={bgStyle} >

        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm" >
              <p style={text1Style}>Admin</p>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-sm-auto" >
              <LogoImg src={require("../Pictures/logoBig.png")} alt=""/>
            </div>


              <div style={bgColor} class="col-sm" >
                <div class="row"><h1 align="center">Please enter KMUTT username and password. Click on the Login button to continue.</h1></div>

                <div class="row">
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Username</label>
                    <input type="username" class="form-control" id="usernameInput" placeholder="username"/>
                  </div>
                </div>

                <div class="row">
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                  </div>
                </div>

                <div class="row">


                  <div class="row">
                    <div class="col-sm"><button type="submit" class="btn btn-primary">Submit</button></div>
                    <div class="col-sm"><p><u>Help</u></p></div>
                  </div>

                </div>


              </div>

          </div>

          <div class="row justify-content-center">
            <div class="col-sm" >
              <br/><center><p style={text2Style}>English Language / ภาษาไทย</p></center>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default LoginView
