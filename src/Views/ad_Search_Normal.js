import React, { Component } from 'react'
import styled from 'styled-components'
import AdNavbar from '../Components/ad_Navbar'
import ReservationFormAd from '../Components/ReservationFormAd'
import language from '../languages.json'

import AuthenticationGate from '../Components/AuthenticationGateAdmin'
const Title = styled.h1`
  color: #1f384b;
`

class AdSearchNorView extends Component {
  
  render() {
    return (
      <AuthenticationGate>
      <div>
        <AdNavbar />
        <div className="container">
          <br />
          <div className="row">
            <div className="col-6">
              <button type="button" className="btn btn-info btn-lg btn-block" disabled>{language[localStorage.getItem('language')].adSearchNormal.NormalBooking}</button>
            </div>
            <div className="col-6">
              <a href="/ad_search_rec" className="btn btn-outline-info btn-lg btn-block">{language[localStorage.getItem('language')].adSearchNormal.RecurringBooking}</a>
            </div>
          </div>
          <br/>
          <center>
            <Title>{language[localStorage.getItem('language')].adSearchNormal.Title}</Title>
          </center>
          <br />

          <ReservationFormAd/>

          
        </div>
      </div>
      </AuthenticationGate>
    )
  }
}

export default AdSearchNorView
