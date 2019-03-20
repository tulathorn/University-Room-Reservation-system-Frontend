import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundColor: '#203C50'
}

class BookingForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      surname: '',
      email: '',
      phone: '',
      purpose: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.firstname + ' ' + this.state.surname + 'Mail ' + this.state.email + 'Phone ' + this.state.phone + 'Purpose-' + this.state.purpose);
    event.preventDefault();
  }

  bookClick = () =>{
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
      confirmButtonColor: '#17a2b8',
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
  			<div className="jumbotron text-white" style={jumbotronStyle}>

          <form onSubmit={this.handleSubmit}>
            Name
              <input name="firstname" type="text" className="form-control" id="firstname" placeholder="Firstname"
              value={this.state.firstname} onChange={this.handleChange}/>
            Surname
              <input name="surname" type="text" className="form-control" id="surname" placeholder="Surname"
              value={this.state.surname} onChange={this.handleChange}/>
             Email Address
              <input name="email" type="text" className="form-control" id="email" placeholder="Email Address"
              value={this.state.email} onChange={this.handleChange}/>
            Phone Number
              <input name="phone" type="text" className="form-control" id="phone" placeholder="Phone Number"
              value={this.state.phone} onChange={this.handleChange}/>
            Purpose
              <textarea name="purpose" type="text" className="form-control" id="purpose" rows="5" placeholder="Identify your purpose for booking this room..."
              value={this.state.purpose} onChange={this.handleChange}/>
            <br/>
            <div className="row">
              <div className="col-md-2 col-sm-5">
                <button onClick={() => this.bookClick()} type="submit" value="Submit" className="btn btn-info">
                  Book
                </button>
              </div>
              <div className="col-md-7 col-sm-2">
              </div>
              <div className="col-md-3 col-sm-5">
                <button onClick={() => this.updateClick()} type="button" className="btn btn-outline-info">
                  Update
                </button>
              </div>
            </div>
          </form>

  			</div>
    )
  }
}

export default BookingForm
