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
    this.userData = await axios
      .get('./users', { UserID: localStorage.getItem('UserID') })
      .then(resp => resp.data)
    localStorage.setItem('IsAdmin', this.userData[0].IsAdmin)
    this.userData[0].IsAdmin
      ? (window.location = '/ad_all_list')
      : window.alert('This user is not an admin')
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
