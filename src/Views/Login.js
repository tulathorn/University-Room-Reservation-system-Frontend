import React, { Component } from "react";
import "../Styles/bootstrap/bootstrap.min.css";
import styled from "styled-components";

// const BgImg = styled.img`
// width: '88%';
// `
const bgImage = require('../Pictures/bgLogin.png');
const bgStyle = {
  width: '100%',
  height: '912px',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover'
};

class LoginView extends Component {
  render() {
    return(
      <div className="bgComponent" style={bgStyle} >
        <h1 align="center">....</h1>
      </div>
      // <div>
      // <BgImg src={require("../Pictures/bg.png")} alt=""/>
      // </div>
    );


    //<div>Login Call</div>;
  }
}

export default LoginView;
