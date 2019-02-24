import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import AllListCard from '../Components/allListCard'
import styled from 'styled-components'

const Title = styled.h1`
  color: #1f384b;
`
const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class AdAllListView extends Component {

  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <br/>
          <center>
            <Title>Welcome to University Room Reservation System</Title>
          </center>
          <br/>
          <input class="form-control" id="myInput" type="text" placeholder="Search.."/>
          <br/>
          <a href="/ad_room_info" target="_blank">
            <AllListCard/>
          </a>
      </div>
    </div>
    )
  }
}

export default AdAllListView
