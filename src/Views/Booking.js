import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import BookingForm from '../Components/bookingForm'
import RoomInfoCard from '../Components/roomInfoCard'
import AuthenticationGate from '../Components/AuthenticationGate'

class BookingView extends Component {
  render() {
    return (
      <AuthenticationGate>
        <div>
          <Navbar />
          <div className="container">
            <br/>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <RoomInfoCard/>
              </div>
              <div className="col-md-6 col-sm-12">
                <BookingForm/>
              </div>
            </div>
          </div>
        </div>
      </AuthenticationGate>
    )
  }
}

export default BookingView
