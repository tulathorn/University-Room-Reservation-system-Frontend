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

class AdLoginView extends Component {
  render() {
    return(

      <div style={bgColor} >

        <div className="container">

          <div className="row">
            <div className="col-12 col-md-11">
            </div>
            <div className="col-6 col-md-1">
              <a href="/login" style={text1Style}>User</a>
            </div>
          </div>


          <div className="row justify-content-center">

            <div className="col-sm-4" style={logoStyle}>
              <br/><br/><br/>
              <center>
                <img src={require("../Pictures/logoText.png")} alt=""/>
              </center>
              <br/><br/>
            </div>


            <div style={cardColor} className="col-sm-8" >
              <br/>
              <div style={cardColor} className="jumbotron">

                <h3 align="left" style={helpLink}>
                  Administrator Login.
                </h3>

                <br/>

                <form>
                  <div className="form-group">
                    <label for="exampleInputEmail1" style={helpLink}>Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"/>
                  </div>

                  <div className="form-group">
                    <label for="exampleInputPassword1" style={helpLink}>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                  </div>
                </form>
                <br/>


                <a href="/ad_search" className="btn btn-outline-info">Login</a>


              </div>
            </div>

          </div>

          <center>
            <button type="button" className="btn btn-link" style={languageLink}>English</button>
            <button type="button" className="btn btn-link" style={languageLink}>ภาษาไทย</button>
            <br/><br/><br/>
          </center>

        </div>

      </div>
    );
  }
}

export default AdLoginView
