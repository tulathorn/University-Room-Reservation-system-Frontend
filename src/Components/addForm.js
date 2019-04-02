import React from 'react'
import '../Styles/bootstrap/bootstrap.min.css'
import Swal from 'sweetalert2'
import LanguageStore from '../stores/LanguageStore'
import language from '../languages.json'

class AddForm extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      roomid: '',
      capacity: '',
      building: '',
      floor: '',
      number: '',
      day: {
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: '',
        sunday: ''},
      fromhr: '',
      frommin: '',
      tohr: '',
      tomin: '',
      amenity:{
        teachercom: '',
        studentcom: '',
        aircon: '',
        projector: '',
        whiteboard: '',
        visualizer: ''}
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('RoomID : ' + this.state.roomid + '\nCapacity : ' + this.state.capacity + '\nBuilding : ' + this.state.building +
    '\nFloor : ' + this.state.floor + '\nNumber : ' + this.state.number + '\nOperate Day : ' + this.state.day.monday + this.state.day.tuesday
    + this.state.day.wednesday + this.state.day.thursday + this.state.day.friday + this.state.day.saturday + this.state.day.sunday +
    '\nTime : ' + this.state.fromhr + '.' + this.state.frommin + ' - ' + this.state.tohr + '.' + this.state.tomin + 
    '\nAmenity : ' + this.state.amenity.teachercom + this.state.amenity.studentcom + this.state.amenity.aircon + 
    this.state.amenity.projector + this.state.amenity.whiteboard + this.state.amenity.visualizer);
    
    event.preventDefault();
  }





	addClick = () =>{
      Swal.fire({
      position: 'center',
      type: 'success',
      title: 'This room has been added',
      showConfirmButton: false,
      timer: 1500
    })
  }
  render() {
    return (
      <div className="card">
        <div className="card-body">

        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6 col-sm-12">
            {language[LanguageStore.lang].addForm.RoomID}
              <input name="roomid" type="text" className="form-control" id="roomid" placeholder="Room ID"
              value={this.state.roomid} onChange={this.handleChange}/>
              {/*value={BookingStore.SearchConfig.firstname} */}
            {language[LanguageStore.lang].addForm.RoomPhoto}
              <input name="photo" type="file" className="form-control-file" id="photo"
              value={this.state.photo} onChange={this.handleChange}/>
            {language[LanguageStore.lang].addForm.PeopleCapacity}
              <select name="capacity" type="number" className="custom-select" id="capacity"
              value={this.state.capacity} onChange={this.handleChange}>
              <option>Choose...</option>
              <option value="1">10</option>
              <option value="2">20</option>
              <option value="3">30</option>
              <option value="4">40</option>
              <option value="5">50</option>
              <option value="6">60</option>
              <option value="7">70</option>
              <option value="8">80</option>
              <option value="9">90</option>
              <option value="10">100</option>
              <option value="11">120</option>
              <option value="12">150</option>
              <option value="13">200</option>
              </select>
            {language[LanguageStore.lang].addForm.Building}
              <select name="building" type="text" className="custom-select" id="building"
              value={this.state.building} onChange={this.handleChange}>
              <option>Choose...</option>
              <option value="Witsawa Watthana">Witsawa Watthana</option>
              <option value="CB1">CB1</option>
              <option value="CB2">CB2</option>
              <option value="CB3">CB3</option>
              <option value="CB4">CB4</option>
              <option value="CB5">CB5</option>
              </select>
            {language[LanguageStore.lang].addForm.Floor}
              <input name="floor" type="number" className="form-control" id="floor" placeholder="Floor"
              value={this.state.floor} onChange={this.handleChange}/>
            {language[LanguageStore.lang].addForm.RoomNumber}
              <input name="number" type="number" className="form-control" id="number" placeholder="Room Number"
              value={this.state.number} onChange={this.handleChange}/>
            </div>
            <div className="col-md-6 col-sm-12">
            {language[LanguageStore.lang].addForm.OperatingDay}
              <div className="form-check">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <input name="monday" type="checkbox" className="form-check-input" id="monday"
                    value={this.state.day.monday} onChange={this.handleChange}/>
                    <label className="form-check-label" for="monday">{language[LanguageStore.lang].addForm.Day.Monday}</label><br/>
                    <input name="tuesday" type="checkbox" className="form-check-input" id="tuesday"
                    value={this.state.day.tuesday} onChange={this.handleChange}/>
                    <label className="form-check-label" for="tuesday">{language[LanguageStore.lang].addForm.Day.Tuesday}</label><br/>
                    <input name="wednesday" type="checkbox" className="form-check-input" id="wednesday"
                    value={this.state.day.wednesday} onChange={this.handleChange}/>
                    <label className="form-check-label" for="wednesday">{language[LanguageStore.lang].addForm.Day.Wednesday}</label><br/>
                    <input name="thursday" type="checkbox" className="form-check-input" id="thursday"
                    value={this.state.day.thursday} onChange={this.handleChange}/>
                    <label className="form-check-label" for="thursday">{language[LanguageStore.lang].addForm.Day.Thursday}</label><br/>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <input name="friday" type="checkbox" className="form-check-input" id="friday"
                    value={this.state.day.friday} onChange={this.handleChange}/>
                    <label className="form-check-label" for="friday">{language[LanguageStore.lang].addForm.Day.Friday}</label><br/>
                    <input name="saturday" type="checkbox" className="form-check-input" id="saturday"
                    value={this.state.day.saturday} onChange={this.handleChange}/>
                    <label className="form-check-label" for="saturday">{language[LanguageStore.lang].addForm.Day.Saturday}</label><br/>
                    <input name="sunday" type="checkbox" className="form-check-input" id="sunday"
                    value={this.state.day.sunday} onChange={this.handleChange}/>
                    <label className="form-check-label" for="sunday">{language[LanguageStore.lang].addForm.Day.Sunday}</label><br/>
                  </div>
                </div>
              </div>
            {language[LanguageStore.lang].addForm.OperatingTime}
              <div className="row">
                <div className="col-md-2 col-sm-12">
                {language[LanguageStore.lang].addForm.From}
                </div>
                <div className="col-md-4 col-sm-12">
                  <select name="fromhr" type="number" className="custom-select" id="fromhr"
                  value={this.state.fromhr} onChange={this.handleChange}>
                  <option>Choose...</option>
                  <option value="0">00</option>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                  <option value="6">06</option>
                  <option value="7">07</option>
                  <option value="8">08</option>
                  <option value="9">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  </select>
                </div>
                <div className="col-md-1 col-sm-12">
                  :
                </div>
                <div className="col-md-4 col-sm-12">
                  <select name="frommin" type="number" className="custom-select" id="frommin"
                  value={this.state.frommin} onChange={this.handleChange}>
                  <option>Choose...</option>
                  <option value="00">00</option>
                  <option value="30">30</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 col-sm-12">
                  {language[LanguageStore.lang].addForm.To}
                </div>
                <div className="col-md-4 col-sm-12">
                  <select name="tohr" type="number" className="custom-select" id="tohr"
                  value={this.state.tohr} onChange={this.handleChange}>
                  <option>Choose...</option>
                  <option value="0">00</option>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                  <option value="6">06</option>
                  <option value="7">07</option>
                  <option value="8">08</option>
                  <option value="9">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  </select>
                </div>
                <div className="col-md-1 col-sm-12">
                  :
                </div>
                <div className="col-md-4 col-sm-12">
                  <select name="tomin" type="number" className="custom-select" id="tomin"
                  value={this.state.tomin} onChange={this.handleChange}>
                  <option>Choose...</option>
                  <option value="00">00</option>
                  <option value="30">30</option>
                  </select>
                </div>
              </div>
            {language[LanguageStore.lang].addForm.Amenity}
              <div class="form-check">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <input name="teachercom" type="checkbox" className="form-check-input" id="teachercom"
                    value={this.state.amenity.teachercom} onChange={this.handleChange}/>
                    <label className="form-check-label" for="teachercom">{language[LanguageStore.lang].addForm.Amenities.TeacherComputer}</label><br/>
                    <input name="studentcom" type="checkbox" className="form-check-input" id="studentcom"
                    value={this.state.amenity.studentcom} onChange={this.handleChange}/>
                    <label className="form-check-label" for="studentcom">{language[LanguageStore.lang].addForm.Amenities.StudentComputer}</label><br/>
                    <input name="aircon" type="checkbox" className="form-check-input" id="aircon"
                    value={this.state.amenity.aircon} onChange={this.handleChange}/>
                    <label className="form-check-label" for="aircon">{language[LanguageStore.lang].addForm.Amenities.AirConditioner}</label><br/>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <input name="projector" type="checkbox" className="form-check-input" id="projector"
                    value={this.state.amenity.projector} onChange={this.handleChange}/>
                    <label className="form-check-label" for="projector">{language[LanguageStore.lang].addForm.Amenities.Projector}</label><br/>
                    <input name="whiteboard" type="checkbox" className="form-check-input" id="whiteboard"
                    value={this.state.amenity.whiteboard} onChange={this.handleChange}/>
                    <label className="form-check-label" for="whiteboard">{language[LanguageStore.lang].addForm.Amenities.WhiteBoard}</label><br/>
                    <input name="visualizer" type="checkbox" className="form-check-input" id="visualizer"
                    value={this.state.amenity.visualizer} onChange={this.handleChange}/>
                    <label className="form-check-label" for="visualizer">{language[LanguageStore.lang].addForm.Amenities.Visualizer}</label><br/>
                  </div>
                </div>
              </div>

            </div>
          </div>
            <br/><center>
            <button onClick={() => this.addClick()} type="submit" value="Submit" className="btn btn-info">
              {language[LanguageStore.lang].addForm.Submit}
            </button> </center>
          </form>
        </div>
      </div>
    )
  }
}

export default AddForm
