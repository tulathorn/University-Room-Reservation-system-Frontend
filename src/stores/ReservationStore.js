import { observable, action } from 'mobx'
import axios from '../Utils/axiosConfig'


class ReservationStore {
    @observable //Use to filter reservation
    config = {}

    @observable //Find a room to search
    searchConfig = {}

    @observable
    searchTemp = {}

    @observable
    bookingConfig = {}

    @observable
    reservedDatas = []

    @observable
    tempArray = []

    ////////////////////////////////////////////////////// Get booking History / Delete Booking History
    @action
    GetReservation = async () => {
        this.reservedDatas = await axios.get('./reservations', this.config).then(resp => resp.data)
    }

    @action
    DeleteReservation = async () => {
        await axios.delete('./reservations', this.config).then(resp => resp.data)
        console.log('ลบการจองสำเร็จแล้ว!')
    }
    
    @action
    setConfig = (field, value) => {
        this.config[field] = value
    }

    

    

   

    /////////////////////////////////////////////////////// Find a room to book

    @action
    GetAvailableRoom = async () => {
        this.reservedDatas = await axios.put('./reservations/avaiable', this.searchConfig).then(resp => resp.data)
    }

    @action
    setSearchConfigRoom = (field, value) => {
        this.searchConfig.room[field] = value
    }
    @action
    setSearchConfigEquip = (field, value) => {
        this.searchConfig.equipment[field] = value
    }
    @action
    setSearchConfigTime = (field, value) => {
        this.searchConfig.reservation[field] = value
    }

    @action
    setSearch = (field, value) => {
        this.searchTemp[field] = value
    }

    ////////////////////////////////////////////////////////////// Book a room
    @action
    ConvertUsernameToID = async () => {
        this.tempArray = await axios.get('./users', this.searchTemp).then(resp => resp.data)
        
        this.tempArray.length ? this.setBookingConfig('UserID',this.tempArray[0].UserID) : this.setBookingConfig('UserID',0)
    }

    @action
    addReservation = async () => {
        this.reservedDatas = await axios.post('./reservations', this.bookingConfig).then(resp => resp.data)
        console.log('จองห้องสำเร็จแล้ว!')
        //this.cleanBookingConfig()
    }

    @action
    addRecurring = async () => {
        this.reservedDatas = await axios.post('./recurring', this.bookingConfig).then(resp => resp.data)
        console.log('จองห้องระยะยาวสำเร็จแล้ว!')
        //this.cleanBookingConfig()
    }

    @action
    setBookingConfig = (field, value) => {
        this.bookingConfig[field] = value
    }
    //////////////////////////////////////////////////////////////  Clear Search Config

    @action
    cleanConfig = () => {
        this.config = {}
    }

    @action
    cleanSearchConfig = () => {
        this.searchConfig = {"room":{},"equipment":{},"reservation":{}}
    }

    @action
    cleanSearch = () => {
        this.searchTemp = {}
    }

    @action
    cleanBookingConfig = () => {
        this.bookingConfig = {}
    }

    
}

export default new ReservationStore()
