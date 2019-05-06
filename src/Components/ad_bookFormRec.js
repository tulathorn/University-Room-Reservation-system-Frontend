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

class AdBookingFormRec extends React.Component {
  componentDidMount() {
    ReservationStore.cleanSection()
    ReservationStore.cleanBookingConfig()
  }

  secComplete = (value) => {
    if(value){
      ReservationStore.GetsectionID()
      this.bookClick()
    }
    else{
      this.bookClick()
    }
  }

  checkSec = () => {

    ReservationStore.sections.Year || ReservationStore.sections.Sections || ReservationStore.sections.Program ? 
        ReservationStore.sections.Year && ReservationStore.sections.Sections && ReservationStore.sections.Program ? 
            ((ReservationStore.sections.Sections == 'A' || ReservationStore.sections.Sections == 'B') && ReservationStore.sections.Program == 0) || ((ReservationStore.sections.Sections == 'C' || ReservationStore.sections.Sections == 'D') && ReservationStore.sections.Program == 1) ? 
                this.secComplete(1)
            : this.warnedSec()  
        : this.warnedSecLack() 
    : this.secComplete(0)
  }

   reformDatas= () => {

    ReservationStore.searchTemp.UsernameID ? ReservationStore.ConvertUsernameToID() : this.warned()
    ReservationStore.setBookingConfig('StartDate',localStorage.getItem('ScheduleDate'))
    ReservationStore.setBookingConfig('EndDate',localStorage.getItem('ScheduleDateTo'))
    ReservationStore.setBookingConfig('Day',localStorage.getItem('ScheduleDay'))
    ReservationStore.setBookingConfig('StartTime',localStorage.getItem('ScheduleFrom'))
    ReservationStore.setBookingConfig('EndTime',localStorage.getItem('ScheduleTo'))
    ReservationStore.setBookingConfig('RoomID',localStorage.getItem('RoomID'))
   }

  onSubmit = e => {
    e.preventDefault()
    this.reformDatas()
    ReservationStore.searchTemp.UsernameID && ReservationStore.bookingConfig.Purpose ? this.checkSec() : this.warned()
  }

  warnedSecLack = () =>{
    Swal.fire({
      position: 'center',
      type: 'warning',
      title: language[localStorage.getItem('language')].Swal.InvalidInfo,
      text: language[localStorage.getItem('language')].Swal.InvalidSecMiss,
      focusConfirm: true,
      showConfirmButton: true,
      confirmButtonText: language[localStorage.getItem('language')].Swal.OK
    })
  }

  warnedSec = () =>{
    Swal.fire({
      position: 'center',
      type: 'error',
      title: language[localStorage.getItem('language')].Swal.InvalidInfo,
      text: language[localStorage.getItem('language')].Swal.InvalidSec,
      focusConfirm: true,
      showConfirmButton: true,
      confirmButtonText: language[localStorage.getItem('language')].Swal.OK
    })
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
            ReservationStore.addRecurring()
            Swal.fire({
            position: 'center',
            type: 'success',
            title: language[localStorage.getItem('language')].Swal.BookCom,
            text: language[localStorage.getItem('language')].Swal.BacktoSearch,
            focusConfirm: true,
            showConfirmButton: true,
            confirmButtonText: language[localStorage.getItem('language')].Swal.OK,
            preConfirm: () => {
              window.location = "/ad_search_rec";
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
                {language[localStorage.getItem('language')].Additional.Term}
                <select name="term" type="text" className="custom-select" id="term"
                  value={ReservationStore.bookingConfig.Term} onChange={e => ReservationStore.setBookingConfig('Term', e.target.value)}>
                  <option value="" disabled selected>{language[localStorage.getItem('language')].Additional.Choose}</option>
                  <option value="1/2018">1/2018</option>
                  <option value="2/2018">2/2018</option>
                  <option value="1/2019">1/2019</option>
                  <option value="2/2019">2/2019</option>
                </select>
              </div>
                <hr className="my-4" color="white" />
              <div className="row">
                {language[localStorage.getItem('language')].adBookingForm.Year}
                <select name="year" type="number" className="custom-select" id="year"
                  value={ReservationStore.sections.Year} onChange={e => ReservationStore.setSection('Year', e.target.value)}>
                  <option value="" selected>{language[localStorage.getItem('language')].Additional.Choose}</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                {language[localStorage.getItem('language')].adBookingForm.Section}
                <select name="section" type="text" className="custom-select" id="section"
                  value={ReservationStore.sections.Sections} onChange={e => ReservationStore.setSection('Sections', e.target.value)}>
                  <option value="" selected>{language[localStorage.getItem('language')].Additional.Choose}</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
                {language[localStorage.getItem('language')].adBookingForm.Program}
                <select name="program" type="number" className="custom-select" id="program"
                  value={ReservationStore.sections.Program} onChange={e => ReservationStore.setSection('Program', e.target.value)}>
                  <option value="" selected>{language[localStorage.getItem('language')].Additional.Choose}</option>
                  <option value="0">{language[localStorage.getItem('language')].adBookingForm.ProgramRegular}</option>
                  <option value="1">{language[localStorage.getItem('language')].adBookingForm.ProgramInter}</option>
                </select>
              </div>
                   <br/>
              <button type="submit" value="Submit" className="btn btn-info">
                {language[localStorage.getItem('language')].adBookingForm.Book}
              </button>
            
          </form>
              
          
        </div>
    )
  }
}

export default AdBookingFormRec
