import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

const jumbotronStyle1 = {
  width: 'auto',
  height: 'auto',
  backgroundColor: 'white'
}

class AdRoomInfoCard extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
        <h2>{this.props.room.RoomName}</h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="jumbotron" style={jumbotronStyle1}>
              
              <center><img src={require("../Pictures/testclassroom.jpg")} width="300px" alt=""/></center>
              <br/>
              <div className="row">
                <p><b>{language[LanguageStore.lang].adRoomInfo.Amenity} : </b></p>
              </div>
              <div className="row">
                <div className="col-md-1 col-sm-0">
                </div>
                <div className="col-md-11 col-sm-12">
                  {this.props.room.Equipment.HasTeacherComputers ? <p>{language[LanguageStore.lang].adRoomInfo.Amenities.TeacherComputer}</p> : <p></p>}
                  {this.props.room.Equipment.HasStudentComputers ? <p>{language[LanguageStore.lang].adRoomInfo.Amenities.StudentComputer}</p> : <p></p>}
                  {this.props.room.Equipment.HasAirConditioner ? <p>{language[LanguageStore.lang].adRoomInfo.Amenities.AirConditioner}</p> : <p></p>}
                  {this.props.room.Equipment.HasProjector ? <p>{language[LanguageStore.lang].adRoomInfo.Amenities.Projector}</p> : <p></p>}
                  {this.props.room.Equipment.HasWhiteboard ? <p>{language[LanguageStore.lang].adRoomInfo.Amenities.WhiteBoard}</p> : <p></p>}
                  {this.props.room.Equipment.HasVisualizer ? <p>{language[LanguageStore.lang].adRoomInfo.Amenities.Visualizer}</p> : <p></p>}  
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="jumbotron text-white" style={jumbotronStyle}>
              <div className="row">
                  <p><b>{language[LanguageStore.lang].adRoomInfo.Information} : </b></p>
              </div>
              <div className="row">
                <div className="col-md-1 col-sm-0">
                </div>
                <div className="col-md-11 col-sm-12">
                  <p>{language[LanguageStore.lang].adRoomInfo.PeopleCapacity} : {this.props.room.PeopleCapacity} {language[LanguageStore.lang].adRoomInfo.People}</p>
                  <p>{language[LanguageStore.lang].adRoomInfo.Building} : {this.props.room.Building}</p>
                  <p>{language[LanguageStore.lang].adRoomInfo.Floor} : {this.props.room.Floor}</p>
                  <p>{language[LanguageStore.lang].adRoomInfo.RoomName} : {this.props.room.RoomName}</p>
                  <p>{language[LanguageStore.lang].adRoomInfo.OperatingDay} : {/*this.props.room.ClosingDay*/}
                    
                    {this.props.room.ClosingDay[0].localeCompare('1')}
                    {this.props.room.ClosingDay[1].localeCompare('1')}
                    {this.props.room.ClosingDay[2].localeCompare('1')}
                    {this.props.room.ClosingDay[3].localeCompare('1')}
                    {this.props.room.ClosingDay[4].localeCompare('1')}
                    {this.props.room.ClosingDay[5].localeCompare('1')}
                    {this.props.room.ClosingDay[6].localeCompare('1')}
                    </p>
                  <p>{language[LanguageStore.lang].adRoomInfo.OperatingTime} : {this.props.room.OpenTime} - {this.props.room.CloseTime}</p>
                </div>
              </div>
              <div className="row">
                <a href="/ad_timetable" className="btn btn-success" target="_blank">{language[LanguageStore.lang].adRoomInfo.BookingTimeTable}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 col-sm-0">
          </div>
          <div className="col-md-1 col-sm-6">
            <button onClick={() => this.reformData()} type="button" className="btn btn-outline-danger">{language[LanguageStore.lang].adRoomInfo.Delete}</button>
          </div>
          <div className="col-md-1 col-sm-6">
            
            <a href="/ad_edit_room" className="btn btn-outline-info" target="_blank">{language[LanguageStore.lang].adRoomInfo.Edit}</a>
          </div>
          <div className="col-md-5 col-sm-0">
          </div>
        </div>
      </div>
    )
  }
  }
  
  export default AdRoomInfoCard