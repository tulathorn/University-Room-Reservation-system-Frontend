import { action, observable } from 'mobx'
import axios from '../Utils/axiosConfig'

class RoomStore {
  @observable
  roomDatas = []

  @observable
  seachConfig = {}

  @action
  fetchData = async () => {
    this.roomDatas = await axios.get('./rooms').then(resp => resp.data)
  }
}

export default new RoomStore()
