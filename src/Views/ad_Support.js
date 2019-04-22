import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'

import styled, { createGlobalStyle } from 'styled-components'

import RoomStore from '../stores/RoomStore' 
import RoomInformationCard from '../Components/RoomInformationCard'

import ContactStore from '../stores/ContactStore'
import SupCard from '../Components/supportCard'

import { observer } from 'mobx-react'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

const Title = styled.h1`
  color: #1F384B;
`
@observer
class AdSupportView extends Component {
  componentDidMount() {
    ContactStore.resetContactForm()
    ContactStore.GetContact()
  }

  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <br/><Title>{language[LanguageStore.lang].adSupport.Support}</Title><br/>
          {ContactStore.contact.map(xxx => {
            return <SupCard user={xxx} />
          })}
          
          
          <SupCard/>


        </div>
      </div>
    )
  }
}

export default AdSupportView
