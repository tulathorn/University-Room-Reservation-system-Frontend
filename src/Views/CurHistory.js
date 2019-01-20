import React, { Component } from 'react'
import Navbar from '../Components/Navbar'

class HistoryView extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <br/>
          <div class="row">
            <div class="col-6">
              <a href="/prehistory" class="btn btn-outline-danger btn-lg btn-block" disabled>Previous Booking</a>
            </div>
            <div class="col-6">
              <button type="button" class="btn btn-danger btn-lg btn-block" disabled>Current Booking</button>
            </div>
          <br/>
          </div>
        </div>
      </div>
    )
  }
}

export default HistoryView
