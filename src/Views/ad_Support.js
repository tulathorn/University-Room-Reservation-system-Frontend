import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import SupCard from '../Components/supportCard'
import styled, { createGlobalStyle } from 'styled-components'

const Title = styled.h1`
  color: #1F384B;
`

class AdSupportView extends Component {
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <br/><Title>Support</Title><br/>
          <SupCard/>
        </div>
      </div>
    )
  }
}

export default AdSupportView
