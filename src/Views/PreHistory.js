import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import PreHistoryRoomCard from '../Components/preHisRoomCard'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'
import { observer } from 'mobx-react'
import ReservationStore from '../stores/ReservationStore'

@observer
class PreHistoryView extends Component {
  componentDidMount() {
    ReservationStore.setConfig('UserID',localStorage.getItem('UserID'))
    ReservationStore.GetReservation()
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <button type="button" className="btn btn-info btn-lg btn-block" disabled>aaaaa{language[LanguageStore.lang].PreHistory.PreviousHistory}</button>
            </div>
            <div className="col-md-6 col-sm-12">
              <a href="/curhistory" className="btn btn-outline-info btn-lg btn-block">{language[LanguageStore.lang].PreHistory.CurrentHistory}</a>
            </div>
          </div>
          <br/>
          <br/>
          {ReservationStore.reservedDatas.map(reserved => {
            return <PreHistoryRoomCard data={reserved} />
          })}
          

        </div>
      </div>
    )
  }
}

export default PreHistoryView
