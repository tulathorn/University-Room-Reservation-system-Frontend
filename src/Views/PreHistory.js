import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import PreHistoryRoomCard from '../Components/preHisRoomCard'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class PreHistoryView extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <br/>
          <div className="row">
            <div className="col-6">
              <button type="button" className="btn btn-danger btn-lg btn-block" disabled>Previous Booking</button>
            </div>
            <div className="col-6">
              <a href="/curhistory" className="btn btn-outline-danger btn-lg btn-block">Current Booking</a>
            </div>
          </div>
          <br/>
          <br/>

          <PreHistoryRoomCard />

        </div>
      </div>
    )
  }
}

export default PreHistoryView
