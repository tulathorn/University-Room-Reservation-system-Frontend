import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import AdPreHistoryRoomCard from '../Components/adPreHisCard'
import language from '../languages.json'
import { observer } from 'mobx-react'
import ReservationStore from '../stores/ReservationStore'
import moment from 'moment'

@observer
class AdPreHistoryView extends Component {
  componentDidMount() {
    ReservationStore.cleanConfig()
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
              <button type="button" className="btn btn-info btn-lg btn-block" disabled>{language[localStorage.getItem('language')].adPreHistory.PreviousBooking}</button>
            </div>
            <div className="col-md-6 col-sm-12">
              <a href="/ad_curhistory" className="btn btn-outline-info btn-lg btn-block">{language[localStorage.getItem('language')].adPreHistory.CurrentBooking}</a>
            </div>
          </div>
          <br/>
          <br/>
          {ReservationStore.reservedDatas.map(reserved => {
            if(moment(reserved.Date.slice(0,19)+'-07:00').isBefore()){
              return <AdPreHistoryRoomCard data={reserved} />
            }
          })}
        </div>
      </div>
    )
  }
}

export default AdPreHistoryView
