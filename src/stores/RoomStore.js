import { observable, action } from 'mobx'
import axios from '../Utils/axiosConfig'


// import language from '../language.json'




class RoomStore {

  @observable
  printText = []

  @observable //Get Rooms from database
  roomDatas = []

  @observable //Use for most pages
  searchConfig = {}
  
  @observable //Store time that user prefer to book
  schedule = {}
  
  @observable
  selectedRoom = 0

  @observable //Use to add Room 
  roomInfo = {}


  @action
  fetchData = async () => {
    this.roomDatas = await axios.get('./rooms', this.searchConfig).then(resp => resp.data)
  }

  @action
  fetchRoomData = async () => {
    this.roomDatas = await axios.get('./rooms', this.roomInfo).then(resp => resp.data)
    console.log(this.roomDatas)
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
  deleteData = async () => {
    console.log('Going to delete')
    await axios.delete('./rooms', this.searchConfig).then(resp => resp.data)
    console.log('Deleted')
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  @action
  copyValue = (value) => {
    this.roomInfo = value
    console.log(this.roomInfo)
  }

  @action
  setValue = (field, value) => {
    this.roomInfo[field] = value
    console.log(this.roomInfo[field])
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
  }

  @action
  setConfigThenFetch = (field, value) => {
    this.searchConfig[field] = value
    this.fetchData()
  }

  @action
  setConfigEquipment = (field, value) => {
    this.searchConfig.Equipment[field] = value
  }

  @action
  deleteData = async () => {
    await axios.delete('./rooms', this.roomInfo).then(resp => resp.data)
    console.log('ลบห้องสำเร็จ!')
  }
  
  @action
  resetSchedule = () => {
    this.schedule = {
      Date: '',
      DateTo: '',
      Day: '',
      fromhr: '',
      frommin: '',
      tohr: '',
      tomin: '',
    }
  }

  @action
  resetFilterForm = () => {
    this.searchConfig = {
      //Equipment: {}
    }
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

}

export default new RoomStore()
