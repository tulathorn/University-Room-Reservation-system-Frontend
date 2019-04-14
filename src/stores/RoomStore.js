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

  


///////////////////////////////////

  @observable
  objecta = {}

  @action
  setRoomName = (field, value) => {
    this.objecta[field] = value
    console.log([field] + ' = ' + this.objecta[field])
    this.fetchsomeData()
  }
  
  @action
  fetchsomeData = async () => {
    this.roomDatas = await axios.get('./rooms', this.objecta).then(resp => resp.data)
  }
////////////////////////////////////

  // get
  // post
  // put
  // delete

  @action
  fetchData = async () => {
    this.roomDatas = await axios.get('./rooms', this.searchConfig).then(resp => resp.data)
  }

  @action
  GetRoomInfo = async () => {
    this.roomInfo = await axios.get('./rooms', this.searchConfig).then(resp => resp.data)
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
  deleteData = async data => {
    await axios.delete('./rooms', data).then(resp => resp.data)
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////

 

  @observable
  schedule = {}




  @action
  setValue = (field, value) => {
    this.roomInfo[field] = value
  }
  @action
  setEquipment = (field, value) => {
    this.roomInfo.Equipment[field] = value
  }

  @action
  setSchedule = (field, value) => {
    this.schedule[field] = value
    console.log([field] + ' = ' + this.schedule[field])
  }

  @action
  loadSchedule = (value) => {
    this.schedule = value
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
  resetSchedule = () => {
    this.schedule = {
      Date: '',
      fromhr: '',
      frommin: '',
      tohr: '',
      tomin: '',
    }
  }

  @action
  resetFilterForm = () => {
    this.searchConfig = {}
  }

  @action
  resetAddForm = () => {
    this.roomInfo = {
      RoomName: '',
      Picture: '',
      PeopleCapacity: '',
      Building: '',
      Floor: '',
      RoomNumber: '',
      ClosingDay: '',
      OpenTime: '',
      CloseTime: '',
      Equipment: {
        HasTeacherComputers: false,
        HasStudentComputers: false,
        HasProjector: false,
        HasAirConditioner: false,
        HasWhiteboard: false,
        HasVisualizer: false
      }
    }
  }

  /////////////////////////////////////////////////////////////////////////////////
}

export default new RoomStore()
