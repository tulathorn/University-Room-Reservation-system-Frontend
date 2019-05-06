import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'
import language from '../languages.json'
import ContactStore from '../stores/ContactStore';

class ReplyForm extends React.Component {
  componentDidMount() {
    ContactStore.resetReplyMsg()
    ContactStore.setContact('ContactID', localStorage.getItem('ContactID'))
    
  }
  
  onSubmit = e => {
    e.preventDefault()
    ContactStore.setReply('EmailAddress',localStorage.getItem('contactemail'))
    ContactStore.replyMsg.Title && ContactStore.replyMsg.Detail ? this.ReplyClick() : this.warned() 
  }
  
  warned = () =>{
    Swal.fire({
      position: 'center',
      type: 'warning',
      title: language[localStorage.getItem('language')].Swal.MissInfo,
      text: language[localStorage.getItem('language')].Swal.FillAll,
      focusConfirm: true,
      showConfirmButton: true,
      confirmButtonText: language[localStorage.getItem('language')].Swal.OK
    })
  }

  ReplyClick = () =>{
    Swal.fire({
      position: 'center',
      type: 'question',
      title: language[localStorage.getItem('language')].Swal.Replyto + ' ' + localStorage.getItem('contactemail'),
      html: language[localStorage.getItem('language')].Swal.Subject + ' ' + ContactStore.replyMsg.Title + '<br>' + language[localStorage.getItem('language')].Swal.Body + ' ' + ContactStore.replyMsg.Detail,
      showConfirmButton: true,
      showCancelButton: true,
      focusConfirm: true,
      cancelButtonText: language[localStorage.getItem('language')].Swal.Back,
      confirmButtonText: language[localStorage.getItem('language')].Swal.Confirm
    }).then((result) => {
      if (result.value) {
        ContactStore.replyMail()
        ContactStore.deleteContact()
        Swal.fire({
        position: 'center',
        type: 'success',
        title: language[localStorage.getItem('language')].Swal.SendCom,
        html: language[localStorage.getItem('language')].Swal.DeleteMsg + '<br>' +  language[localStorage.getItem('language')].Swal.BacktoSupport,
        focusConfirm: true,
        showConfirmButton: true,
        preConfirm: () => {
          window.location = "/ad_support";
          }
        })
      }
    })
  }

  render() {
    return (
      <div>
        <form action="#" onSubmit={e => this.onSubmit(e)}>
          <label for="email">{language[localStorage.getItem('language')].replyForm.Email}</label>
          <input name="email" type="text" className="form-control" id="email" placeholder="name@example.com"
          value={localStorage.getItem('contactemail')} readonly disabled/>

          <label for="title">{language[localStorage.getItem('language')].replyForm.Title}</label>
          <input name="title" type="text" className="form-control" id="title" placeholder={language[localStorage.getItem('language')].Additional.TitleBody}
          value={ContactStore.replyMsg.Title} onChange={e => ContactStore.setReply('Title', e.target.value)}/>

          <label for="details">{language[localStorage.getItem('language')].replyForm.Details}</label>
          <textarea name="details" type="text" rows="5" className="form-control" id="details" placeholder={language[localStorage.getItem('language')].Additional.DetailBody}
          value={ContactStore.replyMsg.Detail} onChange={e => ContactStore.setReply('Detail', e.target.value)}/>

          <br/>
          <center><button  type="submit" value="Submit" className="btn btn-outline-info">
          {language[localStorage.getItem('language')].replyForm.Reply}</button></center>
        </form>
      </div>



      
    )
  }
}

export default ReplyForm
