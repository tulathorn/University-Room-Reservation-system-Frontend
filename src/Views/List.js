import React, { Component } from 'react'
import RoomStore from '../stores/RoomStore'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'
import Navbar from '../Components/Navbar'
import { observer } from 'mobx-react'

import RoomInformationCard from '../Components/RoomInformationCard'



@observer
class ListView extends Component {
  // componentWillMount() {
  //   RoomStore.fetchText()
  // }
  
  componentDidMount() {
    RoomStore.fetchData()
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <p>{language[LanguageStore.lang].List.Result} : {RoomStore.roomDatas.length}</p>
              <p><b>{language[LanguageStore.lang].List.SearchFor} : </b></p>

              {RoomStore.searchConfig.Building ? 
                <p><b>{language[LanguageStore.lang].List.Building}</b> : {RoomStore.searchConfig.Building}</p>
                 : <p></p>}

              {RoomStore.searchConfig.PeopleCapacity ? 
                <p><b>{language[LanguageStore.lang].List.Size}</b> : {RoomStore.searchConfig.PeopleCapacity} {language[LanguageStore.lang].List.People}</p>
                 : <p></p>}

              {RoomStore.schedule.Date ? 
                <p><b>{language[LanguageStore.lang].List.Date}</b> : {RoomStore.schedule.Date}</p>
                 : <p></p>}

              {RoomStore.schedule.fromhr ? 
                <p><b>{language[LanguageStore.lang].List.From}</b> : {RoomStore.schedule.fromhr}:{RoomStore.schedule.frommin} <b>{language[LanguageStore.lang].List.To}</b> {RoomStore.schedule.tohr}:{RoomStore.schedule.tomin}</p>
                 : <p></p>}
            </div>{/*
            <div className="col-md-6 col-sm-12">
              <br/><br/><p>
                <b>{language[LanguageStore.lang].List.Amenity} : </b>
              </p>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  {RoomStore.searchConfig.amenity.teachercom ? <p>{language[LanguageStore.lang].List.Amenities.TeacherComputer}</p> : <p></p>}
                  {RoomStore.searchConfig.amenity.studentcom ? <p>{language[LanguageStore.lang].List.Amenities.StudentComputer}</p> : <p></p>}
                  {RoomStore.searchConfig.amenity.aircon ? <p>{language[LanguageStore.lang].List.Amenities.AirConditioner}</p> : <p></p>}
                </div>
                <div className="col-md-6 col-sm-12">
                  {RoomStore.searchConfig.amenity.projector ? <p>{language[LanguageStore.lang].List.Amenities.Projector}</p> : <p></p>}
                  {RoomStore.searchConfig.amenity.whiteboard ? <p>{language[LanguageStore.lang].List.Amenities.WhiteBoard}</p> : <p></p>}
                  {RoomStore.searchConfig.amenity.visualizer ? <p>{language[LanguageStore.lang].List.Amenities.Visualizer}</p> : <p></p>}
                </div>
              </div>

            </div>*/}
          </div>

          {RoomStore.roomDatas.map(roomv => {
            return <RoomInformationCard room={roomv} />
          })}
        </div>
      </div>

    )
  }
}

export default ListView
