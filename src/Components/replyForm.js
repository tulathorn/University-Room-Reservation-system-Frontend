import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import styled, { createGlobalStyle } from 'styled-components'
import Swal from 'sweetalert2'

const Title = styled.h1`
  color: #1F384B;
`

class ReplyForm extends React.Component {
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
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput2">Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Place yor title here"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Detail</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Insert details, question, problem..."
            rows="5"
            placeholder="Please type your comment..."
          />
        </div>
        <center><button onClick={() => this.ReplyClick()} type="button" className="btn btn-outline-info">
          Reply
        </button></center>
      </form>
    )
  }
}

export default ReplyForm
