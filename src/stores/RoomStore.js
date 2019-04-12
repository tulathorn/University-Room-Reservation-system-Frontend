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
  addRoom = async () => {
    console.log(this.roomInfo)
      /*let topic_level = await TopicService.getAllTopicLevel(this.task.topic, this.task.level).then(
        resp => resp.data[0]
      )

      let order = null
      if (this.task.task_type === 'PRACTICE') {
        order = await TaskService.getLastOfOrderInMainTopic(topic_level.pk).then(
          resp => resp.data.order
        )
        // force to next
        order = order + 1
      } else {
        order = null
      }

      let roomInfo = await TaskService.createTask({

        roomid: this.roomInfo.roomid,
        capacity: this.roomInfo.capacity,
        building: this.roomInfo.building,
        floor: this.roomInfo.floor,
        number: this.roomInfo.number,
        day: {
          monday: this.roomInfo.day.monday,
          tuesday: this.roomInfo.day.tuesday,
          wednesday: this.roomInfo.day.wednesday,
          thursday: this.roomInfo.day.thursday,
          friday: this.roomInfo.day.friday,
          saturday: this.roomInfo.day.saturday,
          sunday: this.roomInfo.day.sunday},
        fromhr: this.roomInfo.fromhr,
        frommin: this.roomInfo.frommin,
        tohr: this.roomInfo.tohr,
        tomin: this.roomInfo.tomin,
        amenity:{
          teachercom: this.roomInfo.amenity.teachercom,
          studentcom: this.roomInfo.amenity.studentcom,
          aircon: this.roomInfo.amenity.aircon,
          projector: this.roomInfo.amenity.projector,
          whiteboard: this.roomInfo.amenity.whiteboard,
          visualizer: this.roomInfo.amenity.visualizer}
      }).then(resp => resp.data)

      await Promise.all(
        this.testcases.map(async testcase => {
          await TaskService.createTestcase({
            ...testcase,
            is_hidden: false,
            task: task.id
          })
        })
      )
*/
      console.log('เพิ่มห้องสำเร็จแล้ว!')
      this.resetAddForm()

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
        sunday: ''},
      fromhr: '',
      frommin: '',
      tohr: '',
      tomin: '',
      amenity:{
        teachercom: '',
        studentcom: '',
        aircon: '',
        projector: '',
        whiteboard: '',
        visualizer: ''}
    }
  }

  /////////////////////////////////////////////////////////////////////////////////
}

export default new RoomStore()
