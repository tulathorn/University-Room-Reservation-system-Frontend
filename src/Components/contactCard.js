import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'

const helpLink = {
  color: '#1F384B'
}
const cardColor = {
  backgroundColor: 'white'
}

class ContactCard extends React.Component {
  sentClick = () =>{
      Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Your messege has been sent',
      showConfirmButton: false,
      timer: 1500
    })
  }
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <a href="/Login" className="btn btn-outline-info">Back</a>
            <div className="row">
              <div className="col-12" style={{ textAlign: 'center' }}>
                <img src={require("../Pictures/logo.png")} width="150" height="150" alt=""/>
                <h5 className="card-tile">Contact us</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-8 offset-2">
                <form action="">
                  <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
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
                  <center>
                    <button onClick={() => this.sentClick()} type="button" className="btn btn-outline-info">
                      Submit
                    </button>
                  </center>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactCard
