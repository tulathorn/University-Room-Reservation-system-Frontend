import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import AdCurHistoryRoomCard from '../Components/adCurHisCard'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}
class AdCurHistoryView extends Component {
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <a href="/ad_prehistory" className="btn btn-outline-info btn-lg btn-block">Previous Booking</a>
            </div>
            <div className="col-md-6 col-sm-12">
              <button type="button" className="btn btn-info btn-lg btn-block" disabled>Current Booking</button>
            </div>
          </div>
          <br/>
          <br/>
          <AdCurHistoryRoomCard/>
        </div>
      </div>
    )
  }
}

export default AdCurHistoryView
