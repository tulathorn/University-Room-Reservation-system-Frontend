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
      </div>
    )
  }
}

export default AdRoomInfoView
