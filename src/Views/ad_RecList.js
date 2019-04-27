import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import RoomInformationCardAdRec from '../Components/RoomInformationCardAdRec'
import { observer } from 'mobx-react'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'
import ReservationStore from '../stores/ReservationStore';

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: 'white'
}

@observer
class AdRecListView extends Component {
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
                
                <p><b>{language[LanguageStore.lang].recPreviewCard.SearchFor} : </b></p>


                {ReservationStore.searchTemp.Building ? 
                  <p><b>{language[LanguageStore.lang].recPreviewCard.Building}</b> : {ReservationStore.searchTemp.Building}</p> : <p></p>}
                {ReservationStore.searchTemp.PeopleCapacity ? 
                  <p><b>{language[LanguageStore.lang].recPreviewCard.Size}</b> : {ReservationStore.searchTemp.PeopleCapacity} {language[LanguageStore.lang].recPreviewCard.People}</p> : <p></p>}
                {ReservationStore.searchTemp.Day ? 
                  <p><b>{language[LanguageStore.lang].recPreviewCard.Day}</b> : {ReservationStore.searchTemp.Day}</p> : <p></p>}
                {ReservationStore.searchTemp.StartDate ? 
                  <p><b>{language[LanguageStore.lang].recPreviewCard.Date}</b> : {ReservationStore.searchTemp.StartDate} <b>{language[LanguageStore.lang].List.To}</b> {ReservationStore.searchTemp.EndStart}</p> : <p></p>}
                {ReservationStore.searchTemp.tohr ? 
                  <p><b>{language[LanguageStore.lang].recPreviewCard.From}</b> : {localStorage.getItem('ScheduleFrom')} <b>{language[LanguageStore.lang].List.To}</b> {localStorage.getItem('ScheduleTo')}</p> : <p></p>}
                
                
              </div>
              <div className="col-md-6 col-sm-12">
                <br/><br/><p><b>{language[LanguageStore.lang].recPreviewCard.Amenity} : </b></p>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    {ReservationStore.searchTemp.HasTeacherComputers ? <p>{language[LanguageStore.lang].recPreviewCard.Amenities.TeacherComputer}</p> : <div></div>}
                    {ReservationStore.searchTemp.HasStudentComputers ? <p>{language[LanguageStore.lang].recPreviewCard.Amenities.StudentComputer}</p> : <div></div>}
                    {ReservationStore.searchTemp.HasAirConditioner ? <p>{language[LanguageStore.lang].recPreviewCard.Amenities.AirConditioner}</p> : <div></div>}
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {ReservationStore.searchTemp.HasProjector ? <p>{language[LanguageStore.lang].recPreviewCard.Amenities.Projector}</p> : <div></div>}
                    {ReservationStore.searchTemp.HasWhiteboard ? <p>{language[LanguageStore.lang].recPreviewCard.Amenities.WhiteBoard}</p> : <div></div>}
                    {ReservationStore.searchTemp.HasVisualizer ? <p>{language[LanguageStore.lang].recPreviewCard.Amenities.Visualizer}</p> : <div></div>}
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
