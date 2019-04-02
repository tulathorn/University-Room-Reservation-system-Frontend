import React, { Component } from 'react'
import AdNavbar from '../Components/ad_Navbar'
import AllListCard from '../Components/allListCard'
import ListCard from '../Components/RoomInformationCard'
import styled from 'styled-components'

import { observer } from 'mobx-react'
import RoomStore from '../stores/RoomStore'

import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

const Title = styled.h1`
  color: #1f384b;
`

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

@observer
class AdAllListView extends Component {
  componentDidMount() {
    RoomStore.fetchData()
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
          <input class="form-control" id="myInput" type="text" placeholder="Search.."/>
          <br/>
          {RoomStore.roomDatas.map(room => {
            console.log(room)
            return <ListCard room={room} />
          })}
          {/*<AllListCard/>*/}

      </div>
    </div>
    )
  }
}

export default AdAllListView
