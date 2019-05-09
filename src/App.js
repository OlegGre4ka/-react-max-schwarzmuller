import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

// example stateful class-based component

class App extends React.Component {
  state = {
    persons: [
      { name: 'Oleg', age: 42 },
      { name: 'Max', age: 29 },
      { name: 'Anna', age: 25 }
    ]
  }

  switchNameHandler = (newName) => {
    console.log('Was swirched name!');
    this.setState({
      persons: [
        { name: 'Oleg', age: 42 },
        { name:newName, age: 29 },
        { name: 'Anna', age: 25 }

      ]
    })
  }

  nameChanchedHandler = event => {
    this.setState({
      persons: [
        { name: 'Oleg', age: 42 },
        { name:event.target.value, age: 29 },
        { name: 'Anna', age: 25 }

      ]
    })
  }

  render() {

    const styleButton= {
      backgroundColor:'lightgreen',
      width:'150px',
      height:'40px',
      fontSize:'18px',
      cursor:'pointer'

    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello React course from Max!
        </p>
          <button 
          style={styleButton}
          onClick={this.switchNameHandler.bind(this,'Maria')}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >My hobbies: Music</Person>
          <Person 
          changed = {this.nameChanchedHandler}          
          name={this.state.persons[1].name} age={this.state.persons[1].age} />
          <Person 
          click={()=>this.switchNameHandler('Mark')} 
          // changed = {this.nameChanchedHandler}
          name={this.state.persons[2].name} age={this.state.persons[2].age} />

        </header>
      </div>
    );
  }

}

export default App;

// example React Hooks - UseState() in functional component

// const App = () => {
//   const [personsState, setPresonsState] = useState({
//     persons: [
//       { name: 'Oleg', age: 42 },
//       { name: 'Max', age: 29 }
//     ],
//     otherState: 'Other State'
//   });

//   const [otherState, setOtherState] = useState({
//     otherValue: 'First State'
//   })

//   console.log(personsState, 'personsState');
//   console.log(otherState, 'otherState');

//   const switchNameHandler = () => {
//     // console.log('Was swirched name!');
//     setPresonsState({
//       persons: [
//         { name: 'Oleg', age: 42 },
//         { name: 'Maximillian', age: 29 }
//       ],
//       otherState: 'Other Second State'

//     })
//     setOtherState({
//       otherValue: 'Second State'
//     })
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello React course from Max!
//         </p>

//         <button onClick={switchNameHandler}>Switch Name</button>

//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age} >My hobbies: Music</Person>
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
//       </header>
//     </div>
//   );
// }

// export default App;
