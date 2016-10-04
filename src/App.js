import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    like: false,
    response: null
  }

  componentWillMount() {
    fetch('http://localhost:4567/hi')
      .then((res) => {
        res.json()
          .then((jsonResponse) => {
            console.log('the json parsed response', jsonResponse)
            this.setState({response: jsonResponse})
          })
      })
  }

  changeButtonState = () => {
    console.log("what's the state", this.state)
    if (this.state.like) {
      this.setState({like:false})
    } else {
      this.setState({like:true})
    }
  }

  renderButton = () => {
    console.log('this.state', this.state)
    if (this.state.like) {
      return (
        <button onClick={this.changeButtonState} style={{color:"blue"}}>Unlike</button>
      )
    } else {
      return (
        <button onClick={this.changeButtonState}>Like</button>
      )
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hey John
        </p>
        {this.renderButton()}
      </div>
    );
  }
}

export default App;
