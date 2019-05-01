import { observable, action } from 'mobx'
import axios from '../Utils/axiosConfig'


class ContactStore {
    @observable
    message = {}

    @observable
    contact = []

    @observable
    replyMsg = {
        "EmailAddress" : "honhon015@hotmail.com",
        "Title" : "Testing XX",
        "Detail" : "Detail XXX"}

    @action
    setContact = (field, value) => {
        this.message[field] = value
    }

    @action
    addContact = async () => {
      this.contact = await axios.post('./contact', this.message).then(resp => resp.data)
      console.log('ส่งข้อมูลสำเร็จ')
    }

    @action
    replyMail = async () => {
      this.contact = await axios.post('./contact/reply', this.replyMsg).then(resp => resp.data)
      console.log('ส่งข้อมูลสำเร็จ')
    }

    @action
    GetContact = async () => {
        this.contact = await axios.get('./contact', this.message).then(resp => resp.data)
    }

    @action
    resetContactForm = () => {
        this.message = {}
    }
}

export default new ContactStore()
