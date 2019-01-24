import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import styled, { createGlobalStyle } from 'styled-components'

const Title = styled.h1`
  color: #1F384B;
`

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class AdSupportView extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <br/><center><Title>Support</Title></center><br/>
        </div>
      </div>
    )
  }
}

export default AdSupportView
