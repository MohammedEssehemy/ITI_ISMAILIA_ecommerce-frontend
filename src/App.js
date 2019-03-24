import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { login, register } from './API/user';

class App extends Component {
  loginHandler = async (e) => {
    e.preventDefault();
    const { username: { value: username }, password: { value: password } } = e.target.elements;
    console.log(username, password);
    const res = await login({ username, password });
    alert('you are authenticated');
  }


  registerHandler = async (e) => {
    e.preventDefault();
    const {
      username: { value: username },
      password: { value: password },
      email: { value: email }
    } = e.target.elements;
    console.log(username, password);
    const res = await register({ username, password, email });
    alert('you are registers');
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.loginHandler} >
            <fieldset>
              <input type="text" name="username" />
              <input type="password" name="password" />
              <button type="submit" >
                login
              </button>
            </fieldset>
          </form>

          <h2>
            Register Form
          </h2>
          <form onSubmit={this.registerHandler} >
            <fieldset>
              <input type="text" name="username" />
              <input type="email" name="email" />
              <input type="password" name="password" />
              <button type="submit" >
                Register
              </button>
            </fieldset>
          </form>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div >
    );
  }
}

export default App;
