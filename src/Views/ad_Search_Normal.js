import React, { Component } from 'react'
import styled from 'styled-components'
import Swal from 'sweetalert2'
import AdNavbar from '../Components/ad_Navbar'

import ReservationForm from '../Components/ReservationForm'
import { Consumer as RoomConsumer } from '../Components/RoomDataProvider'

import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

const Title = styled.h1`
  color: #1f384b;
`

class AdSearchNorView extends Component {
  searchClick = () =>{
    Swal.fire({
      position: 'center',
      type: 'error',
      title: 'Oops...',
      text: 'There are no matching rooms',
      showConfirmButton: false,
      timer: 1500
    })
  }
  constructor(props){
    super(props)
    this.state = {
      SearchData: []
    }
  }
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

          <RoomConsumer>{state => <ReservationForm {...state} />}</RoomConsumer>

          <center>
            <button type="button" className="btn btn-outline-info" onClick={() => this.searchClick()}  >
              {language[LanguageStore.lang].adSearchNormal.Search}
            </button><br/>
          {/*<a href="/ad_list">Go to list page(Temporary)</a>*/}
          </center>
        </div>
      </div>
    )
  }
}

export default AdSearchNorView
