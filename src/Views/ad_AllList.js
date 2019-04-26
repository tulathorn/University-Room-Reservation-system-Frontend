import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import AllListCard from '../Components/allListCard'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import RoomStore from '../stores/RoomStore'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

const Title = styled.h1`
  color: #1f384b;
`



@observer
class AdAllListView extends Component {
  componentDidMount() {
    RoomStore.fetchsomeData()
  }

  render() {
    return (
      <div>
        <AdNavbar />
        <div className="container">
          <br/>
          <center>
            <Title>{language[LanguageStore.lang].adAllList.Title}</Title>
          </center>
          <br/>

          <input name="roomname" type="text" className="form-control" id="roomname" placeholder="Room ID"
          value={RoomStore.objecta.RoomName} onChange={e => RoomStore.setRoomName('RoomName', e.target.value)}/>
          
          {RoomStore.roomDatas.map(roomv => {
            //console.log(roomv)
            return <AllListCard room={roomv} />
          })}
          {/*<AllListCard/>*/}

      </div>
    </div>
    )
  }
}

export default AdAllListView
