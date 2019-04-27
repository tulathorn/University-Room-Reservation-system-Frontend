import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'
import Swal from 'sweetalert2'
import RoomStore from '../stores/RoomStore'

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
  
  DeleteRoom = () =>{
    console.log('wqdqdwqdwqd')
    RoomStore.resetFilterForm()
    RoomStore.setConfig('RoomID',''+this.props.room.RoomID)
    console.log(RoomStore.searchConfig)
    this.deleteClick()
    //window.location = "/ad_all_list";
  }
  
  EditClick = () =>{
    localStorage.setItem('RoomID',this.props.room.RoomID)
    window.location = "/ad_edit_room";
  }

  ViewTime = () => {
    localStorage.setItem('RoomID',this.props.room.RoomID)
    localStorage.setItem('RoomName',this.props.room.RoomName)
    window.location = "/ad_timetable";
  }

  deleteClick = () =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this room?",
      type: 'warning',
      focusCancel: true,
      showCancelButton: true,
      confirmButtonColor: '#17a2b8',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        RoomStore.deleteData()
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Room ' + this.props.room.RoomName + ' has been deleted',
          showConfirmButton: true,
          preConfirm: () => {
            window.location = "/ad_all_list";
            }
        })
      }
    })
  }
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
                    
                    {this.props.room.ClosingDay[0].localeCompare('1') ? 1 : 0}
                    {this.props.room.ClosingDay[1].localeCompare('1') ? 1 : 0}
                    {this.props.room.ClosingDay[2].localeCompare('1') ? 1 : 0}
                    {this.props.room.ClosingDay[3].localeCompare('1') ? 1 : 0}
                    {this.props.room.ClosingDay[4].localeCompare('1') ? 1 : 0}
                    {this.props.room.ClosingDay[5].localeCompare('1') ? 1 : 0}
                    {this.props.room.ClosingDay[6].localeCompare('1') ? 1 : 0}
                    </p>
                  <p>{language[LanguageStore.lang].adRoomInfo.OperatingTime} : {this.props.room.OpenTime} - {this.props.room.CloseTime}</p>
                </div>
              </div>
              <div className="row">
                <button onClick={() => this.ViewTime()} type="button" className="btn btn-success">{language[LanguageStore.lang].adRoomInfo.BookingTimeTable}</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 col-sm-0">
          </div>
          <div className="col-md-1 col-sm-6">
            <button onClick={(e) => this.DeleteRoom(e)} type="button" className="btn btn-outline-danger">{language[LanguageStore.lang].adRoomInfo.Delete}</button>
          </div>
          <div className="col-md-1 col-sm-6">
            <button onClick={() => this.EditClick()} type="button" className="btn btn-outline-info">{language[LanguageStore.lang].adRoomInfo.Edit}</button>
          </div>
          <div className="col-md-5 col-sm-0">
          </div>
        </div>
      </div>
    )
  }
  }
  
  export default AdRoomInfoCard