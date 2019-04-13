import React, { Component } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import Swal from 'sweetalert2'

import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

import Navbar from '../Components/Navbar'
import AuthenticationGate from '../Components/AuthenticationGate'

import RoomStore from '../stores/RoomStore'
import ReservationForm from '../Components/ReservationForm'

const Title = styled.h1`
  color: #1f384b;
`
@observer
class MainView extends Component {
  searchClick = () => {
    Swal.fire({
      position: 'center',
      type: 'error',
      title: 'Oops...',
      text: 'There are no matching rooms',
      showConfirmButton: false,
      timer: 1500
    })
  }
  constructor(props) {
    super(props)
    this.state = {
      SearchData: []
    }
  }
  render() {
    return (
      <AuthenticationGate>
        <Navbar />
        <div className="container">
          <br />
          <center>
            <Title>{language[LanguageStore.lang].Main.Title}</Title>
          </center>
          <br />

          <ReservationForm />
          <center>
            
            <a href="/search">Go to list page(Temporary)</a>
          </center>
        </div>
      </AuthenticationGate>
      
    )
  }
}

export default MainView
