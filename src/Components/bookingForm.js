import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'
import language from '../languages.json'
import ReservationStore from '../stores/ReservationStore'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class BookingForm extends React.Component {
  componentDidMount() {
    ReservationStore.cleanBookingConfig()
  }
  reformDatas= () => {
    ReservationStore.setBookingConfig('Date',localStorage.getItem('ScheduleDate'))
    ReservationStore.setBookingConfig('StartTime',localStorage.getItem('ScheduleFrom'))
    ReservationStore.setBookingConfig('EndTime',localStorage.getItem('ScheduleTo'))
    ReservationStore.setBookingConfig('UserID',localStorage.getItem('UserID'))
    ReservationStore.setBookingConfig('RoomID',localStorage.getItem('RoomID'))
  }

  onSubmit = e => {
    e.preventDefault()
    this.reformDatas()
    console.log(ReservationStore.bookingConfig)
    ReservationStore.bookingConfig.Purpose ? this.bookClick() : this.warned() 
  }

  warned = () =>{
    Swal.fire({
      position: 'center',
      type: 'warning',
      title: language[localStorage.getItem('language')].Swal.MissInfo,
      text: language[localStorage.getItem('language')].Swal.FillPurpose,
      focusConfirm: true,
      showConfirmButton: true,
      confirmButtonText: language[localStorage.getItem('language')].Swal.OK
    })
  }

  bookClick = () =>{
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
        window.location = "/";
      }
    })
  }

  updateClick = () =>{
    Swal.fire({
      title: language[localStorage.getItem('language')].Swal.FixUserInfo,
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Email Address">',
      focusConfirm: false,
      confirmButtonColor: '#17a2b8',
      confirmButtonText: language[localStorage.getItem('language')].Swal.Confirm,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value
        ]
      }
    })
  }
  render() {
    return (
  			<div className="jumbotron text-white" style={jumbotronStyle}>

          <form action="#" onSubmit={e => this.onSubmit(e)}>
            {language[localStorage.getItem('language')].bookingForm.Firstname}
              <input name="firstname" type="text" className="form-control" id="firstname" placeholder="Firstname"
              value={localStorage.getItem('firstname')} readonly disabled/>
            {language[localStorage.getItem('language')].bookingForm.Surname}
              <input name="surname" type="text" className="form-control" id="surname" placeholder="Surname"
              value={localStorage.getItem('lastname')} readonly disabled/>
            {language[localStorage.getItem('language')].bookingForm.Email}
              <input name="email" type="text" className="form-control" id="email" placeholder="Email Address"
              value={localStorage.getItem('email')} readonly disabled/>
            {language[localStorage.getItem('language')].bookingForm.Purpose}
              <textarea name="purpose" type="text" className="form-control" id="purpose" rows="5" placeholder={language[localStorage.getItem('language')].Additional.PurposeBody}
              value={ReservationStore.bookingConfig.Purpose} onChange={e => ReservationStore.setBookingConfig('Purpose', e.target.value)}/>

              
            <br/>
            <div className="row">
              <div className="col-md-2 col-sm-5">
                <button type="submit" value="Submit" className="btn btn-info">
                  {language[localStorage.getItem('language')].bookingForm.Book}
                </button>
              </div>
              <div className="col-md-7 col-sm-2">
              </div>
              <div className="col-md-3 col-sm-5">
                <button onClick={() => this.updateClick()} type="button" className="btn btn-outline-info">
                  {language[localStorage.getItem('language')].bookingForm.Update}
                </button>
              </div>
            </div>
          </form>

  			</div>
    )
  }
}

export default BookingForm
