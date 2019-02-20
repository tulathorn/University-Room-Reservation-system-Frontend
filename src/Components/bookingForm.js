import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class BookingForm extends React.Component {
  submitClick = () =>{
      Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Booking completed',
      showConfirmButton: false,
      timer: 1500
    })
  }
  updateClick = () =>{
    Swal.fire({
      title: 'User Information',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="First Name">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Last Name">' +
        '<input id="swal-input3" class="swal2-input" placeholder="Email Address">' +
        '<input id="swal-input4" class="swal2-input" placeholder="Phone Number">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
          document.getElementById('swal-input3').value,
          document.getElementById('swal-input4').value
        ]
      }
    })
  }
  render() {
    return (
      <div>
  			<div className="jumbotron text-white" style={jumbotronStyle}>
  				<form action="">
  					<div className="form-group">
  						<label for="info1">Name</label>
  						<input
  							type="text"
  							className="form-control"
  							id="info1"
  							placeholder="Firstname"
  						/>
  					</div>
  					<div className="form-group">
  						<label for="info2">Surname</label>
  						<input
  							type="text"
  							className="form-control"
  							id="info2"
  							placeholder="Lastname"
  						/>
  					</div>
  					<div className="form-group">
  						<label for="info3">Email Address</label>
  						<input
  							type="email"
  							className="form-control"
  							id="info3"
  							placeholder="Email Address"
  						/>
  					</div>
  					<div className="form-group">
  						<label for="info4">Phone Number</label>
  						<input
  							type="text"
  							className="form-control"
  							id="info4"
  							placeholder="Phone Number"
  							/>
  					</div>
  					<div className="form-group">
  						<label for="info5">Purpose</label>
  						<textarea
  							className="form-control"
  							id="info5"
  							placeholder="Identify your purpose for booking this room..."
  							rows="5"
  						/>
  					</div>

  					<div className="row">
  						<div className="col-2 col-md-2 col-sm-2">
  							<a onClick={() => this.submitClick()}className="btn btn-info">
                  Submit
                </a>
  						</div>
  						<div className="col-7 col-md-7 col-sm-6">
  						</div>
  						<div className="col-3 col-md-3 col-sm-4">
                <button onClick={() => this.updateClick()} type="button" className="btn btn-outline-info">
                  Update
                </button>
  						</div>
  					</div>


  				</form>
  			</div>
      </div>
    )
  }
}

export default BookingForm
