import React from 'react'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000'
})

export const { Provider, Consumer } = React.createContext({})

export default class RoomDataProvider extends React.Component {
  state = {
    rooms: [],
    fields: {}
  }

  setField = (field, value) => {
    this.setState({ fields: { ...this.state.fields, [field]: value } })
  }

  fetchRooms = async () => {
    const options = { params: this.state.fields }
    const { data: rooms } = await api.get('rooms', options)

    console.log('Room Data =>', rooms)

    this.setState({ rooms })
  }

  get ctx() {
    return {
      ...this.state,
      fetchRooms: this.fetchRooms,
      setField: this.setField
    }
  }

  render() {
    console.log('-> State Update', this.ctx)

    window.ctx = this.ctx

    return <Provider value={this.ctx}>{this.props.children}</Provider>
  }
}
