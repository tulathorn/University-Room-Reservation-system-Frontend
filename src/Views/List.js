import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import ListCard from '../Components/listCard'
import PreviewCard from '../Components/searchPreviewCard'


class ListView extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <PreviewCard/>
          <a href="/booking" target="_blank">
            <ListCard/>
          </a>
        </div>
      </div>
    )
  }
}

export default ListView
