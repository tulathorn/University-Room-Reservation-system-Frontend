import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'

const Title = styled.h1`
  color: red;
`
class MainView extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Title>Hello world</Title>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainView
