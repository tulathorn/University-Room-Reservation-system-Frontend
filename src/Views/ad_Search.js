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
          <div class="form-row">
            <div class="form-group col-md-11">
              <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
            </div>
            <div class="form-group col-md-1">
              <button class="btn btn-outline-dark" type="submit">Search</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdSearchView
