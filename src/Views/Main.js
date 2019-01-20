import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'

const Title = styled.h1`
  color: #1F384B;
`
class MainView extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <br/><center><Title>Welcome to University Room Reservation System</Title></center>
          <div >

        </div>
      </div>
    )
  }
}

export default MainView
