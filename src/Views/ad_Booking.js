import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import AdBookingForm from '../Components/ad_bookForm'
import RoomInfoCard from '../Components/roomInfoCard'

class AdBookingView extends Component {
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <RoomInfoCard/>
            </div>
            <div className="col-md-6 col-sm-12">
              <AdBookingForm/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdBookingView
