import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import AllListCard from '../Components/allListCard'

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
