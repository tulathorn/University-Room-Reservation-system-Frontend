import React, { Component } from 'react'
import RoomStore from '../stores/RoomStore'
import LanguageStore from '../stores/LanguageStore'

import Navbar from '../Components/Navbar'
import { observer } from 'mobx-react'

import RoomInformationCard from '../Components/RoomInformationCard'

import language from '../language.json'

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
            <div className="col-4">
              <p>{language[LanguageStore.lang].List.Result} : 1</p>
            </div>
            <div className="col-8" />
          </div>
          <div className="row">
            <div className="col-4">
              <p>
                <b>{language[LanguageStore.lang].List.SearchFor} </b>
              </p>
              <p>{language[LanguageStore.lang].List.Building} : Witsawa Watthana</p>
              <p>
                {language[LanguageStore.lang].List.Size} : 60{' '}
                {language[LanguageStore.lang].List.People}
              </p>
              <p>{language[LanguageStore.lang].List.Date} : Monday 12 November 2018</p>
              <p>{language[LanguageStore.lang].List.From} 13:30 to 17:30</p>
            </div>
            <div className="col-8">
              <p>
                <b>{language[LanguageStore.lang].List.Filtered} : </b>
              </p>
              {console.log(JSON.stringify(language[1].List))}
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
        </div>
      </div>
    )
  }
}

export default ListView
