import React from 'react'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class RooomInformationCard extends React.Component {
  render() {
    return (
      <div className="jumbotron text-white" style={jumbotronStyle}>
        <div className="row">
          <div className="col-12 col-md-4">
            <center>
              <img src={require('../Pictures/testclassroom.jpg')} height="150" alt="" />
            </center>
          </div>
          <div className="col-12 col-md-5">
            <div className="row">
              <h4>{this.props.room.RoomName}</h4>
            </div>
            <div className="row">
              <p>
                <b>Building: </b>
              </p>
              <p>{this.props.room.Building}</p>
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
          <div className="col-12 col-md-3">
            <button type="button" className="btn btn-danger btn-lg btn-block" disabled>
              Not Completed
            </button>
            <button type="button" className="btn btn-info btn-lg btn-block" disabled>
              Completed
            </button>
            <button type="button" className="btn btn-warning btn-lg btn-block" disabled>
              Canceled
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default RooomInformationCard
