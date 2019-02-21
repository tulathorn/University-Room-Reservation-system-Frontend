import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'

const helpLink = {
  color: '#1F384B'
}
const cardColor = {
  backgroundColor: 'white'
}

class LoginCard extends React.Component {

  loginClick = () =>{
    Swal.fire({
      title: 'User Information',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="First Name">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Last Name">' +
        '<input id="swal-input3" class="swal2-input" placeholder="Email Address">' +
        '<input id="swal-input4" class="swal2-input" placeholder="Phone Number">',
      focusConfirm: true,
      showCancelButton: true,
      confirmButtonColor: '#17a2b8',
      confirmButton: '<a href="/login"></a>',
      confirmButtonColor: '#17a2b8',
      confirmButtonText: 'Login',
      cancelButtonColor: '#dc3545',
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
          document.getElementById('swal-input3').value,
          document.getElementById('swal-input4').value
        ]
      }
    }).then((result) => {
      if (result.value) {
        //Go to main page
      }
    })
  }

  render() {
    return (
      <div>
        <div style={cardColor} className="jumbotron">
          <div className="row">
            <div className="col-9 col-md-10 col-sm-8">
            </div>
            <div className="col-3 col-md-2 col-sm-4">
              <a href="/ad_login" class="text-secondary">Admin</a>
            </div>
          </div><br/>

          <h3 align="left" style={helpLink}>
            Please enter KMUTT username and password.<br/>Click on the Login button to continue.
          </h3>
          <br/>

          <form>
            <div className="form-group">
              <label for="exampleInputEmail1" style={helpLink}>Username</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"/>
              <small id="emailHelp" className="form-text text-muted">Enter your KMUTT student ID or username.</small>
            </div>

            <div className="form-group">
              <label for="exampleInputPassword1" style={helpLink}>Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
          </form>

          <br/>

          <div className="row">
            <div className="col-2 col-md-2" >
              {/*<a href="/" className="btn btn-outline-info">Login</a>*/}
              <button onClick={() => this.loginClick()} type="button" className="btn btn-outline-info">Login</button>
            </div>

            <div className="col-7 col-md-8">
            </div>
            <div className="col-3 col-md-2">
              <a href="/contact" class="text-info">Help</a>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default LoginCard
