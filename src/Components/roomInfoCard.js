import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'

const jumbotronStyle1 = {
  width: 'auto',
  height: 'auto',
  backgroundColor: 'white'
}

class RoomInfoCard extends React.Component {
  render() {
    return (
        <div className="jumbotron" style={jumbotronStyle1} >
          <h2>CPE1121</h2>
          <center>
            <img
              src={require("../Pictures/testclassroom.jpg")} width="auto" alt=""
            />
          </center>
          <br/>

          <div className="row">
            <div className="col-md-1 col-sm-0">
            </div>
            <div className="col-md-4 col-sm-4">
              <p><b>Booked Date : </b></p>
            </div>
            <div className="col-md-7 col-sm-8">
              <p>Monday 12 November 2018</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-1 col-sm-0">
            </div>
            <div className="col-md-4 col-sm-4">
              <p><b>Booked Time : </b></p>
            </div>
            <div className="col-md-7 col-sm-8">
              <p>From 13:30 to 17:30</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-1 col-sm-0">
            </div>
            <div className="col-md-4 col-sm-4">
              <p><b>Information : </b></p>
            </div>
            <div className="col-md-7 col-sm-8">
              <p>People Capacity : 50</p>
              <p>Building : Witsawa Watthana</p>
              <p>Floor : 11</p>
              <p>Room number : CPE1121</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-1 col-sm-0">
            </div>
            <div className="col-md-4 col-sm-4">
              <p><b>Amenity : </b></p>
            </div>
            <div className="col-md-7 col-sm-8">
            </div>
          </div>

          <div className="row">
            <div className="col-md-2">
            </div>
            <div className="col-md-5">
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
            <div className="col-md-5">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"disabled/>
                <label className="form-check-label" for="defaultCheck1">
                  Projector
                </label><br/>
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"select/>
                <label className="form-check-label" for="defaultCheck1">
                  White Board
                </label><br/>
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" selected/>
                <label className="form-check-label" for="defaultCheck1">
                  Visualizer
                </label>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default RoomInfoCard
