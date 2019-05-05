import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import BookingTable from '../Components/bookingTable'
import language from '../languages.json'
import { observer } from 'mobx-react'
import ReservationStore from '../stores/ReservationStore'
import AuthenticationGate from '../Components/AuthenticationGateAdmin'

@observer
class AdBookingTimatableView extends Component {
  componentDidMount() {
    ReservationStore.cleanConfig()
    ReservationStore.setConfig('RoomID',localStorage.getItem('RoomID'))
    ReservationStore.GetReservation()
  }
  render() {
    return (
      <AuthenticationGate>
      <div>
        <AdNavbar />
        <div className="container">
          <div className="row">
            <h2>{language[localStorage.getItem('language')].adBookingTimetable.BookingTimetable} {localStorage.getItem('RoomName')}</h2>
          </div>
          <br/>
          <table className="table table-hover table-bordered">
            <thead className="text-center">
              <tr className="table-info">
                <th scope="col">{language[localStorage.getItem('language')].bookingTable.DateFrom}</th>
                <th scope="col">{language[localStorage.getItem('language')].bookingTable.DateTo}</th>
                <th scope="col">{language[localStorage.getItem('language')].bookingTable.TimeFrom}</th>
                <th scope="col">{language[localStorage.getItem('language')].bookingTable.TimeTo}</th>
                <th scope="col">{language[localStorage.getItem('language')].bookingTable.Day}</th>
                <th scope="col">{language[localStorage.getItem('language')].bookingTable.UserInfo}</th>
                <th scope="col">{language[localStorage.getItem('language')].bookingTable.Purpose}</th>
              </tr>
            </thead>
            <tbody>
              {ReservationStore.reservedDatas.map(roomuse => {
              return <BookingTable data={roomuse} />})}
            
            </tbody>
          </table>
          
        </div>
      </div>
      </AuthenticationGate>
    )
  }
}

export default AdBookingTimatableView
