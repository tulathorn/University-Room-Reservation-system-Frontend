import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import CurHistoryRoomCard from '../Components/curHisRoomCard'

import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class CurHistoryView extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <a href="/prehistory" className="btn btn-outline-info btn-lg btn-block">{language[LanguageStore.lang].CurHistory.PreviousHistory}</a>
            </div>
            <div className="col-md-6 col-sm-12">
              <button type="button" className="btn btn-info btn-lg btn-block" disabled>{language[LanguageStore.lang].CurHistory.CurrentHistory}</button>
            </div>
          </div>
          <br/>
          <br/>
          <CurHistoryRoomCard />
        </div>
      </div>
    )
  }
}

export default CurHistoryView
