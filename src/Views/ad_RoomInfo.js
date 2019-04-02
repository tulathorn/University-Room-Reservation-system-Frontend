import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import RoomStore from '../stores/RoomStore'
import Swal from 'sweetalert2'
import { observer } from 'mobx-react'

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

@observer
class AdRoomInfoView extends Component {
  componentDidMount() {
    RoomStore.fetchData()
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
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Your room has been deleted',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-1 col-sm-1">
            </div>
            <div className="col-md-11 col-sm-11">
            <h2>
               CPE1121
            </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="jumbotron" style={jumbotronStyle1} >
                <center>
                  <img
                    src={require("../Pictures/testclassroom.jpg")} width="300px" alt=""
                    />
                </center>
                <br/>
                <div className="row">
                  <div className="col-md-1 col-sm-0">
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <p><b>{language[LanguageStore.lang].adRoomInfo.Amenity} : </b></p>
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
                        {language[LanguageStore.lang].adRoomInfo.Amenities.TeacherComputer}
                      </label><br/>
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                      <label className="form-check-label" for="defaultCheck1">
                        {language[LanguageStore.lang].adRoomInfo.Amenities.StudentComputer}
                      </label><br/>
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                      <label className="form-check-label" for="defaultCheck1">
                        {language[LanguageStore.lang].adRoomInfo.Amenities.AirConditioner}
                      </label>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"disabled/>
                      <label className="form-check-label" for="defaultCheck1">
                        {language[LanguageStore.lang].adRoomInfo.Amenities.Projector}
                      </label><br/>
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"select/>
                      <label className="form-check-label" for="defaultCheck1">
                        {language[LanguageStore.lang].adRoomInfo.Amenities.WhiteBoard}
                      </label><br/>
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" selected/>
                      <label className="form-check-label" for="defaultCheck1">
                        {language[LanguageStore.lang].adRoomInfo.Amenities.Visualizer}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12">
              <div className="jumbotron text-white" style={jumbotronStyle}>
                <div className="row">
                  <div className="col-md-5 col-sm-4">
                    <p><b>{language[LanguageStore.lang].adRoomInfo.Information} : </b></p>
                  </div>
                  <div className="col-md-7 col-sm-8">
                    <p>{language[LanguageStore.lang].adRoomInfo.PeopleCapacity} : 50{''}{language[LanguageStore.lang].adRoomInfo.People}</p>
                    <p>{language[LanguageStore.lang].adRoomInfo.Building} : Witsawa Watthana</p>
                    <p>{language[LanguageStore.lang].adRoomInfo.Floor} : 11</p>
                    <p>{language[LanguageStore.lang].adRoomInfo.RoomName} : CPE1121</p>
                    <p>{language[LanguageStore.lang].adRoomInfo.OperatingDay} : Mon-Fri</p>
                    <p>{language[LanguageStore.lang].adRoomInfo.OperatingTime} : 08:00 - 20:00</p>
                  </div>
                </div>
                <a href="/ad_timetable" class="text-info" target="_blank">{language[LanguageStore.lang].adRoomInfo.BookingTimeTable}</a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5 col-sm-0">
            </div>
            <div className="col-md-1 col-sm-6">


              <button onClick={() => this.deleteClick()} type="button" className="btn btn-outline-danger">{language[LanguageStore.lang].adRoomInfo.Delete}</button>
            </div>
            <div className="col-md-1 col-sm-6">
              <a href="/ad_edit_room" className="btn btn-outline-info" target="_blank">{language[LanguageStore.lang].adRoomInfo.Edit}</a>
            </div>
            <div className="col-md-5 col-sm-0">
            </div>
          </div>

        </div>
        <br/><br/>
      </div>
    )
  }
}

export default AdRoomInfoView
