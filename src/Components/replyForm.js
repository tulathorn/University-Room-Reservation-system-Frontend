import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'
import language from '../languages.json'

class ReplyForm extends React.Component {
  
  onSubmit = e => {
    e.preventDefault()
    //window.open('mailto:honhon015@hotmail.com?subject=Title&body=Hon01Body');
    this.ReplyClick()
  }
  
  ReplyClick = () =>{
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Your message has been sent',
      showConfirmButton: false,
      timer: 1500
    })
  }
  render() {
    return (
      <div>
        <form action="#" onSubmit={e => this.onSubmit(e)}>
          <label for="email">{language[localStorage.getItem('language')].replyForm.Email}</label>
          <input name="email" type="text" className="form-control" id="email" placeholder="name@example.com"
          />

          <label for="title">{language[localStorage.getItem('language')].replyForm.Title}</label>
          <input name="title" type="text" className="form-control" id="title" placeholder={language[localStorage.getItem('language')].Additional.TitleBody}
          />

          <label for="details">{language[localStorage.getItem('language')].replyForm.Details}</label>
          <textarea name="details" type="text" rows="5" className="form-control" id="details" placeholder={language[localStorage.getItem('language')].Additional.DetailBody}
          />

          <br/>
          <center><button  type="submit" value="Submit" className="btn btn-outline-info">
          {language[localStorage.getItem('language')].replyForm.Reply}</button></center>
        </form>
      </div>



      
    )
  }
}

export default ReplyForm
