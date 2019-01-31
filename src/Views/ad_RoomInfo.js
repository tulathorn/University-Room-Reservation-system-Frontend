import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class AdRoomInfoView extends Component {
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          
          <div class="row"><h2>CPE1121</h2></div>
          <div class="row">
            <div class="col-6">
              <div class="row">
                <center><img src={require("../Pictures/testclassroom.jpg")} width="500" alt=""/></center>
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
                  <p>Operating Day : Mon-Fri</p>
                  <p>Operating Time : 08:00 - 20:00</p>
                </div>
              </div>
              <div class="row">
                <p><b>Amenity : </b></p>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                      Teacher Computer
                    </label><br/>
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                      Student Computer
                    </label><br/>
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                      Air Conditioner
                    </label>
                  </div>
                </div>

                <div class="col-6">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                      Projector
                    </label><br/>
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                      White Board
                    </label><br/>
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label class="form-check-label" for="defaultCheck1">
                      Visualizer
                    </label>
                  </div>
                </div>  
              </div>
            </div>
            
            <div class="col-6">
              <div className="jumbotron text-white" style={jumbotronStyle}>
                <h3>Booking Calendar</h3>
                  <a href="https://eonasdan.github.io/bootstrap-datetimepicker/">How to Calendar</a><br/>
                  <a href="/ad_timetable">Go to timetable(Temporary)</a>
              
              </div>

              
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <center>
              <button type="button" class="btn btn-outline-dark">Delete</button>
              <a href="/ad_edit_room" class="btn btn-outline-dark">Edit</a>
              <a href="/ad_booking" class="btn btn-outline-dark">Book</a></center>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default AdRoomInfoView
