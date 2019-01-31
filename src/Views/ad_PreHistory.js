import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'

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
          <div class="row">
            <div class="col-6">
              <button type="button" class="btn btn-danger btn-lg btn-block" disabled>Previous Booking</button>
            </div>
            <div class="col-6">
              <a href="/ad_curhistory" class="btn btn-outline-danger btn-lg btn-block">Current Booking</a>
            </div>
          </div>
          <br/>
          <br/>
          <div class="jumbotron text-white" style={jumbotronStyle}>
            <div class="row">
              <div class="col-4">
                <center><img src={require("../Pictures/testclassroom.jpg")} height="150" alt=""/></center>
              </div>
              <div class="col-5">
                <h4>CPE1121</h4>
                <div class="row">
                  <p><b>Purpose : </b></p>
                  <p>Tutor Camp</p>
                </div>
                <div class="row">
                  <p><b>Date : </b></p>
                  <p>Friday 9 November 2018</p>
                </div>
                <div class="row">
                  <p><b>Schedule : </b></p>
                  <p>From 12:00 to 17:00</p>
                </div>
              </div>
              <div class="col-3">
                <button type="button" class="btn btn-danger btn-lg btn-block" disabled>Not Completed</button>
                <button type="button" class="btn btn-info btn-lg btn-block" disabled>Completed</button>
                <button type="button" class="btn btn-warning btn-lg btn-block" disabled>Canceled</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdPreHistoryView
