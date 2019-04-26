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

}

export default new UserStore()
