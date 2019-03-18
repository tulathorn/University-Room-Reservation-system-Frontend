import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import AdPreHistoryRoomCard from '../Components/adPreHisCard'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class AdPreHistoryView extends Component {
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <button type="button" className="btn btn-info btn-lg btn-block" disabled>Previous Booking</button>
            </div>
            <div className="col-md-6 col-sm-12">
              <a href="/ad_curhistory" className="btn btn-outline-info btn-lg btn-block">Current Booking</a>
            </div>
          </div>
          <br/>
          <br/>
          <AdPreHistoryRoomCard/>
        </div>
      </div>
    )
  }
}

export default AdPreHistoryView
