import { observable, action, runInAction } from 'mobx'
import axios from '../Utils/axiosConfig'


// import language from '../language.json'




class RoomStore {

  @observable
  printText = []

  @observable //Get Rooms from database
  roomDatas = []

  @observable //Use to search for room
  searchConfig = {}
  
  @observable //Store time that user prefer to book
  schedule = {}
  
  @observable
  selectedRoom = 0

  @observable //Use to add Room 
  roomInfo = {}
  
  
  @observable //Use in contact page
  contactMSG = {}
  
  

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
  SubmitContact = async () => {
    ///post to contact
  }
  

  @action
  addRoom = async () => {
    this.roomDatas = await axios.post('./rooms', this.roomInfo).then(resp => resp.data)
    console.log('เพิ่มห้องสำเร็จแล้ว!')
    this.resetAddForm()
  }


  

  @action
  deleteData = async data => {
    await axios.delete('./rooms', data).then(resp => resp.data)
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////

 

  


  @action
  setContactMSG = (field, value) => {
    this.contactMSG[field] = value
    console.log([field] + ' = ' + this.contactMSG[field])
  }

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
  }

  @action
  setConfigEquipment = (field, value) => {
    this.searchConfig.Equipment[field] = value
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
  resetContactMSG = () => {
    this.contactMSG = {}
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

  /////////////////////////////////////////////////////////////////////////////////
}

export default new RoomStore()
