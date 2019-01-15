import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './Styles/bootstrap/bootstrap.min.css'

import MainView from './Views/Main'
import LoginView from './Views/Login'
import ListView from './Views/List'
import BookingView from './Views/Booking'
import HistoryView from './Views/History'
import ContactView from './Views/Contact'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainView} />{' '}
          <Route path="/login" component={LoginView} />{' '}
          <Route path="/search" component={ListView} />{' '}
          <Route path="/booking" component={BookingView} />{' '}
          <Route path="/history" component={HistoryView} />{' '}
          <Route path="/Contact" component={ContactView} />{' '}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
