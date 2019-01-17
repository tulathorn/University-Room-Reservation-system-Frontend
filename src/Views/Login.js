import React, { Component } from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import styled, { createGlobalStyle } from 'styled-components'

// const BgImg = styled.img`
// width: '88%';
// `

const GlobalStyle = createGlobalStyle`
  html {
    color: red;
  }
`

const BgImg = styled.div`
  background-image: url(${'https://png.pngtree.com/thumb_back/fh260/back_pic/00/03/04/16561cc598ddd84.jpg'});
  width: 100%;
  height: 100%;
  background-size: absolute;
`

const bgImage = require('../Pictures/bgLogin.png')
const bgStyle = {
  width: '100%',
  height: '1024px',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'absolute'
}

class LoginView extends Component {
  render() {
    return (
      <BgImg>
        <h1>Hello world</h1>
      </BgImg>
    )

    //<div>Login Call</div>;
  }
}

export default LoginView
