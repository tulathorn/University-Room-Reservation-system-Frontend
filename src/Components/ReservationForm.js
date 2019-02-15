import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const Heading = styled.h2`
  color: white;
`

const SubHeading = styled.h4`
  color: white;
`

const textColor = {
  color: 'white'
}

const jumbotronImage = require('../Pictures/bg.png')

const jumbotronStyle = {
  width: 'auto',
  height: 'auto',
  backgroundImage: `url(${jumbotronImage})`,
  backgroundSize: 'absolute'
}

class ReservationForm extends React.Component {
  setForm = name => event => {
    this.props.setField(name, event.target.value)
  }

  componentDidMount() {
    console.log('RoomData =', this.props)
  }

  search = async () => {
    await this.props.fetchRooms()

    this.props.history.push('/search')
  }

  render() {
    return (
      <div>
        <div className="jumbotron" style={jumbotronStyle}>
          <Heading> Find a Room </Heading>
          <hr className="my-4" color="white" />
          <SubHeading> Info: </SubHeading>{' '}
          <form>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>
                  Date{' '}
                </label>{' '}
                <input
                  type="date"
                  className="form-control my-1 mr-sm-2"
                  id="inlineFormCustomSelectPref"
                  onChange={this.setForm('date')}
                />{' '}
              </div>{' '}
              <div className="form-group col-md-4">
                <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>
                  Building{' '}
                </label>{' '}
                <select
                  className="custom-select my-1 mr-sm-2"
                  id="inlineFormCustomSelectPref"
                  onChange={this.setForm('Building')}
                >
                  <option selected> Building Name </option>{' '}
                  <option value="Witsawa Watthana"> Witsawa Watthana </option>{' '}
                  <option value="2"> Two </option> <option value="3"> Three </option>{' '}
                </select>{' '}
              </div>{' '}
              <div className="form-group col-md-4">
                <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>
                  Size{' '}
                </label>{' '}
                <input
                  type="text"
                  className="form-control my-1 mr-sm-2"
                  id="inlineFormCustomSelectPref"
                  onChange={this.setForm('PeopleCapacity')}
                />{' '}
              </div>{' '}
            </div>{' '}
          </form>
          <hr className="my-4" color="white" />
          <SubHeading> Time: </SubHeading>{' '}
          <form className="form-inline">
            <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>
              From{' '}
            </label>{' '}
            <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
              <option selected> Choose... </option> <option value="1"> One </option>{' '}
              <option value="2"> Two </option> <option value="3"> Three </option>{' '}
            </select>{' '}
            <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>
              :
            </label>{' '}
            <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
              <option selected> Choose... </option> <option value="1"> One </option>{' '}
              <option value="2"> Two </option> <option value="3"> Three </option>{' '}
            </select>{' '}
            <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>
              To{' '}
            </label>{' '}
            <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
              <option selected> Choose... </option> <option value="1"> One </option>{' '}
              <option value="2"> Two </option> <option value="3"> Three </option>{' '}
            </select>{' '}
            <label className="my-1 mr-2" for="inlineFormCustomSelectPref" style={textColor}>
              :
            </label>{' '}
            <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
              <option selected> Choose... </option> <option value="1"> One </option>{' '}
              <option value="2"> Two </option> <option value="3"> Three </option>{' '}
            </select>{' '}
          </form>
          <hr className="my-4" color="white" />
          <SubHeading> Filters: </SubHeading>{' '}
          <div className="form-row">
            <div className="col-sm-4">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" for="defaultCheck1" style={textColor}>
                  Teacher Computer{' '}
                </label>{' '}
                <br />
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" for="defaultCheck1" style={textColor}>
                  Student Computer{' '}
                </label>{' '}
              </div>{' '}
            </div>
            <div className="col-sm-4">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" for="defaultCheck1" style={textColor}>
                  Projector{' '}
                </label>{' '}
                <br />
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" for="defaultCheck1" style={textColor}>
                  White Board{' '}
                </label>{' '}
              </div>{' '}
            </div>
            <div className="col-sm-4">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" for="defaultCheck1" style={textColor}>
                  Air Conditioner{' '}
                </label>{' '}
                <br />
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" for="defaultCheck1" style={textColor}>
                  Visualizer{' '}
                </label>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>
        <center>
          <button type="button" className="btn btn-outline-dark" onClick={this.search}>
            Search{' '}
          </button>{' '}
        </center>{' '}
      </div>
    )
  }
}

export default withRouter(ReservationForm)
