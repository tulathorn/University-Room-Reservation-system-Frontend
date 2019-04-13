import { observable, action, runInAction } from 'mobx'
import axios from '../Utils/axiosConfig'


// import language from '../language.json'




class RoomStore {
  
  
  @observable
  printText = []

  @observable
  roomDatas = []

  @observable
  searchConfig = {}
  
  @observable
  selectedRoom = 0

  
  @observable
  roomInfo = {}
  

  
  @action
  fetchData = async () => {
    this.roomDatas = await axios.get('./rooms', this.searchConfig).then(resp => resp.data)
  }

  @action
  addRoom = async () => {
    this.roomDatas = await axios.post('./rooms', this.roomInfo).then(resp => resp.data)
    console.log('เพิ่มห้องสำเร็จแล้ว!')
    this.resetAddForm()
  }


  @action
  onFilterChange = async searchConfig => {
    this.searchConfig.PeopleCapacity = searchConfig
    await this.fetchData()
  }

  //@action
  //addRoom = async data => {
  //  await axios.put('./rooms', data).then(resp => resp.data)
  //}

  @action
  setValue = (field, value) => {
    this.roomInfo[field] = value
  }

  @action
  setConfig = (field, value) => {
    this.searchConfig[field] = value
    console.log([field] + ' = ' + this.searchConfig[field])
  }

  @action
  deleteData = async () => {
    await axios.delete('./rooms', this.roomInfo).then(resp => resp.data)
  }
  
  @action
  resetFilterForm = () => {
    this.searchConfig = {
      Date: '',
      Building: '',
      PeopleCapacity: '',
      fromhr: '',
      frommin: '',
      tohr: '',
      tomin: '',
      amenity: {
        teachercom: '',
        studentcom: '',
        aircon: '',
        projector: '',
        whiteboard: '',
        visualizer: ''
      }
      
    }
  }

  @action
  resetAddForm = () => {
    this.roomInfo = {
      roomid: '',
      capacity: '',
      building: '',
      floor: '',
      number: '',
      day: {
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: '',
        sunday: ''
      },
      fromhr: '',
      frommin: '',
      tohr: '',
      tomin: '',
      amenity: {
        teachercom: '',
        studentcom: '',
        aircon: '',
        projector: '',
        whiteboard: '',
        visualizer: ''
      }
    }
  }

  /////////////////////////////////////////////////////////////////////////////////
}

export default new RoomStore()
