import { observable, action, runInAction } from 'mobx'
import axios from '../Utils/axiosConfig'

// import language from '../language.json'

class RoomStore {
  @observable
  printText = []

  @observable
  roomDatas = []

  @observable
  searchConfig = {"PeopleCapacity" : "60"}

  @observable
  selectedRoom = 0

  @action
  fetchData = async () => {
    this.roomDatas = await axios.get('./rooms', this.searchConfig).then(resp => resp.data)
  }

  // @action
  // fetchText = async lang => {
  //   lang = 1
  //   this.printText = language[lang].List
  // }

  @action
  onFilterChange = async searchConfig => {
    this.searchConfig.PeopleCapacity = searchConfig
    await this.fetchData()
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
