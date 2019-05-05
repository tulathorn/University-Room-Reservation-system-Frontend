import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import AllListCard from '../Components/allListCard'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import RoomStore from '../stores/RoomStore'
import language from '../languages.json'

import AuthenticationGate from '../Components/AuthenticationGateAdmin'

const Title = styled.h1`
  color: #1f384b;
`



@observer
class AdAllListView extends Component {
  componentWillMount() {
    RoomStore.resetFilterForm()
    RoomStore.fetchData()
  }



  render() {
    return (
      <AuthenticationGate>
      <div>
        <AdNavbar />
        <div className="container">
          <br/>
          <center>
            <Title>{language[localStorage.getItem('language')].adAllList.Title}</Title>
          </center>
          <br/>

          <input name="roomname" type="text" className="form-control" id="roomname" placeholder={language[localStorage.getItem('language')].addForm.RoomID}
          value={RoomStore.searchConfig.RoomName} onChange={e => RoomStore.setConfigThenFetch('RoomName', e.target.value)}/>
          <br/>
          {RoomStore.roomDatas.map(roomv => {
            return <AllListCard room={roomv} />
          })}

      </div>
    </div>
    </AuthenticationGate>
    )
  }
}

export default AdAllListView
