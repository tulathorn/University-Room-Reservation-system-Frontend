import React, { Component } from 'react'
import Navbar from '../Components/Navbar'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class ListView extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <form class="form-inline">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ListView
