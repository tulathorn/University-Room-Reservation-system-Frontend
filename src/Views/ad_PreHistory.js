import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import AdPreHistoryRoomCard from '../Components/adPreHisCard'

import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'


import { observer } from 'mobx-react'
import ReservationStore from '../stores/ReservationStore'
@observer
class AdPreHistoryView extends Component {
  componentDidMount() {
    ReservationStore.setConfig()
    //Function setConfig มันใช้ได้นะ กับjson ชั้นแรกอะ แต่พอมันเข้าไปลึกๆแล้วมันไม่ยอมให้หา
    ReservationStore.GetReservation()
  }
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <button type="button" className="btn btn-info btn-lg btn-block" disabled>{language[LanguageStore.lang].adPreHistory.PreviousBooking}</button>
            </div>
            <div className="col-md-6 col-sm-12">
              <a href="/ad_curhistory" className="btn btn-outline-info btn-lg btn-block">{language[LanguageStore.lang].adPreHistory.CurrentBooking}</a>
            </div>
          </div>
          <br/>
          <br/>
          {ReservationStore.reservedDatas.map(reserved => {
            return <AdPreHistoryRoomCard data={reserved} />
          })}
        </div>
      </div>
    )
  }
}

export default AdPreHistoryView
