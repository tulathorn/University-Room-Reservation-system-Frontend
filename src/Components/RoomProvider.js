import React, { Component } from 'react'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000'
})

export default class RoomProvider extends Component {
  state = {
    rooms: []
  }

  componentDidMount() {
    this.fetchRooms()
  }

  fetchRooms = async () => {
    const { data: rooms } = await api.get('rooms')
    console.log('Room Data =>', rooms)

    this.setState({ rooms })
  }

  render() {
    const { rooms } = this.state

    return <div>{this.props.children(rooms)}</div>
  }
}
