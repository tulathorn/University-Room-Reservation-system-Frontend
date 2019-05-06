import { observable, action } from 'mobx'
import axios from '../Utils/axiosConfig'


class ContactStore {
    @observable
    message = {}

    @observable
    contact = []

    @observable
    replyMsg = {}

    @action
    setContact = (field, value) => {
        this.message[field] = value
    }
    @action
    setReply = (field, value) => {
        this.replyMsg[field] = value
    }

    @action
    addContact = async () => {
      this.contact = await axios.post('./contact', this.message).then(resp => resp.data)
      console.log('ส่งข้อมูลสำเร็จ')
    }

    @action
    replyMail = async () => {
      await axios.post('./contact/reply', this.replyMsg).then(resp => resp.data)
      console.log('ส่งอีเมลสำเร็จ')
    }

    @action
    deleteContact = async () => {
      console.log(this.message)
      await axios.delete('./contact', this.message).then(resp => resp.data)
      console.log('ลบข้อมูลแล้ว')
    }

    @action
    GetContact = async () => {
        this.contact = await axios.get('./contact', this.message).then(resp => resp.data)
        this.contact[0] ? localStorage.setItem('contactemail',this.contact[0].EmailAddress) : window.alert('No Contact found!') 
    }

    @action
    resetContactForm = () => {
        this.message = {}
    }

    @action
    resetReplyMsg = () => {
        this.replyMsg = {}
    }
}

export default new ContactStore()
