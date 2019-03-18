import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class ListCard extends React.Component {
  render() {
    return (
      <div className="jumbotron text-white" style={jumbotronStyle}>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <center>
              <img src={require('../Pictures/testclassroom.jpg')} height="150" alt="" />
            </center>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="row">
              <p>
                <b>Roomname: {this.props.room.RoomName}</b>
              </p>
            </div>
            <div className="row">
              <p>
                <b>Building: </b>
              </p>
              <p>{this.props.room.Floor}</p>
            </div>
            <div className="row">
              <p>
                <b>Floor: </b>
              </p>
              <p>{this.props.room.Floor}</p>
            </div>
            <div className="row">
              <p>
                <b>Size: </b>
              </p>
              <p>{this.props.room.PeopleCapacity} Peoples</p>
            </div>
          </div>
          <div className="col-md-5 col-sm-12">
            <div className="row">
              <p>
                <b>Amenities:</b>
              </p>
            </div>
            <div className="row">
              {/* <div className="col-md-6 col-sm-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label className="form-check-label" for="defaultCheck1">
                    Teacher Computer
                  </label>
                  <br />
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label className="form-check-label" for="defaultCheck1">
                    Student Computer
                  </label>
                  <br />
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label className="form-check-label" for="defaultCheck1">
                    Air Conditioner
                  </label>
                </div>
              </div> */}
              <div className="col-md-6 col-sm-12">
                {/* <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                    disabled
                  />
                  <label className="form-check-label" for="defaultCheck1">
                    Projector
                  </label>
                  <br />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                    select
                  />
                  <label className="form-check-label" for="defaultCheck1">
                    White Board
                  </label>
                  <br />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                    selected
                  />
                  <label className="form-check-label" for="defaultCheck1">
                    Visualizer
                  </label>       
                </div> */}
                {this.props.room.Equipment.HasAirConditioner ? <p>Air Conditioner</p> : <p />}
                {this.props.room.Equipment.HasProjector ? <p>Projector</p> : <p />}
                {this.props.room.Equipment.HasStudentComputers ? <p>Student Computer</p> : <p />}
                {this.props.room.Equipment.HasTeacherComputers ? <p>Teacher Computer</p> : <p />}
                {this.props.room.Equipment.HasVisualizer ? <p>Visualizer</p> : <p />}
                {this.props.room.Equipment.HasWhiteboard ? <p>White Board</p> : <p />}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListCard
