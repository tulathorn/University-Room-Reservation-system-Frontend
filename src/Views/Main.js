import React, { Component } from 'react'
import styled from 'styled-components'

import Navbar from '../Components/Navbar'

import ReservationForm from '../Components/ReservationForm'
import { Consumer as RoomConsumer } from '../Components/RoomDataProvider'

const Title = styled.h1`
  color: #1f384b;
`

class MainView extends Component {
  constructor(props){
    super(props)
    this.state = {
      SearchData: []
    }
  }
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

          <RoomConsumer>{state => <ReservationForm {...state} />}</RoomConsumer>

          <center>
            <a href="/search">Go to list page(Temporary)</a>
          </center>
        </div>
      </div>
    )
  }
}

export default MainView
