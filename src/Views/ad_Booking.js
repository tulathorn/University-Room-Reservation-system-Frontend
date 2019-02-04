import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class AdBookingView extends Component {
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          
          <div className="row"><h2>CPE1121</h2></div>
          <div className="row">
            <div className="col-6">
              <div className="row">
                <center><img src={require("../Pictures/testclassroom.jpg")} width="500" alt=""/></center>
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
                  <p>Operating Day : Mon-Fri</p>
                  <p>Operating Time : 08:00 - 20:00</p>
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
            
            <div className="col-6">
              <div className="jumbotron text-white" style={jumbotronStyle}>
                <form action="">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-6">
                      <label for="info1">ID</label>
                    <input
                      type="text"
                      className="form-control"
                      id="info1"
                      placeholder="Username ID"
                    />
                      <label for="info1">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="info1"
                      placeholder="Firstname"
                    />
                    <label for="info2">Surname</label>
                    <input
                      type="text"
                      className="form-control"
                      id="info2"
                      placeholder="Lastname"
                    />
                    
                      </div>
                      <div className="col-6">
                      <label for="info3">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="info3"
                      placeholder="Email Address"
                    />
                    <label for="info4">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="info4"
                      placeholder="Phone Number"
                      />
                      </div>
                    </div>

                    <label for="info5">Purpose</label>
                    <textarea
                      className="form-control"
                      id="info5"
                      placeholder="Identify your purpose for booking this room..."
                      rows="5"
                    />
                  </div>
                  <label className="radio-inline"><input type="radio" name="optradio" checked/>Normal</label>
                  <label className="radio-inline"><input type="radio" name="optradio"/>Recurring</label>


                  <div className="form-group col-md-4">
                        <label className="my-1 mr-2" for="inlineFormCustomSelectPref" >Date</label>
                        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                          <option selected>DD/MM/YY</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>

                      <h2>Time :</h2>
                  <form className="form-inline">
                    <label className="my-1 mr-2" for="inlineFormCustomSelectPref">From</label>
                    <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label className="my-1 mr-2" for="inlineFormCustomSelectPref">:</label>
                    <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label className="my-1 mr-2" for="inlineFormCustomSelectPref">To</label>
                    <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label className="my-1 mr-2" for="inlineFormCustomSelectPref">:</label>
                    <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </form>


                  <br/>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>

              
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <center>
              <button type="button" className="btn btn-outline-dark">Back</button>
              <button type="button" className="btn btn-outline-dark">Book</button></center>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default AdBookingView
