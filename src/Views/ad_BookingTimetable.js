import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import BookingTable from '../Components/bookingTable'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'
import { observer } from 'mobx-react'
import ReservationStore from '../stores/ReservationStore'

@observer
class AdBookingTimatableView extends Component {
  componentDidMount() {
    ReservationStore.cleanConfig()
    ReservationStore.setConfig('RoomID',localStorage.getItem('RoomID'))
    ReservationStore.GetReservation()
  }
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <div className="row">
            <h2>{language[LanguageStore.lang].adBookingTimetable.BookingTimetable} {localStorage.getItem('RoomName')}</h2>
          </div>
          <br/>
          <table class="table table-hover table-bordered">
            <thead class="text-center">
              <tr class="table-info">
                <th scope="col">{language[LanguageStore.lang].bookingTable.DateFrom}</th>
                <th scope="col">{language[LanguageStore.lang].bookingTable.DateTo}</th>
                <th scope="col">{language[LanguageStore.lang].bookingTable.TimeFrom}</th>
                <th scope="col">{language[LanguageStore.lang].bookingTable.TimeTo}</th>
                <th scope="col">{language[LanguageStore.lang].bookingTable.Day}</th>
                <th scope="col">{language[LanguageStore.lang].bookingTable.UserInfo}</th>
                <th scope="col">{language[LanguageStore.lang].bookingTable.Purpose}</th>
              </tr>
            </thead>
            <tbody>
              {ReservationStore.reservedDatas.map(roomuse => {
              return <BookingTable data={roomuse} />})}
            
            </tbody>
          </table>
          
        </div>
      </div>
    )
  }
}

export default AdBookingTimatableView
