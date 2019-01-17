import React, { Component } from "react";
import "../Styles/bootstrap/bootstrap.min.css";
import styled from "styled-components";

 const LogoImg = styled.img`
 width: '88%';
 `
const bgImage = require('../Pictures/bg.png');
const bgStyle = {
  width: '1368px',
  height: '912px',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover'
};

class LoginView extends Component {
  render() {
    return(
      //bg
      <div className="bgComponent" style={bgStyle} >
        <h1 align="center">.....</h1>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <LogoImg src={require("../Pictures/logo.png")} alt=""/>
            </div>
            <div class="col-sm">
              <div class="row">topic</div>
              <div class="row">username</div>
              <div class="row">password</div>
              <div class="row">button</div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default LoginView;
