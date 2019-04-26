import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import SupPreview from '../Components/supPreviewCard'
import ReplyForm from '../Components/replyForm'
import styled from 'styled-components'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'
import ContactStore from '../stores/ContactStore'
import { observer } from 'mobx-react'

const Title = styled.h1`
  color: #1F384B;
`

@observer
class AdReplyView extends Component {
  componentDidMount() {
    ContactStore.resetContactForm()
    ContactStore.setContact('ContactID', localStorage.getItem('ContactID'))
    ContactStore.GetContact()
  }
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <br/>
           
          {ContactStore.contact.map(comment => {
            return <SupPreview data={comment} />
          })}
          
          <br/><Title>{language[LanguageStore.lang].adReply.Reply}</Title>
          <ReplyForm/>
        </div>
      </div>
    )
  }
}

export default AdReplyView
