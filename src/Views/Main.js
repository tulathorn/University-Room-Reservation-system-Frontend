import React, { Component } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import Navbar from '../Components/Navbar'

import ReservationForm from '../Components/ReservationForm'

const Title = styled.h1`
  color: #1f384b;
`
@observer
class MainView extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <br />
          <center>
            <Title>Welcome to University Room Reservation System</Title>
          </center>
          <br />

          <ReservationForm />

          <center>
            <a href="/search">Go to list page(Temporary)</a>
          </center>
        </div>
      </div>
    )
  }
}

export default MainView
