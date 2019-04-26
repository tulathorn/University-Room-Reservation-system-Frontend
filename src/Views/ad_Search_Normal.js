import React, { Component } from 'react'
import styled from 'styled-components'
import AdNavbar from '../Components/ad_Navbar'
import ReservationFormAd from '../Components/ReservationFormAd'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

const Title = styled.h1`
  color: #1f384b;
`

class AdSearchNorView extends Component {
  
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <br />
          <div className="row">
            <div className="col-6">
              <button type="button" className="btn btn-info btn-lg btn-block" disabled>{language[LanguageStore.lang].adSearchNormal.NormalBooking}</button>
            </div>
            <div className="col-6">
              <a href="/ad_search_rec" className="btn btn-outline-info btn-lg btn-block">{language[LanguageStore.lang].adSearchNormal.RecurringBooking}</a>
            </div>
          </div>
          <br/>
          <center>
            <Title>{language[LanguageStore.lang].adSearchNormal.Title}</Title>
          </center>
          <br />

          <ReservationFormAd/>

          
        </div>
      </div>
    )
  }
}

export default AdSearchNorView
