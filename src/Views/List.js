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
              <p>{language[LanguageStore.lang].List.Result} : 1</p>
              <p><b>{language[LanguageStore.lang].List.SearchFor} : </b></p>

              {RoomStore.searchConfig.Building ? 
                <p><b>{language[LanguageStore.lang].List.Building}</b> : {RoomStore.searchConfig.Building}</p>
                 : <p></p>}

              {RoomStore.searchConfig.PeopleCapacity ? 
                <p><b>{language[LanguageStore.lang].List.Size}</b> : {RoomStore.searchConfig.PeopleCapacity} {language[LanguageStore.lang].List.People}</p>
                 : <p></p>}

              {RoomStore.searchConfig.Date ? 
                <p><b>{language[LanguageStore.lang].List.Date}</b> : {RoomStore.searchConfig.Date}</p>
                 : <p></p>}

              {RoomStore.searchConfig.fromhr ? 
                <p><b>{language[LanguageStore.lang].List.From}</b> : {RoomStore.searchConfig.fromhr}:{RoomStore.searchConfig.frommin} <b>{language[LanguageStore.lang].List.To}</b> {RoomStore.searchConfig.tohr}:{RoomStore.searchConfig.tomin}</p>
                 : <p></p>}
            </div>
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

            </div>
          </div>
          {/* {RoomStore.roomDatas.map(room => (
            <RoomInformationCard room={room} />
          ))} */}

          {RoomStore.roomDatas.map(room => {
            // console.log(room)
            return <RoomInformationCard room={room} />
          })}
          
          <center>
            <a href="/booking">Go to booking page(Temporary)</a>
          </center>
          {console.log(RoomStore.searchConfig.PeopleCapacity)}
        </div>
      </div>

    )
  }
}

export default ListView
