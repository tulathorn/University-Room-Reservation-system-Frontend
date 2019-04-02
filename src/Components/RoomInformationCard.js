import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import styled from 'styled-components'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

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
                <b>{language[LanguageStore.lang].roomInformationCard.Building}: </b>
              </p>
              <p>{this.props.room.Floor}</p>
            </div>
            <div className="row">
              <p>
                <b>{language[LanguageStore.lang].roomInformationCard.Floor}: </b>
              </p>
              <p>{this.props.room.Floor}</p>
            </div>
            <div className="row">
              <p>
                <b>{language[LanguageStore.lang].roomInformationCard.Size}: </b>
              </p>
              <p>{this.props.room.PeopleCapacity} {language[LanguageStore.lang].roomInformationCard.Peoples}</p>
            </div>
          </div>
          <div className="col-md-5 col-sm-12">
            <div className="row">
              <p>
                <b>{language[LanguageStore.lang].roomInformationCard.Amenity}:</b>
              </p>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                {this.props.room.Equipment.HasAirConditioner ? <p>{language[LanguageStore.lang].roomInformationCard.Amenities.AirConditioner}</p> : <Hasno>{language[LanguageStore.lang].roomInformationCard.Amenities.AirConditioner}</Hasno>}
                {this.props.room.Equipment.HasProjector ? <p>{language[LanguageStore.lang].roomInformationCard.Amenities.Projector}</p> : <Hasno>{language[LanguageStore.lang].roomInformationCard.Amenities.Projector}</Hasno>}
                {this.props.room.Equipment.HasStudentComputers ? <p>{language[LanguageStore.lang].roomInformationCard.Amenities.StudentComputer}</p> : <Hasno>{language[LanguageStore.lang].roomInformationCard.Amenities.StudentComputer}</Hasno>}
              </div>
              <div className="col-md-6 col-sm-12">
                {this.props.room.Equipment.HasTeacherComputers ? <p>{language[LanguageStore.lang].roomInformationCard.Amenities.TeacherComputer}</p> : <Hasno>{language[LanguageStore.lang].roomInformationCard.Amenities.TeacherComputer}</Hasno>}
                {this.props.room.Equipment.HasVisualizer ? <p>{language[LanguageStore.lang].roomInformationCard.Amenities.Visualizer}</p> : <Hasno>{language[LanguageStore.lang].roomInformationCard.Amenities.Visualizer}</Hasno>}
                {this.props.room.Equipment.HasWhiteboard ? <p>{language[LanguageStore.lang].roomInformationCard.Amenities.WhiteBoard}</p> : <Hasno>{language[LanguageStore.lang].roomInformationCard.Amenities.WhiteBoard}</Hasno>}
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
