import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class AdListView extends Component {

  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <div className="row">
            <div className="col-4">
              <p>Result : 1</p>
            </div>
            <div className="col-8" />
          </div>
          <div className="row">
            <div className="col-4">
              <p>
                <b>Search For : </b>
              </p>
              <p>Building : Witsawa Watthana</p>
              <p>Size : 60 People</p>
              <p>Date : Monday 12 November 2018</p>
              <p>From 13:30 to 17:30</p>
            </div>
            <div className="col-8">
              <p>
                <b>Filtered : </b>
              </p>
            </div>
          </div>



                <div className="jumbotron text-white" style={jumbotronStyle}>
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <center>
                        <img src={require('../Pictures/testclassroom.jpg')} height="150" alt="" />
                      </center>
                    </div>
                    <div className="col-12 col-md-5">
                      <div className="row">

                      </div>
                      <div className="row">
                        <p>
                          <b>Building: </b>
                        </p>

                      </div>
                      <div className="row">
                        <p>
                          <b>Floor: </b>
                        </p>

                      </div>
                      <div className="row">
                        <p>
                          <b>Size: </b>
                        </p>

                      </div>
                    </div>

                  </div>
                </div>




          <center>
            <a href="/ad_booking">Go to booking page(Temporary)</a>
          </center>
        </div>
      </div>
    )
  }
}

export default AdListView
