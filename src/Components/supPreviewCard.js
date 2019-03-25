import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import styled, { createGlobalStyle } from 'styled-components'

const Title = styled.h1`
  color: #1F384B;
`

class SupPreview extends React.Component {
  render() {
    return (
      <div className="card">
        <h5 className="card-header">
          <div className="row">
            <div className="col-6">
              Email : gg@gmail
            </div>
            <div className="col-6" align="right">
              Time : 12:22 01/01/19
            </div>
          </div>
        </h5>
        <div className="card-body">
         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    )
  }
}

export default SupPreview
