import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from './component/users/register'
import Login from './component/users/login'
import Logout from './component/users/logout'

import ContactList from './component/contacts/contactList'
import ContactNew from './component/contacts/contactNew'
import ContactShow from './component/contacts/contactShow'
import ContactEdit from './component/contacts/contactEdit'

import HomePage from './component/home/home'
import NavBar from './component/home/navBar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          {/* <h2>Contact Manager App</h2> */}
          {/* <Link to="/">Home</Link>| */}
          {/* <Link to="/users/register">Register</Link>|
          <Link to="/users/login">Login</Link>| */}
          {/* <Link to="/users/logout">Logout</Link>| */}
          {/* <Link to="/contacts">Contacts</Link> */}
          <Switch>
            <Route path="/" component={HomePage} exact={true}></Route>
            <Route path="/users/register" component={Register} exact={true}></Route>
            <Route path="/users/login" component={Login} exact={true}></Route>
            <Route path="/users/logout" component={Logout} exact={true}></Route>
            <Route path="/contacts" component={ContactList} exact={true}></Route>
            <Route path="/contacts/new" component={ContactNew} exact={true}></Route>
            <Route path="/contacts/:id" component={ContactShow} exact={true}></Route>
            <Route path="/contacts/edit/:id" component={ContactEdit} exact={true}></Route>

          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
