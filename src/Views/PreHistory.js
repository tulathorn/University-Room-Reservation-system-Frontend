import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import PreHistoryRoomCard from '../Components/preHisRoomCard'

import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'


class PreHistoryView extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <button type="button" className="btn btn-info btn-lg btn-block" disabled>{language[LanguageStore.lang].PreHistory.PreviousHistory}</button>
            </div>
            <div className="col-md-6 col-sm-12">
              <a href="/curhistory" className="btn btn-outline-info btn-lg btn-block">{language[LanguageStore.lang].PreHistory.CurrentHistory}</a>
            </div>
          </div>
          <br/>
          <br/>

          <PreHistoryRoomCard />

        </div>
      </div>
    )
  }
}

export default PreHistoryView
