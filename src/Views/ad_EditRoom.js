import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import EditForm from '../Components/editForm'

const bgImage = require('../Pictures/bg.png');
const bgStyle = {
  width: 'auto',
  height: '100%',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'absolute'
}

class AdEditRoomView extends Component {
  render() {
    return (
      <div style={bgStyle}>
        <AdNavbar />
        <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-3 col-sm-0">
            </div>
            <div className="col-md-6 col-sm-12">
              <EditForm/>
            </div>
            <div className="col-md-3 col-sm-0">
            </div>
          </div>
        </div>
        <br/>
      </div>
    )
  }
}

export default AdEditRoomView
