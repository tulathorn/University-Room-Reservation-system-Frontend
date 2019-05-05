import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import AdCurHistoryRoomCard from '../Components/adCurHisCard'
import language from '../languages.json'
import { observer } from 'mobx-react'
import ReservationStore from '../stores/ReservationStore'
import moment from 'moment'
import AuthenticationGate from '../Components/AuthenticationGateAdmin'

@observer
class AdCurHistoryView extends Component {
  componentDidMount() {
    ReservationStore.cleanConfig()
    ReservationStore.GetReservation()
  }

  render() {
    return (
      <AuthenticationGate>
      <div>
        <AdNavbar />
        <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <a href="/ad_prehistory" className="btn btn-outline-info btn-lg btn-block">{language[localStorage.getItem('language')].adCurHistory.PreviousBooking}</a>
            </div>
            <div className="col-md-6 col-sm-12">
              <button type="button" className="btn btn-info btn-lg btn-block" disabled>{language[localStorage.getItem('language')].adCurHistory.CurrentBooking}</button>
            </div>
          </div>
          <br/>
          <br/>
          
          {ReservationStore.reservedDatas.map(reserved => {
            if(moment(reserved.Date.slice(0,19)+'-07:00').isAfter()){
              return <AdCurHistoryRoomCard data={reserved} />
            }
          })}
        </div>
      </div>
      </AuthenticationGate>
    )
  }
}

export default AdCurHistoryView
