import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import styled from 'styled-components'
import ContactStore from '../stores/ContactStore'
import SupCard from '../Components/supportCard'
import { observer } from 'mobx-react'
import language from '../languages.json'
import AuthenticationGate from '../Components/AuthenticationGateAdmin'

const Title = styled.h1`
  color: #1F384B;
`
@observer
class AdSupportView extends Component {
  componentWillMount() {
    ContactStore.resetContactForm()
    ContactStore.GetContact()
  }

  render() {
    return (
      
      <AuthenticationGate>
      <div>
        <AdNavbar />
        <div className="container">
          <br/><Title>{language[localStorage.getItem('language')].adSupport.Support}</Title><br/>
          
          {ContactStore.contact.map(comment => {
            return <SupCard data={comment} />
          })}


        </div>
      </div>
      </AuthenticationGate>
    )
  }
}

export default AdSupportView
