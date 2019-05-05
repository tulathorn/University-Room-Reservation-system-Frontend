import React, { Component } from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import language from '../languages.json'
import UserNavbar from '../Components/Navbar'
import AuthenticationGate from '../Components/AuthenticationGate'
import ReservationForm from '../Components/ReservationForm'

const Title = styled.h1`
  color: #1f384b;
`
@observer
class MainView extends Component {
  

  componentWillMount() {
    localStorage.setItem('language', localStorage.getItem('language') || 0 )  
  }
  
  render() {
    return (
      <AuthenticationGate>
        <UserNavbar />
        <div className="container">
          <br />
          <center>
            <Title>{language[localStorage.getItem('language')].Main.Title}</Title>
          </center>
          <br />

          <ReservationForm />
          
        </div>
      </AuthenticationGate>
      
    )
  }
}

export default MainView
