import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class AdAddRoomView extends Component {
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">

          <div className="row">

            <div className="col-6">
              <div className="card">
                <div className="card-body">
                  <div className="form-group">
                    <label for="info1">Room ID :</label>
                    <input
                      type="text"
                      className="form-control"
                      id="info1"
                    />
                  </div>

                  <form>
                    <div className="form-group">
                      <label for="exampleFormControlFile1">Update Room Photo</label>
                      <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                    </div>
                  </form>

                  <div className="form-group">
                    <label for="info1">People Capacity :</label>
                    <input
                      type="number"
                      className="form-control"
                      id="info1"

                    />
                  </div>

                  <div className="form-group">
                    <label for="info2">Building :</label>
                    <input
                      type="text"
                      className="form-control"
                      id="info2"
                    />
                  </div>

                  <div className="form-group">
                    <label for="info3">Floor :</label>
                    <input
                      type="number"
                      className="form-control"
                      id="info3"
                    />
                  </div>

                  <div className="form-group">
                    <label for="info4">Room Number :</label>
                    <input
                      type="number"
                      className="form-control"
                      id="info4"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="card">
                <div className="card-body">

                    <div className="form-group">
                      <label for="info4">Operating Day :</label>
                      <div className="row">
                        <div className="col-6">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                              Sunday
                            </label><br/>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                              Monday
                            </label><br/>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                              Tuesday
                            </label><br/>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                              Wednesday
                            </label>
                          </div>
                        </div>

                        <div className="col-6">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                              Thursday
                            </label><br/>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                              Friday
                            </label><br/>
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                              Saturday
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label for="info4">Operating Time :</label>
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
                          </form>
                          <form className="form-inline">
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
                      </div>

                      <div className="form-group">
                        <label for="info4">Amenity : </label>
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
                      <center><br/>
                        <button type="button" className="btn btn-outline-dark">
                          Cancel
                        </button>
                        <button type="button" className="btn btn-outline-dark">
                          Submit
                        </button><br/><br/>
                      </center>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
    )
  }
}

export default AdAddRoomView
