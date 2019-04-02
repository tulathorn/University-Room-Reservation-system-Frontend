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
        <div className="jumbotron" style={jumbotronStyle1} >
          <h2>CPE1121</h2>
          <center>
            <img
              src={require("../Pictures/testclassroom.jpg")} width="300" alt=""
            />
          </center>
          <br/>

          <div className="row">
            <div className="col-md-1 col-sm-0">
            </div>
            <div className="col-md-4 col-sm-4">
              <p><b>{language[LanguageStore.lang].roomInfoCard.BookedDate} : </b></p>
            </div>
            <div className="col-md-7 col-sm-8">
              <p>Monday 12 November 2018</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-1 col-sm-0">
            </div>
            <div className="col-md-4 col-sm-4">
              <p><b>{language[LanguageStore.lang].roomInfoCard.BookedTime} : </b></p>
            </div>
            <div className="col-md-7 col-sm-8">
              <p>{language[LanguageStore.lang].roomInfoCard.From} 13:30 {language[LanguageStore.lang].roomInfoCard.To} 17:30</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-1 col-sm-0">
            </div>
            <div className="col-md-4 col-sm-4">
              <p><b>{language[LanguageStore.lang].roomInfoCard.Information} : </b></p>
            </div>
            <div className="col-md-7 col-sm-8">
              <p>{language[LanguageStore.lang].roomInfoCard.Informations.PeopleCapacity} : 50</p>
              <p>{language[LanguageStore.lang].roomInfoCard.Informations.Building} : Witsawa Watthana</p>
              <p>{language[LanguageStore.lang].roomInfoCard.Informations.Floor} : 11</p>
              <p>{language[LanguageStore.lang].roomInfoCard.Informations.RoomNumber} : CPE1121</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-1 col-sm-0">
            </div>
            <div className="col-md-8 col-sm-12">
              <p><b>{language[LanguageStore.lang].roomInfoCard.Amenity} : </b></p>
            </div>
            <div className="col-md-3 col-sm-0">
            </div>
          </div>

          <div className="row">
            <div className="col-md-2">
            </div>
            <div className="col-md-5">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">
                  {language[LanguageStore.lang].roomInfoCard.Amenities.TeacherComputer}
                </label><br/>
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">
                  {language[LanguageStore.lang].roomInfoCard.Amenities.StudentComputer}
                </label><br/>
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">
                  {language[LanguageStore.lang].roomInfoCard.Amenities.AirConditioner}
                </label>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"disabled/>
                <label className="form-check-label" for="defaultCheck1">
                 {language[LanguageStore.lang].roomInfoCard.Amenities.Projector}
                </label><br/>
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"select/>
                <label className="form-check-label" for="defaultCheck1">
                  {language[LanguageStore.lang].roomInfoCard.Amenities.WhiteBoard}
                </label><br/>
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" selected/>
                <label className="form-check-label" for="defaultCheck1">
                  {language[LanguageStore.lang].roomInfoCard.Amenities.Visualizer}
                </label>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default RoomInfoCard
