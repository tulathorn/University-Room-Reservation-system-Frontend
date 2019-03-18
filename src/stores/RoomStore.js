import { action, observable } from 'mobx'
import axios from '../Utils/axiosConfig'

class RoomStore {
  @observable
  roomDatas = []

  @observable
  seachConfig = {}

  @observable
  selectedRoom = 0

  @action
  fetchData = async () => {
    this.roomDatas = await axios.get('./rooms').then(resp => resp.data)
  }

  @action
  addRoom = async data => {
    await axios.put('./rooms', data).then(resp => resp.data)
  }

  @action
  deleteData = async data => {
    await axios.delete('./rooms', data).then(resp => resp.data)
  }
}

export default new RoomStore()
