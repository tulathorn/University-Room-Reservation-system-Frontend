import { action, observable } from 'mobx'
import axios from '../Utils/axiosConfig'

class UserStore {
  @observable
  userData = []

  @action
  fetchDate = async () => {
    this.userData = await axios.get('./users').then(resp => resp.data)
  }
}

export default new UserStore()
