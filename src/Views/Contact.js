import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import styled, { createGlobalStyle } from 'styled-components'
import ContactCard from '../Components/contactCard'

import ContactStore from '../stores/ContactStore';

import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

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
        <div className="container">
          <br/><br/><br/>
          <div className="row">
            <div className="col-md-2 col-sm-0">
            </div>
            <div className="col-md-8 col-sm-10">
              <ContactCard/>
            </div>
            <div className="col-md-2 col-sm-0">
            </div>
          </div>
          <center>
            <button type="button" className="btn btn-link" style={languageLink}>{language[LanguageStore.lang].Contact.English}</button>
            <button type="button" className="btn btn-link" style={languageLink}>{language[LanguageStore.lang].Contact.Thai}</button>
            <br/><br/><br/>
          </center>
        </div>
      </div>
    )
  }
}

export default ContactView
