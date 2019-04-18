import { observable, action, runInAction } from 'mobx'
import axios from '../Utils/axiosConfig'


class ContactStore {
    @observable
    message = {}

    @observable
    contact = []

    @action
    setContact = (field, value) => {
        this.message[field] = value
    }

    @action
    addContact = async () => {
      this.contact = await axios.post('./contact', this.message).then(resp => resp.data)
      console.log(this.contact)
      console.log('yes!')
      this.resetContactForm()
    }

    @action
    resetContactForm = () => {
        this.message = {}
    }
}

export default new ContactStore()
