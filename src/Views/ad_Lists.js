import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import ListCard from '../Components/RoomInformationCard'
import PreviewCard from '../Components/searchPreviewCard'

import { observer } from 'mobx-react'
import RoomStore from '../stores/RoomStore'


@observer
class AdListView extends Component {
  componentDidMount() {
    RoomStore.fetchData()
  }

  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <PreviewCard />
          <a href="/ad_booking" target="_blank">
            {RoomStore.roomDatas.map(room => {
              console.log(room)
              return <ListCard room={room} />
            })}
          </a>
        </div>
      </div>
    )
  }
}

export default AdListView
