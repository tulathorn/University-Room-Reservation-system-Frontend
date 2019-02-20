import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import styled, { createGlobalStyle } from 'styled-components'
import ContactCard from '../Components/contactCard'

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

class ContactView extends Component {
  render() {
    return (
      <div style={bgStyle}>
        <Navbar />
        <div className="container">
          <br/><br/><br/>
          <div className="row">
            <div className="col-2">
            </div>
            <div className="col-8">
              <ContactCard/>
            </div>
            <div className="col-2">
            </div>
          </div>
          <center>
            <button type="button" className="btn btn-link" style={languageLink}>English</button>
            <button type="button" className="btn btn-link" style={languageLink}>ภาษาไทย</button>
            <br/><br/><br/>
          </center>
        </div>
      </div>
    )
  }
}

export default ContactView
