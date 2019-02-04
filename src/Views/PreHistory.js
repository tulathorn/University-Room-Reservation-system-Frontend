import React, { Component } from 'react'
import Navbar from '../Components/Navbar'

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
          <div className="jumbotron text-white" style={jumbotronStyle}>
            <div className="row">
              <div className="col-4">
                <center><img src={require("../Pictures/testclassroom.jpg")} height="150" alt=""/></center>
              </div>
              <div className="col-5">
                <h4>CPE1121</h4>
                <div className="row">
                  <p><b>Purpose : </b></p>
                  <p>Tutor Camp</p>
                </div>
                <div className="row">
                  <p><b>Date : </b></p>
                  <p>Friday 9 November 2018</p>
                </div>
                <div className="row">
                  <p><b>Schedule : </b></p>
                  <p>From 12:00 to 17:00</p>
                </div>
              </div>
              <div className="col-3">
                <button type="button" className="btn btn-danger btn-lg btn-block" disabled>Not Completed</button>
                <button type="button" className="btn btn-info btn-lg btn-block" disabled>Completed</button>
                <button type="button" className="btn btn-warning btn-lg btn-block" disabled>Canceled</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PreHistoryView
