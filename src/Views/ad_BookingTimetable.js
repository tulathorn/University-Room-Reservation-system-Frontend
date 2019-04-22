import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import BookingTable from '../Components/bookingTable'

import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'



class AdBookingTimatableView extends Component {
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <div className="row">
            <h2>{language[LanguageStore.lang].adBookingTimetable.BookingTimetable}</h2>
          </div>
          <br/>
          <BookingTable/>
        </div>
      </div>
    )
  }
}

export default AdBookingTimatableView
