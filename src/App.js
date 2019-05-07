import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends React.Component {
  state={
    person:[
      {name:'Oleg', age:42},
      {name:'Max', age:29}

    ]
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello React course from Max!
        </p>
          <Person name={this.state.person[0].name} age={this.state.person[0].age} >My hobbies: Music</Person>
          <Person name={this.state.person[1].name}  age={this.state.person[1].age}  />

          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        </header>
      </div>
    );
  }

}

export default App;
