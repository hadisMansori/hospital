import React, { Component } from 'react';
import Submit from './component/submit'
import './App.css';
import Login from './component/login';
import Signup from './component/signup'
import Admin from './component/admin'
import Sick from './component/sick'
import AddD from './component/adddoctor'
import DeleteD from './component/deletedoctor'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';
import Home from './component/home';

const home = () => <Home />
const login = () => <Login />
const signup = () => <Signup />
const submit = () => <Submit />
const admin = () => <Admin />
const sick = () => <Sick />
const addD = () => <AddD />
const deletD = () => <DeleteD />

class App extends Component {
  render() {
    return (
      <Router>
        <div className='router' >
          <ul>
            <li  >
              <Link to="/home">خانه</Link>
            </li>
            <li>
              <Link to="/login">ورود</Link>
            </li>
          </ul>
          <div className="bodyex3">
          <Switch>
            <Route  path="/home" component={home} />
            <Route path="/submit" component={submit} />
            <Route path="/login" component={login} />
            <Route path="/admin" component={admin} />
            <Route path="/signup" component={signup} />
            <Route path="/sick" component={sick} />
            <Route path="/AddD" component={addD} />
            <Route path="/deletD" component={deletD} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
const mapstate = (state) => {
  return {
    signin: state.signin,
    post: state.post,
    user: state.user,
    doctor: state.doctor,
  }
}
export default connect(mapstate)(App); 
