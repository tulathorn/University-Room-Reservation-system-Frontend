import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import ListCard from '../Components/RoomInformationCard'
import RecPreviewCard from '../Components/recPreviewCard'

class AdRecListView extends Component {
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <RecPreviewCard />
          <a href="/ad_booking" target="_blank">
            <ListCard />
          </a>
        </div>
      </div>
    )
  }
}

export default AdRecListView
