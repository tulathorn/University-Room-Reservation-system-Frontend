import React, { Component } from 'react'
import Navbar from '../Components/Navbar'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class ListView extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">


        <div class="row">
          <div class="col-4">
            <p>Result : 1</p>
          </div>
          <div class="col-8">
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <p><b>Search For : </b></p>
            <p>Building : Witsawa Watthana</p>
            <p>Size : 60 People</p>
            <p>Date : Monday 12 November 2018</p>
            <p>From 13:30 to 17:30</p>
          </div>
          <div class="col-8">
            <p><b>Filtered : </b></p>
          </div>
        </div>











        <div class="jumbotron text-white" style={jumbotronStyle}>
            <div class="row">
              <div class="col-4">
                <center><img src={require("../Pictures/testclassroom.jpg")} height="150" alt=""/></center>
              </div>
              <div class="col-5">
                <h4>CPE1121</h4>
                <div class="row">
                  <p><b>Building : </b></p>
                  <p>Witsawa Watthana</p>
                </div>
                <div class="row">
                  <p><b>Floor : </b></p>
                  <p>11</p>
                </div>
                <div class="row">
                  <p><b>Size : </b></p>
                  <p>70 Peoples</p>
                </div>
              </div>
              <div class="col-3">
                <button type="button" class="btn btn-danger btn-lg btn-block" disabled>Not Completed</button>
                <button type="button" class="btn btn-info btn-lg btn-block" disabled>Completed</button>
                <button type="button" class="btn btn-warning btn-lg btn-block" disabled>Canceled</button>
              </div>
            </div>
          </div>


        <center><a href="/booking">Go to booking page(Temporary)</a></center>
        </div>
      </div>
    )
  }
}

export default ListView
