import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class AdSearchView extends Component {
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <div className="form-row">
            <div className="form-group col-md-11">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
            </div>
            <div className="form-group col-md-1">
              <button className="btn btn-outline-dark" type="submit">Search</button>
            </div>
          </div>
        </div>
        <center>
            <a href="/ad_room_info">Go to room info(Temporary)</a>
          </center>
      </div>
    )
  }
}

export default AdSearchView
