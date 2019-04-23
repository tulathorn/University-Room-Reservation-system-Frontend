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
        //this.config = {'UserInfo' : {'UsernameID' : localStorage.getItem('username')}}
        //อยากให้มัน หาด้วย username ที่เราได้มาจากตอนที่ user login อะ แต่ไม่รู้ทำไมมันไม่ยอม
    }
    
}

export default new ReservationStore()
