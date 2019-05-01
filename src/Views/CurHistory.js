import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import CurHistoryRoomCard from '../Components/curHisRoomCard'
import language from '../languages.json'
import { observer } from 'mobx-react'
import ReservationStore from '../stores/ReservationStore'
import AuthenticationGate from '../Components/AuthenticationGate'

@observer
class CurHistoryView extends Component {
  componentDidMount() {
    ReservationStore.setConfig('UserID',localStorage.getItem('UserID'))
    ReservationStore.GetReservation()
  }

  render() {
    return (
      <AuthenticationGate>
      <div>
        <Navbar />
        <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <a href="/prehistory" className="btn btn-outline-info btn-lg btn-block">{language[localStorage.getItem('language')].CurHistory.PreviousHistory}</a>
            </div>
            <div className="col-md-6 col-sm-12">
              <button type="button" className="btn btn-info btn-lg btn-block" disabled>{language[localStorage.getItem('language')].CurHistory.CurrentHistory}</button>
            </div>
          </div>
          <br/>
          <br/>
          {ReservationStore.reservedDatas.map(reserved => {return <CurHistoryRoomCard data={reserved} />})}
        </div>
      </div>
      </AuthenticationGate>
    )
  }
}

export default CurHistoryView
