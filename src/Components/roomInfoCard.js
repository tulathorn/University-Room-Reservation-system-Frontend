import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

const jumbotronStyle1 = {
  width: 'auto',
  height: 'auto',
  backgroundColor: 'white'
}

class RoomInfoCard extends React.Component {
  render() {
    return (
        <div style={jumbotronStyle1} >
          <h2>{this.props.room.RoomName}</h2>
          <center>
            <img
              src={require("../Pictures/testclassroom.jpg")} width="300" alt=""
            />
          </center>
          <br/>

          <div className="row">
              <p><b>{language[LanguageStore.lang].roomInfoCard.BookedDate} : </b>
              {localStorage.getItem('ScheduleDate')}</p>
          </div>

          <div className="row">
              <p><b>{language[LanguageStore.lang].roomInfoCard.BookedTime} : </b></p>
              <p>{language[LanguageStore.lang].roomInfoCard.From} {localStorage.getItem('ScheduleFromHr')}:{localStorage.getItem('ScheduleFromMin')} {language[LanguageStore.lang].roomInfoCard.To} {localStorage.getItem('ScheduleToHr')}:{localStorage.getItem('ScheduleToMin')}</p>
          </div>

          <div className="row">
            <div className="col-md-5 col-sm-12">
              <p><b>{language[LanguageStore.lang].roomInfoCard.Information} : </b></p>
            </div>
            <div className="col-md-7 col-sm-12">
              <p>{language[LanguageStore.lang].roomInfoCard.Informations.PeopleCapacity} : {this.props.room.PeopleCapacity}</p>
              <p>{language[LanguageStore.lang].roomInfoCard.Informations.Building} : {this.props.room.Building}</p>
              <p>{language[LanguageStore.lang].roomInfoCard.Informations.Floor} : {this.props.room.Floor}</p>
              <p>{language[LanguageStore.lang].roomInfoCard.Informations.RoomNumber} : {this.props.room.RoomNumber}</p>
            </div>
          </div>

          <div className="row">
              <p><b>{language[LanguageStore.lang].roomInfoCard.Amenity} : </b></p>
          </div>

          <div className="row">
            <div className="col-md-1 col-sm-0">
            </div>
            <div className="col-md-11 col-sm-12">
              {this.props.room.Equipment.HasTeacherComputers ? <p>{language[LanguageStore.lang].roomInfoCard.Amenities.TeacherComputer}</p> : <p></p>}
              {this.props.room.Equipment.HasStudentComputers ? <p>{language[LanguageStore.lang].roomInfoCard.Amenities.StudentComputer}</p> : <p></p>}
              {this.props.room.Equipment.HasAirConditioner ? <p>{language[LanguageStore.lang].roomInfoCard.Amenities.AirConditioner}</p> : <p></p>}
              {this.props.room.Equipment.HasProjector ? <p>{language[LanguageStore.lang].roomInfoCard.Amenities.Projector}</p> : <p></p>}
              {this.props.room.Equipment.HasWhiteboard ? <p>{language[LanguageStore.lang].roomInfoCard.Amenities.WhiteBoard}</p> : <p></p>}
              {this.props.room.Equipment.HasVisualizer ? <p>{language[LanguageStore.lang].roomInfoCard.Amenities.Visualizer}</p> : <p></p>}  
            </div>
          </div>
        </div>
    )
  }
}

export default RoomInfoCard
