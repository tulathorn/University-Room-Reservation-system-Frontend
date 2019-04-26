import React, { Component } from 'react'
import ContactCard from '../Components/contactCard'

const bgImage = require('../Pictures/bg.png');
const bgStyle = {
  width: 'auto',
  height: '100%',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'absolute'
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
          <br/><br/><br/>
        </div>
      </div>
    )
  }
}

export default ContactView
