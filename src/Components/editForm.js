import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'

class EditForm extends React.Component {
	saveClick = () =>{
      Swal.fire({
      position: 'center',
      type: 'success',
      title: 'This room has been edited',
      showConfirmButton: false,
      timer: 1500
    })
  }
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label for="info1">Room ID :</label>
              <input
                type="text"
                className="form-control"
                id="info1"
              />

              <label for="exampleFormControlFile1">Update Room Photo</label>
              <input type="file" className="form-control-file" id="exampleFormControlFile1"/>

              <label for="info1">People Capacity :</label>
              <input
                type="number"
                className="form-control"
                id="info1"

              />

              <label for="info2">Building :</label>
              <input
                type="text"
                className="form-control"
                id="info2"
              />

              <label for="info3">Floor :</label>
              <input
                type="number"
                className="form-control"
                id="info3"
              />

              <label for="info4">Room Number :</label>
              <input                        type="number"
                className="form-control"
                id="info4"
              />

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

              <label for="info4">Operating Time :</label>
              <form className="form-inline">
                <label className="my-1 mr-2" for="inlineFormCustomSelectPref">From</label>
                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                  <option>Choose...</option>
                  <option value="1">00</option>
                  <option value="2">01</option>
                  <option value="3">02</option>
                  <option value="4">03</option>
                  <option value="5">04</option>
                  <option value="6">05</option>
                  <option value="7">06</option>
                  <option value="8">07</option>
                  <option value="9">08</option>
                  <option value="10">09</option>
                  <option value="11">10</option>
                  <option value="12">11</option>
                  <option value="13">12</option>
                  <option value="14">13</option>
                  <option value="15">14</option>
                  <option value="16">15</option>
                  <option value="17">16</option>
                  <option value="18">17</option>
                  <option value="19">18</option>
                  <option value="20">19</option>
                  <option value="21">20</option>
                  <option value="22">21</option>
                  <option value="23">22</option>
                  <option value="24">23</option>
                </select>
                <label className="my-1 mr-2" for="inlineFormCustomSelectPref">:</label>
                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                  <option>Choose...</option>
                  <option value="1">00</option>
                  <option value="2">30</option>
                </select>
              </form>
              <form className="form-inline">
                <label className="my-1 mr-2" for="inlineFormCustomSelectPref">To</label>
                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                  <option>Choose...</option>
                  <option value="1">00</option>
                  <option value="2">01</option>
                  <option value="3">02</option>
                  <option value="4">03</option>
                  <option value="5">04</option>
                  <option value="6">05</option>
                  <option value="7">06</option>
                  <option value="8">07</option>
                  <option value="9">08</option>
                  <option value="10">09</option>
                  <option value="11">10</option>
                  <option value="12">11</option>
                  <option value="13">12</option>
                  <option value="14">13</option>
                  <option value="15">14</option>
                  <option value="16">15</option>
                  <option value="17">16</option>
                  <option value="18">17</option>
                  <option value="19">18</option>
                  <option value="20">19</option>
                  <option value="21">20</option>
                  <option value="22">21</option>
                  <option value="23">22</option>
                  <option value="24">23</option>
                </select>
                <label className="my-1 mr-2" for="inlineFormCustomSelectPref">:</label>
                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                  <option>Choose...</option>
                  <option value="1">00</option>
                  <option value="2">30</option>
                </select>
              </form>

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

              <center><br/>
                <button onClick={() => this.saveClick()} type="button" className="btn btn-info">
                  Save
                </button><br/>
              </center>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default EditForm
