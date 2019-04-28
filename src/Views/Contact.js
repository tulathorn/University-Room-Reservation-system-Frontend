import React, { Component } from 'react'
import ContactCard from '../Components/contactCard'
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
  langEN = () => {
    localStorage.setItem('language',0)
    window.location.reload()
  }

  langTH = () => {
    localStorage.setItem('language',1)
    window.location.reload()
  }
  
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
              <center>
                <button type="button" onClick={() => this.langEN()} className="btn btn-link" style={languageLink}>{language[localStorage.getItem('language')].adLogin.English}</button>
                <button type="button" onClick={() => this.langTH()} className="btn btn-link" style={languageLink}>{language[localStorage.getItem('language')].adLogin.Thai}</button>
                <br/>
              </center>
            </div>
            <div className="col-md-2 col-sm-0">
            </div>
          </div>
          <br/><br/><br/>
        </div>
      </div>
    )
  }
}

export default ContactView
