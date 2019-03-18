import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import SupPreview from '../Components/supPreviewCard'
import ReplyForm from '../Components/replyForm'
import styled, { createGlobalStyle } from 'styled-components'

const Title = styled.h1`
  color: #1F384B;
`


class AdReplyView extends Component {
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <br/><Title>Title</Title>
          <SupPreview/>
          <br/><Title>Reply</Title>
          <ReplyForm/>
        </div>
      </div>
    )
  }
}

export default AdReplyView
