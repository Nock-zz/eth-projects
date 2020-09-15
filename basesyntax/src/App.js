import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';



class App extends Component {
  state = {
    username: "Dunno"

  };

  usernameChangeHandler = (_username) => {
    this.setState({username: _username});
  };


  usernameInputChangeHandler = (event) => {
    this.setState({username: event.target.value});
  };

// <UserInput username={this.state.username} inputchange={this.usernameInputChangeHandler} />

  render() {



    return (
      <div className="App">
         <UserInput username={this.state.username} inputchange={(event) => this.setState({username: event.target.value})} />
        <UserOutput click={this.usernameChangeHandler.bind(this, 'Nicholas')} username={this.state.username}/>
        <UserOutput username="Vic"/>
      </div>
    );
  }
}

export default App;
