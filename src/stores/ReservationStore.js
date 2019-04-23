import { observable, action } from 'mobx'
import axios from '../Utils/axiosConfig'


class ReservationStore {
    @observable
    config = {}

    @observable
    reservedDatas = []

    @action
    GetReservation = async () => {
        this.reservedDatas = await axios.get('./reservations', this.config).then(resp => resp.data)
    }

    // @observable
    // message = {}

    // @observable
    // contact = []

    // @action
    // setContact = (field, value) => {
    //     this.message[field] = value
    // }

    // @action
    // addContact = async () => {
    //   this.contact = await axios.post('./contact', this.message).then(resp => resp.data)
    //   console.log(this.contact)
    //   console.log('yes!')
    //   this.resetContactForm()
    // }

    // @action
    // GetContact = async () => {
    //     this.contact = await axios.get('./contact', this.message).then(resp => resp.data)
    // }

    // @action
    // resetContactForm = () => {
    //     this.message = {}
    // }
}

export default new ReservationStore()
