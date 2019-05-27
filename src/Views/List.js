import React, { Component } from 'react'
import ReservationStore from '../stores/ReservationStore'
import language from '../languages.json'
import UserNavbar from '../Components/Navbar'
import { observer } from 'mobx-react'
import RoomInformationCard from '../Components/RoomInformationCard'
import AuthenticationGate from '../Components/AuthenticationGate'

@observer
class ListView extends Component {
  async componentWillMount() {
    await ReservationStore.GetAvailableRoom()
  }

  render() {
    console.log('ReservationStore', ReservationStore)
    return (
      <AuthenticationGate>
        <div>
          <UserNavbar />
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                {console.log('ReservationStore.reservedDatas', ReservationStore.reservedDatas)}
                <p>
                  {language[localStorage.getItem('language')].List.Result} :{' '}
                  {ReservationStore.reservedDatas.length}
                </p>
                <p>
                  <b>{language[localStorage.getItem('language')].List.SearchFor} : </b>
                </p>

                {ReservationStore.searchTemp.Building ? (
                  <p>
                    <b>{language[localStorage.getItem('language')].List.Building}</b> :{' '}
                    {ReservationStore.searchTemp.Building}
                  </p>
                ) : (
                  <p />
                )}

                {ReservationStore.searchTemp.PeopleCapacity ? (
                  <p>
                    <b>{language[localStorage.getItem('language')].List.Size}</b> :{' '}
                    {ReservationStore.searchTemp.PeopleCapacity}{' '}
                    {language[localStorage.getItem('language')].List.People}
                  </p>
                ) : (
                  <p />
                )}

                {ReservationStore.searchTemp.Date ? (
                  <p>
                    <b>{language[localStorage.getItem('language')].List.Date}</b> :{' '}
                    {ReservationStore.searchTemp.Date}
                  </p>
                ) : (
                  <p />
                )}

                {ReservationStore.searchTemp.tohr ? (
                  <p>
                    <b>{language[localStorage.getItem('language')].List.From}</b> :{' '}
                    {localStorage.getItem('ScheduleFrom')}{' '}
                    <b>{language[localStorage.getItem('language')].List.To}</b>{' '}
                    {localStorage.getItem('ScheduleTo')}
                  </p>
                ) : (
                  <p />
                )}
              </div>
              <div className="col-md-6 col-sm-12">
                <br />
                <br />
                <p>
                  <b>{language[localStorage.getItem('language')].List.Amenity} : </b>
                </p>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    {ReservationStore.searchTemp.HasTeacherComputers ? (
                      <p>
                        {language[localStorage.getItem('language')].List.Amenities.TeacherComputer}
                      </p>
                    ) : (
                      <div />
                    )}
                    {ReservationStore.searchTemp.HasStudentComputers ? (
                      <p>
                        {language[localStorage.getItem('language')].List.Amenities.StudentComputer}
                      </p>
                    ) : (
                      <div />
                    )}
                    {ReservationStore.searchTemp.HasAirConditioner ? (
                      <p>
                        {language[localStorage.getItem('language')].List.Amenities.AirConditioner}
                      </p>
                    ) : (
                      <div />
                    )}
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {ReservationStore.searchTemp.HasProjector ? (
                      <p>{language[localStorage.getItem('language')].List.Amenities.Projector}</p>
                    ) : (
                      <div />
                    )}
                    {ReservationStore.searchTemp.HasWhiteboard ? (
                      <p>{language[localStorage.getItem('language')].List.Amenities.WhiteBoard}</p>
                    ) : (
                      <div />
                    )}
                    {ReservationStore.searchTemp.HasVisualizer ? (
                      <p>{language[localStorage.getItem('language')].List.Amenities.Visualizer}</p>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {ReservationStore.reservedDatas.map(roomv => {
              return <RoomInformationCard room={roomv} />
            })}
          </div>
        </div>
      </AuthenticationGate>
    )
  }
}

export default ListView
