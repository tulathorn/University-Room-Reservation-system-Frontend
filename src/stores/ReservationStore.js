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

    @action
    setConfig = () => {
        this.config = {'UserID' : localStorage.getItem('UserID')}
    }

    @action
    cleanConfig = () => {
        this.config = {}
    }

    @action
    setConfigRoom = () => {
        this.config = {'RoomID' : localStorage.getItem('RoomID')}
    }
    
}

export default new ReservationStore()
