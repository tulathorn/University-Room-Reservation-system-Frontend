import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import RoomInformationCardAdRec from '../Components/RoomInformationCardAdRec'
import { observer } from 'mobx-react'
import language from '../languages.json'
import ReservationStore from '../stores/ReservationStore';

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: 'white'
}

@observer
class AdRecListView extends Component {
  componentWillMount() {
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
                
                <p><b>{language[localStorage.getItem('language')].recPreviewCard.SearchFor} : </b></p>


                {ReservationStore.searchTemp.Building ? 
                  <p><b>{language[localStorage.getItem('language')].recPreviewCard.Building}</b> : {ReservationStore.searchTemp.Building}</p> : <p></p>}
                {ReservationStore.searchTemp.PeopleCapacity ? 
                  <p><b>{language[localStorage.getItem('language')].recPreviewCard.Size}</b> : {ReservationStore.searchTemp.PeopleCapacity} {language[localStorage.getItem('language')].recPreviewCard.People}</p> : <p></p>}
                {ReservationStore.searchTemp.Day ? 
                  <p><b>{language[localStorage.getItem('language')].recPreviewCard.Day}</b> : {ReservationStore.searchTemp.Day}</p> : <p></p>}
                {ReservationStore.searchTemp.StartDate ? 
                  <p><b>{language[localStorage.getItem('language')].recPreviewCard.Date}</b> : {ReservationStore.searchTemp.StartDate} <b>{language[localStorage.getItem('language')].List.To}</b> {ReservationStore.searchTemp.EndStart}</p> : <p></p>}
                {ReservationStore.searchTemp.tohr ? 
                  <p><b>{language[localStorage.getItem('language')].recPreviewCard.From}</b> : {localStorage.getItem('ScheduleFrom')} <b>{language[localStorage.getItem('language')].List.To}</b> {localStorage.getItem('ScheduleTo')}</p> : <p></p>}
                
                
              </div>
              <div className="col-md-6 col-sm-12">
                <br/><br/><p><b>{language[localStorage.getItem('language')].recPreviewCard.Amenity} : </b></p>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    {ReservationStore.searchTemp.HasTeacherComputers ? <p>{language[localStorage.getItem('language')].recPreviewCard.Amenities.TeacherComputer}</p> : <div></div>}
                    {ReservationStore.searchTemp.HasStudentComputers ? <p>{language[localStorage.getItem('language')].recPreviewCard.Amenities.StudentComputer}</p> : <div></div>}
                    {ReservationStore.searchTemp.HasAirConditioner ? <p>{language[localStorage.getItem('language')].recPreviewCard.Amenities.AirConditioner}</p> : <div></div>}
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {ReservationStore.searchTemp.HasProjector ? <p>{language[localStorage.getItem('language')].recPreviewCard.Amenities.Projector}</p> : <div></div>}
                    {ReservationStore.searchTemp.HasWhiteboard ? <p>{language[localStorage.getItem('language')].recPreviewCard.Amenities.WhiteBoard}</p> : <div></div>}
                    {ReservationStore.searchTemp.HasVisualizer ? <p>{language[localStorage.getItem('language')].recPreviewCard.Amenities.Visualizer}</p> : <div></div>}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          {ReservationStore.reservedDatas.map(roomv => {
            return <RoomInformationCardAdRec room={roomv} />
          })}
          
        </div>
      </div>
    )
  }
}

export default AdRecListView
