import React from 'react'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000'
})

export const { Provider, Consumer } = React.createContext({})

export default class RoomDataProvider extends React.Component {
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

  get ctx() {
    return {
      ...this.state,
      fetchRooms: this.fetchRooms
    }
  }

  render() {
    return <Provider value={this.ctx}>{this.props.children}</Provider>
  }
}
