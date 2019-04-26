import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'
import LanguageStore from '../stores/LanguageStore'
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
    ReservationStore.ConvertUsernameToID() //อยากให้มันทำอันนี้ให้เสร็จก่อนค่อยไปทำ addReservation
    ReservationStore.setBookingConfig('Date',localStorage.getItem('ScheduleDate'))
    ReservationStore.setBookingConfig('StartTime',localStorage.getItem('ScheduleFrom'))
    ReservationStore.setBookingConfig('EndTime',localStorage.getItem('ScheduleTo'))
    ReservationStore.setBookingConfig('RoomID',localStorage.getItem('RoomID'))
    
  }

  onSubmit = e => {
    e.preventDefault()
    this.reformDatas()
    ReservationStore.addReservation() //อยากให้อันนี้มันรอให้ฟังชั่นข้างบนทำเสร็จก่อนอะ แล้วค่อยเริ่มทำ
    this.bookClick()
    
  }

  bookClick = () =>{
      Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Booking completed',
      focusConfirm: true,
      showConfirmButton: true,
      preConfirm: () => {
        //window.location = "/ad_search_nor";
      }
    })
  }
  render() {
    return (
  			<div className="jumbotron text-white" style={jumbotronStyle}>
          <form action="#" onSubmit={e => this.onSubmit(e)}>
            <div className="row">
                {language[LanguageStore.lang].adBookingForm.ID}
                <input name="username" type="text" className="form-control" id="username" placeholder="UserName ID"
                value={ReservationStore.searchTemp.UsernameID} onChange={e => ReservationStore.setSearch('UsernameID', e.target.value)}/>
                {language[LanguageStore.lang].Additional.Title}
                <input name="title" type="text" className="form-control" id="title" placeholder="Title"
                value={ReservationStore.bookingConfig.Title} onChange={e => ReservationStore.setBookingConfig('Title', e.target.value)}/>
                {language[LanguageStore.lang].adBookingForm.Purpose}
                <textarea name="purpose" type="text" className="form-control" id="purpose" rows="5" placeholder="Identify your purpose for booking this room..."
                value={ReservationStore.bookingConfig.Purpose} onChange={e => ReservationStore.setBookingConfig('Purpose', e.target.value)}/>
            </div>
              {language[LanguageStore.lang].adBookingForm.EmailAddress}<br/>
              {language[LanguageStore.lang].adBookingForm.Phone}<br/>
              {language[LanguageStore.lang].adBookingForm.Year}<br/>
              {language[LanguageStore.lang].adBookingForm.Section}<br/>
              {language[LanguageStore.lang].adBookingForm.Program}<br/>
                   
              <button type="submit" value="Submit" className="btn btn-info">
                {language[LanguageStore.lang].adBookingForm.Book}
              </button>
            
          </form>
              
          
        </div>
    )
  }
}

export default AdBookingForm
