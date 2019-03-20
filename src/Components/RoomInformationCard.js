import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import styled from 'styled-components'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}
const Hasno = styled.p`
  color: #696969;
`

class ListCard extends React.Component {
  render() {
    return (

      <a href="/ad_room_info" target="_blank">
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
                <h2>{this.props.room.RoomName}</h2>
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
              <div className="col-md-6 col-sm-12">
                {this.props.room.Equipment.HasAirConditioner ? <p>Air Conditioner</p> : <Hasno>Air Conditioner</Hasno>}
                {this.props.room.Equipment.HasProjector ? <p>Projector</p> : <Hasno>Projector</Hasno>}
                {this.props.room.Equipment.HasStudentComputers ? <p>Student Computer</p> : <Hasno>Student Computer</Hasno>}
              </div>
              <div className="col-md-6 col-sm-12">
                {this.props.room.Equipment.HasTeacherComputers ? <p>Teacher Computer</p> : <Hasno>Teacher Computer</Hasno>}
                {this.props.room.Equipment.HasVisualizer ? <p>Visualizer</p> : <Hasno>Visualizer</Hasno>}
                {this.props.room.Equipment.HasWhiteboard ? <p>White Board</p> : <Hasno>White Board</Hasno>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
    )
  }
}

export default ListCard
