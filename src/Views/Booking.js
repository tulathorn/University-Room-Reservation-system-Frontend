import React, { Component } from 'react'
import Navbar from '../Components/Navbar'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class BookingView extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">

          <br/>
          <div className="row">

            <div className="col-6">
              <div className="row"><h2>CPE1121</h2></div>
              <div className="row">

                <center><img src={require("../Pictures/testclassroom.jpg")} width="auto" alt=""/></center>
              </div>
              <div className="row">
                <p><b>Booked Date : </b></p>
                <p>Monday 12 November 2018</p>
              </div>
              <div className="row">
                <p><b>Booked Time : </b></p>
                <p>From 13:30 to 17:30</p>
              </div>
              <div className="row">
                <div className="col-3">
                  <p><b>Information : </b></p>
                </div>
                <div className="col">
                  <p>People Capacity : 50</p>
                  <p>Building : Witsawa Watthana</p>
                  <p>Floor : 11</p>
                  <p>Room number : CPE1121</p>
                </div>
              </div>
              <div className="row">
                <p><b>Amenity : </b></p>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" for="defaultCheck1">
                      Teacher Computer
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" for="defaultCheck1">
                      Student Computer
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" for="defaultCheck1">
                      Air Conditioner
                    </label>
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" for="defaultCheck1">
                      Projector
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" for="defaultCheck1">
                      White Board
                    </label><br/>
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" for="defaultCheck1">
                      Visualizer
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 col-sm-4">
              <div className="jumbotron text-white" style={jumbotronStyle}>
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




                  <div className="row">
                    <div className="col-2 col-md-2" >
                      <button type="submit" className="btn btn-info">
                        Submit
                      </button>
                    </div>
                    <div className="col-7 col-md-7">
                    </div>
                    <div className="col-3 col-md-3">
                      <button type="submit" className="btn btn-outline-info">
                        Update
                      </button>
                    </div>
                  </div>


                </form>
              </div>


            </div>


          </div>
        </div>
      </div>
    )
  }
}

export default BookingView
