import React, { Component } from 'react';
import './App.css';
import Login from './components/Login.js';

class App extends Component {
  constructor(props){
    super(props)
    this.accounts = {
      account: [
        {userName: 'admin', pwd: '123', isAdmin: true},
        {userName: '19.anim', pwd: '456', isAdmin: false}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Login userInfos={this.accounts.account}/>
      </div>
    );
  }
}

export default App;