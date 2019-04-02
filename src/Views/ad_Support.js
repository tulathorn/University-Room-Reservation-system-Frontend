import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import SupCard from '../Components/supportCard'
import styled, { createGlobalStyle } from 'styled-components'

import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

const Title = styled.h1`
  color: #1F384B;
`

class AdSupportView extends Component {
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <br/><Title>{language[LanguageStore.lang].adSupport.Support}</Title><br/>
          <SupCard/>
        </div>
      </div>
    )
  }
}

export default AdSupportView
