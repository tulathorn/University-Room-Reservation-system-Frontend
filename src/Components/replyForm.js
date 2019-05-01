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
      title: 'Missing Information!',
      text: "Please fill in Title and Detail before submit!",
      focusConfirm: true,
      showConfirmButton: true,
    })
  }

  ReplyClick = () =>{
    Swal.fire({
      position: 'center',
      type: 'question',
      title: 'Reply to ' + localStorage.getItem('contactemail') + '?',
      html: 'Subject : ' + ContactStore.replyMsg.Title + "<br> Body : " + ContactStore.replyMsg.Detail,
      showConfirmButton: true,
      showCancelButton: true,
      focusConfirm: true,
      confirmButtonText: 'Confirm'
    }).then((result) => {
      if (result.value) {
        ContactStore.replyMail()
        console.log(ContactStore.message)
        console.log(ContactStore.replyMsg)
        //ContactStore.deleteContact()
        Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Your message has been sent',
        html: "<b>Message is deleted!</b><br> Back to support page!",
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
