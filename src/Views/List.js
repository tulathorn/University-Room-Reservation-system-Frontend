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
              <p>
                {language[LanguageStore.lang].List.Result} : 1
              </p>
              <p>
                <b>{language[LanguageStore.lang].List.SearchFor} : </b>
              </p>
              <p><b>{language[LanguageStore.lang].List.Building}</b> : {RoomStore.searchConfig.Building}</p>
              <p>
                <b>
                  {language[LanguageStore.lang].List.Size}
                </b> : 60{' '}
                {language[LanguageStore.lang].List.People}
              </p>
              <p><b>{language[LanguageStore.lang].List.Date}</b> : Monday 12 November 2018</p>
              <p><b>{language[LanguageStore.lang].List.From}</b> 13:30 <b>{language[LanguageStore.lang].List.To}</b> 17:30</p>
            </div>
            <div className="col-md-6 col-sm-12">
              <br/><br/><p>
                <b>{language[LanguageStore.lang].List.Amenity} : </b>
              </p>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <p>{language[LanguageStore.lang].List.Amenities.TeacherComputer}</p>
                  <p>{language[LanguageStore.lang].List.Amenities.StudentComputer}</p>
                  <p>{language[LanguageStore.lang].List.Amenities.AirConditioner}</p>
                </div>
                <div className="col-md-6 col-sm-12">
                  <p>{language[LanguageStore.lang].List.Amenities.Projector}</p>
                  <p>{language[LanguageStore.lang].List.Amenities.WhiteBoard}</p>
                  <p>{language[LanguageStore.lang].List.Amenities.Visualizer}</p>
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
