import React, { Component } from 'react'
import RoomStore from '../stores/RoomStore'
import ReservationStore from '../stores/ReservationStore'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'
import Navbar from '../Components/Navbar'
import { observer } from 'mobx-react'
import RoomInformationCard from '../Components/RoomInformationCard'

@observer
class ListView extends Component {
  componentDidMount() {
    RoomStore.fetchData()
    ReservationStore.GetAvailableRoom()
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <p>{language[LanguageStore.lang].List.Result} : {ReservationStore.reservedDatas.length}</p>
              <p><b>{language[LanguageStore.lang].List.SearchFor} : </b></p>

              {ReservationStore.searchTemp.Building ? 
                <p><b>{language[LanguageStore.lang].List.Building}</b> : {ReservationStore.searchTemp.Building}</p>
                 : <p></p>}

              {ReservationStore.searchTemp.PeopleCapacity ? 
                <p><b>{language[LanguageStore.lang].List.Size}</b> : {ReservationStore.searchTemp.PeopleCapacity} {language[LanguageStore.lang].List.People}</p>
                 : <p></p>}

              {ReservationStore.searchTemp.Date ? 
                <p><b>{language[LanguageStore.lang].List.Date}</b> : {ReservationStore.searchTemp.Date}</p>
                 : <p></p>}

              {ReservationStore.searchTemp.tohr ? 
                <p><b>{language[LanguageStore.lang].List.From}</b> : {localStorage.getItem('ScheduleFrom')} <b>{language[LanguageStore.lang].List.To}</b> {localStorage.getItem('ScheduleTo')}</p>
                 : <p></p>}
            </div>
            <div className="col-md-6 col-sm-12">
              <br/><br/><p>
                <b>{language[LanguageStore.lang].List.Amenity} : </b>
              </p>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  {ReservationStore.searchTemp.HasTeacherComputers ? <p>{language[LanguageStore.lang].List.Amenities.TeacherComputer}</p> : <div></div>}
                  {ReservationStore.searchTemp.HasStudentComputers ? <p>{language[LanguageStore.lang].List.Amenities.StudentComputer}</p> : <div></div>}
                  {ReservationStore.searchTemp.HasAirConditioner ? <p>{language[LanguageStore.lang].List.Amenities.AirConditioner}</p> : <div></div>}
                </div>
                <div className="col-md-6 col-sm-12">
                  {ReservationStore.searchTemp.HasProjector ? <p>{language[LanguageStore.lang].List.Amenities.Projector}</p> : <div></div>}
                  {ReservationStore.searchTemp.HasWhiteboard ? <p>{language[LanguageStore.lang].List.Amenities.WhiteBoard}</p> : <div></div>}
                  {ReservationStore.searchTemp.HasVisualizer ? <p>{language[LanguageStore.lang].List.Amenities.Visualizer}</p> : <div></div>}
                </div>
              </div>

            </div>
          </div>
          
          {ReservationStore.reservedDatas.map(roomv => {
            return <RoomInformationCard room={roomv} />
          })}
          
        </div>
      </div>

    )
  }
}

export default ListView
