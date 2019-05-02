import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'
import language from '../languages.json'
import ReservationStore from '../stores/ReservationStore';

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class AdBookingForm extends React.Component {
  componentDidMount() {
    ReservationStore.cleanBookingConfig()
  }
  reformDatas= () => {
    ReservationStore.searchTemp.UsernameID ? ReservationStore.ConvertUsernameToID() : this.warned()
    ReservationStore.setBookingConfig('Date',localStorage.getItem('ScheduleDate'))
    ReservationStore.setBookingConfig('StartTime',localStorage.getItem('ScheduleFrom'))
    ReservationStore.setBookingConfig('EndTime',localStorage.getItem('ScheduleTo'))
    ReservationStore.setBookingConfig('RoomID',localStorage.getItem('RoomID'))
    
  }

  onSubmit = e => {
    e.preventDefault()
    this.reformDatas()
    ReservationStore.searchTemp.UsernameID && ReservationStore.bookingConfig.Purpose ? this.bookClick() : this.warned() 
  }

  warned = () =>{
    Swal.fire({
      position: 'center',
      type: 'warning',
      title: language[localStorage.getItem('language')].Swal.MissInfo,
      text: language[localStorage.getItem('language')].Swal.FillPurposeID,
      focusConfirm: true,
      showConfirmButton: true,
      confirmButtonText: language[localStorage.getItem('language')].Swal.OK
    })
  }

  bookClick = () =>{
    Swal.fire({
      title: language[localStorage.getItem('language')].Swal.Yousure,
      text: language[localStorage.getItem('language')].Swal.BookFor + ' ' + ReservationStore.searchTemp.UsernameID,
      type: 'question',
      showCancelButton: true,
      focusConfirm: true,
      confirmButtonColor: '#17a2b8',
      cancelButtonColor: '#dc3545',
      cancelButtonText: language[localStorage.getItem('language')].Swal.Back,
      confirmButtonText: language[localStorage.getItem('language')].Swal.Confirm
    }).then((result) => {
      if(result.value){
        if (ReservationStore.bookingConfig.UserID) {
          console.log(ReservationStore.bookingConfig)
          ReservationStore.addReservation()
          Swal.fire({
          position: 'center',
          type: 'success',
          title: language[localStorage.getItem('language')].Swal.BookCom,
          text: language[localStorage.getItem('language')].Swal.BacktoSearch,
          focusConfirm: true,
          showConfirmButton: true,
          confirmButtonText: language[localStorage.getItem('language')].Swal.OK,
          preConfirm: () => {
            window.location = "/ad_search_nor";
            }
          })
        }
        else{
          Swal.fire({
            position: 'center',
            type: 'error',
            title: language[localStorage.getItem('language')].Swal.InvalidUser,
            text: language[localStorage.getItem('language')].Swal.NoUser + ' ' + ReservationStore.searchTemp.UsernameID + ' ' + language[localStorage.getItem('language')].Swal.NoUser2,
            focusConfirm: true,
            showConfirmButton: true,
            confirmButtonText: language[localStorage.getItem('language')].Swal.OK
            })
        }
      }
      
    })
  }
  
  render() {
    return (
  			<div className="jumbotron text-white" style={jumbotronStyle}>
          <form action="#" onSubmit={e => this.onSubmit(e)}>
            <div className="row">
                {language[localStorage.getItem('language')].adBookingForm.ID}
                <input name="username" type="text" className="form-control" id="username" placeholder={language[localStorage.getItem('language')].adBookingForm.ID}
                value={ReservationStore.searchTemp.UsernameID} onChange={e => ReservationStore.setSearch('UsernameID', e.target.value)}/>
                {language[localStorage.getItem('language')].adBookingForm.Purpose}
                <textarea name="purpose" type="text" className="form-control" id="purpose" rows="5" placeholder={language[localStorage.getItem('language')].Additional.PurposeBody}
                value={ReservationStore.bookingConfig.Purpose} onChange={e => ReservationStore.setBookingConfig('Purpose', e.target.value)}/>
            </div>
                   
              <button type="submit" value="Submit" className="btn btn-info">
                {language[localStorage.getItem('language')].adBookingForm.Book}
              </button>
            
          </form>
              
          
        </div>
    )
  }
}

export default AdBookingForm
