import { observable, action, runInAction } from 'mobx'
import axios from '../Utils/axiosConfig'


// import language from '../language.json'




class RoomStore {

  @observable
  verify= "{headers : {Authorization : \'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjU4MDcwNTAzNDM4IiwiaWF0IjoxNTU1MDUzMTEwfQ.vFrdCwfSSQQ3UXpPruawuUOze0FCu_lbOHnFP2KcQqY\'}}"

  @observable
  printText = []

  @observable
  roomDatas = []

  @observable
  searchConfig = {}

  @observable
  selectedRoom = 0

  @observable // Temporary
  fakeToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjU4MDcwNTAzNDM4IiwiaWF0IjoxNTU1MDUzMTEwfQ.vFrdCwfSSQQ3UXpPruawuUOze0FCu_lbOHnFP2KcQqY"

  @observable
  roomInfo = {}



  @action
  fetchData = async () => {
    this.roomDatas = await axios.get('./rooms', this.searchConfig).then(resp => resp.data)
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
  roomInfo = {"roomid" : "CPExxxx",
            }




  @action
  setValue = (field, value) => {
    this.roomInfo[field] = value
    //console.log(this.roomInfo.roomid)
  }
  @action
  deleteData = async () => {
    await axios.delete('./rooms', this.roomInfo).then(resp => resp.data)
  }
  @action
  addRoom = async () => {
    console.log(this.roomInfo)
    this.roomDatas = await axios.post('./rooms', this.roomInfo).then(resp => resp.data)
    console.log('เพิ่มห้องสำเร็จแล้ว!')
    //this.resetAddForm()
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
