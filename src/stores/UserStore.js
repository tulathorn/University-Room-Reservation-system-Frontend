import { action, observable } from 'mobx'
import axios from '../Utils/axiosConfig'


class UserStore {
  @observable
  userFilter = {}

  @observable
  userData = []

  @action
  fetchData = async () => {
    this.userData = await axios.get('./users', this.userFilter).then(resp => resp.data)
  }

  @action
  checkAdmin = async () => {
    this.userData = await axios.get('./users', localStorage.getItem('UserID')).then(resp => resp.data)
    console.log(this.userData[0])
  }

  

  @action
  setFilter = (field, value) => {
      this.userFilter[field] = value
  }
  @action
  cleanFilter = () => {
    this.userFilter = {}
  }
}

export default new UserStore()
