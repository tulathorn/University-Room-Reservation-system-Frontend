import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import EditForm from '../Components/editForm'
import RoomStore from '../stores/RoomStore'
import { observer } from 'mobx-react'
import language from '../languages.json'
import styled from 'styled-components'

const bgImage = require('../Pictures/bg.png');
const bgStyle = {
  width: 'auto',
  height: '100%',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'absolute'
}
const Heading = styled.h2`
  color: white;
`

@observer
class AdEditRoomView extends Component {
  componentDidMount() {
    RoomStore.resetFilterForm()
    RoomStore.setConfig('RoomID',localStorage.getItem('RoomID'))
    RoomStore.fetchData()
  }
  render() {
    return (
      <div style={bgStyle}>
        <AdNavbar />
        <div className="container">
          <br/>
          <div className="row">
            <div className="col-md-1 col-sm-0">
            </div>
            <div className="col-md-10 col-sm-12">
            <Heading>{language[localStorage.getItem('language')].Additional.EditRoom}</Heading>
              {RoomStore.roomDatas.map(roomv => {
                return <EditForm room={roomv} />
              })}
            </div>
            <div className="col-md-1 col-sm-0">
            </div>
          </div>
          <br/>
        </div>
      </div>
    )
  }
}

export default AdEditRoomView
