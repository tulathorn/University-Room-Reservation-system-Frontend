import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import BookingForm from '../Components/bookingForm'
import RoomInfoCard from '../Components/roomInfoCard'

class BookingView extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-6 col-sm-11">
              <RoomInfoCard/>
            </div>
            <div className="col-md-6 col-sm-11">
              <BookingForm/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookingView
