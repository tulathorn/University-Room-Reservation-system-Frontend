import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import ListCard from '../Components/listCard'
import PreviewCard from '../Components/searchPreviewCard'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class AdListView extends Component {

  render() {
    return (
      <div>
        <AdNavbar />
          <div className="container">
            <PreviewCard/>
            <a href="/ad_booking" target="_blank">
              <ListCard/>
            </a>
          </div>
      </div>
    )
  }
}

export default AdListView
