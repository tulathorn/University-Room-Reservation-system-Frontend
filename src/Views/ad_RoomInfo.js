import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import RoomStore from '../stores/RoomStore'
import { observer } from 'mobx-react'
import AdRoomInfoCard from '../Components/adRoomInfoCard';

@observer
class AdRoomInfoView extends Component {
  componentDidMount() {
    RoomStore.resetFilterForm()
    RoomStore.setConfig('RoomID', localStorage.getItem('RoomID'))
    RoomStore.fetchData()
  }

  
  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container"><br/>
          {RoomStore.roomDatas.map(roomv => { return <AdRoomInfoCard room={roomv} />})}
        </div>
      </div>
    )
  }
}

export default AdRoomInfoView
