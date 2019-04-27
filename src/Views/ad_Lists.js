import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import RoomInformationCardAd from '../Components/RoomInformationCardAd'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'
import { observer } from 'mobx-react'
import ReservationStore from '../stores/ReservationStore';

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: 'white'
}

@observer
class AdListView extends Component {
  componentDidMount() {
    ReservationStore.GetAvailableRoom()
  }

  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <div className="jumbotron" style={jumbotronStyle}>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <p>{language[LanguageStore.lang].List.Result} : {ReservationStore.reservedDatas.length}</p>
                <p><b>{language[LanguageStore.lang].searchPreviewCard.SearchFor} : </b></p>
                {ReservationStore.searchTemp.Building ? 
                  <p><b>{language[LanguageStore.lang].searchPreviewCard.Building}</b> : {ReservationStore.searchTemp.Building}</p> : <p></p>}
                {ReservationStore.searchTemp.PeopleCapacity ? 
                  <p><b>{language[LanguageStore.lang].searchPreviewCard.Size}</b> : {ReservationStore.searchTemp.PeopleCapacity} {language[LanguageStore.lang].List.People}</p> : <p></p>}
                {ReservationStore.searchTemp.Date ? 
                  <p><b>{language[LanguageStore.lang].searchPreviewCard.Date}</b> : {ReservationStore.searchTemp.Date}</p> : <p></p>}
                {ReservationStore.searchTemp.tohr ? 
                  <p><b>{language[LanguageStore.lang].searchPreviewCard.From}</b> : {localStorage.getItem('ScheduleFrom')} <b>{language[LanguageStore.lang].List.To}</b> {localStorage.getItem('ScheduleTo')}</p> : <p></p>}
              </div>
              <div className="col-md-6 col-sm-12">
                <br/><br/><p>
                  <b>{language[LanguageStore.lang].searchPreviewCard.Amenity} : </b>
                </p>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    {ReservationStore.searchTemp.HasTeacherComputers ? <p>{language[LanguageStore.lang].searchPreviewCard.Amenities.TeacherComputer}</p> : <div></div>}
                    {ReservationStore.searchTemp.HasStudentComputers ? <p>{language[LanguageStore.lang].searchPreviewCard.Amenities.StudentComputer}</p> : <div></div>}
                    {ReservationStore.searchTemp.HasAirConditioner ? <p>{language[LanguageStore.lang].searchPreviewCard.Amenities.AirConditioner}</p> : <div></div>}
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {ReservationStore.searchTemp.HasProjector ? <p>{language[LanguageStore.lang].searchPreviewCard.Amenities.Projector}</p> : <div></div>}
                    {ReservationStore.searchTemp.HasWhiteboard ? <p>{language[LanguageStore.lang].searchPreviewCard.Amenities.WhiteBoard}</p> : <div></div>}
                    {ReservationStore.searchTemp.HasVisualizer ? <p>{language[LanguageStore.lang].searchPreviewCard.Amenities.Visualizer}</p> : <div></div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {ReservationStore.reservedDatas.map(roomv => {
            return <RoomInformationCardAd room={roomv} />
          })}
        </div>
      </div>
    )
  }
}

export default AdListView
