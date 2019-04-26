import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import ListCard from '../Components/RoomInformationCard'
import RecPreviewCard from '../Components/recPreviewCard'
import { observer } from 'mobx-react'
import RoomStore from '../stores/RoomStore'

@observer
class AdRecListView extends Component {
  componentDidMount() {
    RoomStore.fetchData()
  }
  
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <RecPreviewCard />
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

export default AdRecListView
