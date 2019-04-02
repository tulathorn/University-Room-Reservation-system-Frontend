import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import AddForm from '../Components/addForm'

const bgImage = require('../Pictures/bg.png');
const bgStyle = {
  width: 'auto',
  height: '100%',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'absolute'
}

class AdAddRoomView extends Component {
  render() {
    return (
      <div style={bgStyle}>
        <AdNavbar />
        <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-1 col-sm-0">
            </div>
            <div className="col-md-10 col-sm-12">
              <AddForm/>
            </div>
            <div className="col-md-1 col-sm-0">
            </div>
          </div>
          <br/>
        </div>
      </div>
    )
  }
}

export default AdAddRoomView
