import React, { Component } from 'react'
import Navbar from '../Components/Navbar'

class BookingView extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          
          <div class="row"><h2>CPE1121</h2></div>
          <div class="row">
            <div class="col-6">
              <div class="row">
                <center><img src={require("../Pictures/testclassroom.jpg")} width="500" alt=""/></center>
              </div>
              <div class="row">
                <p><b>Booked Date : </b></p>
                <p>Monday 12 November 2018</p>
              </div>
              <div class="row">
                <p><b>Booked Time : </b></p>
                <p>From 13:30 to 17:30</p>
              </div>
              <div class="row">
                <div class="col-3">
                  <p><b>Information : </b></p>
                </div>
                <div class="col">
                  <p>People Capacity : 50</p>
                  <p>Building : Witsawa Watthana</p>
                  <p>Floor : 11</p>
                  <p>Room number : CPE1121</p>
                </div>
              </div>
              <div class="row">
                <p><b>Amenity : </b></p>
                
              </div>
              
                
            </div>
            <div class="col-1">
              
            </div>
            <div class="col-5">
              <form action="">
                      <div className="form-group">
                        <label for="info1">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="info1"
                          placeholder="Firstname"
                        />
                      </div>
                      <div className="form-group">
                        <label for="info2">Surname</label>
                        <input
                          type="text"
                          className="form-control"
                          id="info2"
                          placeholder="Lastname"
                        />
                      </div>
                      <div className="form-group">
                        <label for="info3">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="info3"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="form-group">
                        <label for="info4">Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="info4"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="form-group">
                        <label for="info5">Purpose</label>
                        <textarea
                          className="form-control"
                          id="info5"
                          placeholder="Identify your purpose for booking this room..."
                          rows="5"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookingView
