import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import BookingTable from '../Components/bookingTable'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class AdBookingTimatableView extends Component {
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <div className="row">
            <h2>Booking Timetable</h2>
          </div>
          <br/>
          <BookingTable/>
        </div>
      </div>
    )
  }
}

export default AdBookingTimatableView
