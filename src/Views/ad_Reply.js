import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import SupPreview from '../Components/supPreviewCard'
import ReplyForm from '../Components/replyForm'
import styled, { createGlobalStyle } from 'styled-components'

import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

const Title = styled.h1`
  color: #1F384B;
`


class AdReplyView extends Component {
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <br/><Title>{language[LanguageStore.lang].adReply.Title}</Title>
          <SupPreview/>
          <br/><Title>{language[LanguageStore.lang].adReply.Reply}</Title>
          <ReplyForm/>
        </div>
      </div>
    )
  }
}

export default AdReplyView
