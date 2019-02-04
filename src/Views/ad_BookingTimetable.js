import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class AdBookingTimatableView extends Component {
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <div className="row"><h2>Booking Timetable</h2></div><br/>
          <div className="row">
            <div className="col-5">
              <div className="row">
                <div className="col-2">
                  <button className="btn btn-info btn-lg btn-block" disabled></button>
                </div>
                <div className="col-10">
                  <p>Available Time</p>
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <button className="btn btn-danger btn-lg btn-block" disabled></button>
                </div>
                <div className="col-10">
                  <p>Reserved Time</p>
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <button className="btn btn-dark btn-lg btn-block" disabled></button>
                </div>
                <div className="col-10">
                  <p>Unavailable Time</p>
                </div>
              </div>

              <div className="row">
                <button type="button" className="btn btn-outline-dark">Back</button>
              </div>
            </div>
            <div className="col-7">
              <div className="row">
                <div className="col-1">
                  <p>0</p>
                </div>
                <div className="col-11">
                  <button className="btn btn-dark btn-lg btn-block" disabled>-</button>
                </div>
              </div>

              <div className="row">
                <div className="col-1">
                  <p>1</p>
                </div>
                <div className="col-11">
                  <button className="btn btn-danger btn-lg btn-block" disabled>58070503412 : YWC Meeting</button>
                </div>
              </div>

              <div className="row">
                <div className="col-1">
                  <p>2</p>
                </div>
                <div className="col-11">
                  <button className="btn btn-danger btn-lg btn-block" disabled>-</button>
                </div>
              </div>

              <div className="row">
                <div className="col-1">
                  <p>3</p>
                </div>
                <div className="col-11">
                  <button className="btn btn-info btn-lg btn-block" disabled>-</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdBookingTimatableView
