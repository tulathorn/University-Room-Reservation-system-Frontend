import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import RoomInformationCardAd from '../Components/RoomInformationCardAd'
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
                <p>{language[localStorage.getItem('language')].List.Result} : {ReservationStore.reservedDatas.length}</p>
                <p><b>{language[localStorage.getItem('language')].searchPreviewCard.SearchFor} : </b></p>
                {ReservationStore.searchTemp.Building ? 
                  <p><b>{language[localStorage.getItem('language')].searchPreviewCard.Building}</b> : {ReservationStore.searchTemp.Building}</p> : <p></p>}
                {ReservationStore.searchTemp.PeopleCapacity ? 
                  <p><b>{language[localStorage.getItem('language')].searchPreviewCard.Size}</b> : {ReservationStore.searchTemp.PeopleCapacity} {language[localStorage.getItem('language')].List.People}</p> : <p></p>}
                {ReservationStore.searchTemp.Date ? 
                  <p><b>{language[localStorage.getItem('language')].searchPreviewCard.Date}</b> : {ReservationStore.searchTemp.Date}</p> : <p></p>}
                {ReservationStore.searchTemp.tohr ? 
                  <p><b>{language[localStorage.getItem('language')].searchPreviewCard.From}</b> : {localStorage.getItem('ScheduleFrom')} <b>{language[localStorage.getItem('language')].List.To}</b> {localStorage.getItem('ScheduleTo')}</p> : <p></p>}
              </div>
              <div className="col-md-6 col-sm-12">
                <br/><br/><p>
                  <b>{language[localStorage.getItem('language')].searchPreviewCard.Amenity} : </b>
                </p>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    {ReservationStore.searchTemp.HasTeacherComputers ? <p>{language[localStorage.getItem('language')].searchPreviewCard.Amenities.TeacherComputer}</p> : <div></div>}
                    {ReservationStore.searchTemp.HasStudentComputers ? <p>{language[localStorage.getItem('language')].searchPreviewCard.Amenities.StudentComputer}</p> : <div></div>}
                    {ReservationStore.searchTemp.HasAirConditioner ? <p>{language[localStorage.getItem('language')].searchPreviewCard.Amenities.AirConditioner}</p> : <div></div>}
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {ReservationStore.searchTemp.HasProjector ? <p>{language[localStorage.getItem('language')].searchPreviewCard.Amenities.Projector}</p> : <div></div>}
                    {ReservationStore.searchTemp.HasWhiteboard ? <p>{language[localStorage.getItem('language')].searchPreviewCard.Amenities.WhiteBoard}</p> : <div></div>}
                    {ReservationStore.searchTemp.HasVisualizer ? <p>{language[localStorage.getItem('language')].searchPreviewCard.Amenities.Visualizer}</p> : <div></div>}
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
