import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'

const helpLink = {
  color: '#1F384B'
}
const cardColor = {
  backgroundColor: 'white'
}

class AdLoginCard extends React.Component {

  render() {
    return (
        <div style={cardColor} className="jumbotron">
          <div className="row">
            <div className="col-10 col-md-11">
            </div>
            <div className="col-2 col-md-1">
              <a href="/login" class="text-secondary">User</a>
            </div>
          </div>
          <h3 align="left" style={helpLink}>
            Administrator Login.
          </h3>
          <br/>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1" style={helpLink}>Username</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"/>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1" style={helpLink}>Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
          </form>
          <br/>
          <a href="/ad_all_list" className="btn btn-outline-info">Login</a>
        </div>
    )
  }
}

export default AdLoginCard
