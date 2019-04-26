import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import BookingForm from '../Components/bookingForm'
import RoomInfoCard from '../Components/roomInfoCard'
import AuthenticationGate from '../Components/AuthenticationGate'
import RoomStore from '../stores/RoomStore'
import { observer } from 'mobx-react'

class BookingView extends Component {
  componentDidMount() {
    RoomStore.resetFilterForm()
    RoomStore.setConfig('RoomID', localStorage.getItem('RoomID'))
    RoomStore.fetchData()
  }
    
  @observer
  render() {
    return (
      <AuthenticationGate>
        <div>
          <Navbar />
          <div className="container">
            <p> </p>
            <div className="row">
              <div className="col-md-6 col-sm-12">
              {RoomStore.roomDatas.map(roomv => {
                return <RoomInfoCard room={roomv} />
              })}
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
