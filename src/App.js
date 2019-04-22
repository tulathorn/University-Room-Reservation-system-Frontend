import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import history from './Utils/history'

import './Styles/bootstrap/bootstrap.min.css'

import MainView from './Views/Main'
import LoginView from './Views/Login'
import ListView from './Views/List'
import BookingView from './Views/Booking'
import PreHistoryView from './Views/PreHistory'
import CurHistoryView from './Views/CurHistory'
import ContactView from './Views/Contact'
import AdLoginView from './Views/ad_Login'
import AdSearchNorView from './Views/ad_Search_Normal'
import AdSearchRecView from './Views/ad_Search_Recurring'
import AdAddRoomView from './Views/ad_AddRoom'
import AdBookingView from './Views/ad_Booking'
import AdBookingTimatableView from './Views/ad_BookingTimetable'
import AdCurHistoryView from './Views/ad_CurHistory'
import AdPreHistoryView from './Views/ad_PreHistory'
import AdEditRoomView from './Views/ad_EditRoom'
import AdReplyView from './Views/ad_Reply'
import AdRoomInfoView from './Views/ad_RoomInfo'
import AdSupportView from './Views/ad_Support'
import AdListView from './Views/ad_Lists'
import AdRecListView from './Views/ad_RecList'
import AdAllListView from './Views/ad_AllList'

window.appHistory = history

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/" component={MainView} />{' '}
          <Route path="/login" component={LoginView} />{' '}
          <Route path="/search" component={ListView} />{' '}
          <Route path="/booking" component={BookingView} />{' '}
          <Route path="/prehistory" component={PreHistoryView} />{' '}
          <Route path="/curhistory" component={CurHistoryView} />{' '}
          <Route path="/contact" component={ContactView} />{' '}
          <Route path="/ad_login" component={AdLoginView} />{' '}
          <Route path="/ad_search_nor" component={AdSearchNorView} />{' '}
          <Route path="/ad_list_nor" component={AdListView} />{' '}
          <Route path="/ad_search_rec" component={AdSearchRecView} />{' '}
          <Route path="/ad_list_rec" component={AdRecListView} />{' '}
          <Route path="/ad_room_info" component={AdRoomInfoView} />{' '}
          <Route path="/ad_all_list" component={AdAllListView} />{' '}
          <Route path="/ad_add_room" component={AdAddRoomView} />{' '}
          <Route path="/ad_edit_room" component={AdEditRoomView} />{' '}
          <Route path="/ad_curhistory" component={AdCurHistoryView} />{' '}
          <Route path="/ad_prehistory" component={AdPreHistoryView} />{' '}
          <Route path="/ad_support" component={AdSupportView} />{' '}
          <Route path="/ad_reply" component={AdReplyView} />{' '}
          <Route path="/ad_booking" component={AdBookingView} />{' '}
          <Route path="/ad_timetable" component={AdBookingTimatableView} />{' '}
          
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
