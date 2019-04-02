import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import AdPreHistoryRoomCard from '../Components/adPreHisCard'

import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class AdPreHistoryView extends Component {
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
          <AdPreHistoryRoomCard/>
        </div>
      </div>
    )
  }
}

export default AdPreHistoryView
