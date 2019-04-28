import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import SearchRecForm from '../Components/searchRecForm'
import styled from 'styled-components'
import language from '../languages.json'


const Title = styled.h1`
  color: #1f384b;
`

class AdSearchRecView extends Component {

  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <br/>
          <div className="row">
            <div className="col-6">
              <a href="/ad_search_nor" className="btn btn-outline-info btn-lg btn-block">{language[localStorage.getItem('language')].adSearchRecurring.NormalBooking}</a>
            </div>
            <div className="col-6">
              <button type="button" className="btn btn-info btn-lg btn-block" disabled>{language[localStorage.getItem('language')].adSearchRecurring.RecurringBooking}</button>
            </div>
          </div>
          <br/>
          <center>
            <Title>{language[localStorage.getItem('language')].adSearchRecurring.Title}</Title>
          </center>
          <br/>
          <SearchRecForm/>
         
        </div>
      </div>
    )
  }
}

export default AdSearchRecView
