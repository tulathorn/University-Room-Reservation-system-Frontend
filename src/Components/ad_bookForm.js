import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class AdBookingForm extends React.Component {
  bookClick = () =>{
      Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Booking completed',
      showConfirmButton: false,
      timer: 1500
    })
  }
  render() {
    return (
  			<div className="jumbotron text-white" style={jumbotronStyle}>
          <form action="">
            <div className="form-group">
              <div className="row">
                <div className="col-6">
                <label for="info1">ID</label>
              <input
                type="text"
                className="form-control"
                id="info1"
                placeholder="Username ID"
              />
                <label for="info1">Name</label>
              <input
                type="text"
                className="form-control"
                id="info1"
                placeholder="Firstname"
              />
              <label for="info2">Surname</label>
              <input
                type="text"
                className="form-control"
                id="info2"
                placeholder="Lastname"
              />

                </div>
                <div className="col-6">
                  <label for="info3">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="info3"
                    placeholder="Email Address"
                  />
                  <label for="info4">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="info4"
                    placeholder="Phone Number"
                    />
                  <label for="info4">Section</label>
                  <input
                    type="text"
                    className="form-control"
                    id="info4"
                    placeholder="Section"
                    />
                </div>
              </div>

              <label for="info5">Purpose</label>
              <textarea
                className="form-control"
                id="info5"
                placeholder="Identify your purpose for booking this room..."
                rows="5"
              />
            </div>
            <br/>
            <button onClick={() => this.bookClick()} type="button" className="btn btn-info">
              Book
            </button>
          </form>
        </div>
    )
  }
}

export default AdBookingForm
