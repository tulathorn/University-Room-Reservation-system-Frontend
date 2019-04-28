import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import styled from 'styled-components'
import language from '../languages.json'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}
const Hasno = styled.p`
  color: #696969;
`
class AllListCard extends React.Component {
  onClick = e => {
    e.preventDefault()
    localStorage.setItem('RoomName',this.props.room.RoomName)
    window.location = "/ad_room_info";
  }
  render() {
    return (

      <form action="#" onClick={e => this.onClick(e)} >
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
                <b>{language[localStorage.getItem('language')].roomInformationCard.Building}: </b>
              </p>
              <p>{this.props.room.Building}</p>
            </div>
            <div className="row">
              <p>
                <b>{language[localStorage.getItem('language')].roomInformationCard.Floor}: </b>
              </p>
              <p>{this.props.room.Floor}</p>
            </div>
            <div className="row">
              <p>
                <b>{language[localStorage.getItem('language')].roomInformationCard.Size}: </b>
              </p>
              <p>{this.props.room.PeopleCapacity} {language[localStorage.getItem('language')].roomInformationCard.Peoples}</p>
            </div>
          </div>
          <div className="col-md-5 col-sm-12">
            <div className="row">
              <p>
                <b>{language[localStorage.getItem('language')].roomInformationCard.Amenity}:</b>
              </p>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                {this.props.room.Equipment.HasAirConditioner ? <p>{language[localStorage.getItem('language')].roomInformationCard.Amenities.AirConditioner}</p> : <Hasno>{language[localStorage.getItem('language')].roomInformationCard.Amenities.AirConditioner}</Hasno>}
                {this.props.room.Equipment.HasProjector ? <p>{language[localStorage.getItem('language')].roomInformationCard.Amenities.Projector}</p> : <Hasno>{language[localStorage.getItem('language')].roomInformationCard.Amenities.Projector}</Hasno>}
                {this.props.room.Equipment.HasStudentComputers ? <p>{language[localStorage.getItem('language')].roomInformationCard.Amenities.StudentComputer}</p> : <Hasno>{language[localStorage.getItem('language')].roomInformationCard.Amenities.StudentComputer}</Hasno>}
              </div>
              <div className="col-md-6 col-sm-12">
                {this.props.room.Equipment.HasTeacherComputers ? <p>{language[localStorage.getItem('language')].roomInformationCard.Amenities.TeacherComputer}</p> : <Hasno>{language[localStorage.getItem('language')].roomInformationCard.Amenities.TeacherComputer}</Hasno>}
                {this.props.room.Equipment.HasVisualizer ? <p>{language[localStorage.getItem('language')].roomInformationCard.Amenities.Visualizer}</p> : <Hasno>{language[localStorage.getItem('language')].roomInformationCard.Amenities.Visualizer}</Hasno>}
                {this.props.room.Equipment.HasWhiteboard ? <p>{language[localStorage.getItem('language')].roomInformationCard.Amenities.WhiteBoard}</p> : <Hasno>{language[localStorage.getItem('language')].roomInformationCard.Amenities.WhiteBoard}</Hasno>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    )
  }
}

export default AllListCard