import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import AdCurHistoryRoomCard from '../Components/adCurHisCard'

import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'


class AdCurHistoryView extends Component {
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <a href="/ad_prehistory" className="btn btn-outline-info btn-lg btn-block">{language[LanguageStore.lang].adCurHistory.PreviousBooking}</a>
            </div>
            <div className="col-md-6 col-sm-12">
              <button type="button" className="btn btn-info btn-lg btn-block" disabled>{language[LanguageStore.lang].adCurHistory.CurrentBooking}</button>
            </div>
          </div>
          <br/>
          <br/>
          <AdCurHistoryRoomCard/>
        </div>
      </div>
    )
  }
}

export default AdCurHistoryView
