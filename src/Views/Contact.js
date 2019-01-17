import React, { Component } from 'react'

class ContactView extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <div className="card">
              <div className="card-body">
                <button type="submit" className="btn btn-primary">
                  Back
                </button>
                <div className="row">
                  <div className="col-12" style={{ textAlign: 'center' }}>
                    <p>Logo</p>
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
                          placeholder="place yor title here"
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlTextarea1">Title</label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="5"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactView
