import React from 'react';
// import React, { useState } from 'react';
// import { StyleRoot } from 'radium';
import './App.module.scss';
import classes from './App.module.scss';
import withClass from '../hoc/withClass';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import ToggleButton from '../components/Cockpit/ToggleButton';
import AuthContaxt from '../context/auth-context';

// example stateful class-based component

class App extends React.Component {
  constructor(props) {
    // console.log('[App.js],constructor');
    super(props)
    this.state = {
      persons: [
        { id: 'asdf1', name: 'Oleg', age: 42 },
        { id: 'qwrt3', name: 'Max', age: 29 },
        { id: 'lkjh2', name: 'Anna', age: 25 }
      ],
      showPerson: false,
      showCockpit: true,
      counterChanges: 0,
      isAuthentificate: false
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[App.js],getDerivedStateFromProps', props)
  //   return state
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log('[Persons.js],getSnapshotBeforeUpdate');
  //     return { message: "Snapshot!" }

  // }
  //   componentDidMount() {
  //     console.log('[App.js],componentDidMount');
  // document.querySelector('input').focus()
  //   }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[App.js],shouldComponentUpdate');

  //   return true
  // }
  // componentDidUpdate(prevProps, prevState, snapshort) {
  //   console.log('[App.js],componentDidUpdate');
  //   // console.log(snapshort)
  // }
  deletePersonHandler = (indexPerson) => {
    let persons = [...this.state.persons];
    persons.splice(indexPerson, 1);
    this.setState({
      persons
    })

  }

  nameChanchedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    let persons = [...this.state.persons]
    persons[personIndex].name = event.target.value;

    this.setState(prevState => {
      return {
        persons,
        counterChanges: prevState.counterChanges + 1
      }
    })
  }

  togglePersonsHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson
    })
  }
  showCockpit = () => {
    this.setState({ showCockpit: !this.state.showCockpit })
  }

  loginHandler = () => {
    this.setState(prevState => {
      return {
        isAuthentificate: !prevState.isAuthentificate
      }
    })
  }
  render() {
    // console.log('[App.js],rendering...',this.props);
    const persons = (
      this.state.showPerson ? <div className={classes.AppPersons}>
        <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChanchedHandler}
        />
      </div> : null
    )
    return (
      // <StyleRoot>
      <>
        <ToggleButton show={this.state.showCockpit} clicked={this.showCockpit} >Show Text</ToggleButton>
        {/* <button onClick={this.showCockpit}>ShowCockpit</button> */}
        <AuthContaxt.Provider value={{isAuthentificate:this.state.isAuthentificate, login:this.loginHandler}}>
          {this.state.showCockpit && <Cockpit
            lengthPersons={this.state.persons.length}
            title={this.props.appTitle}
            />}

          <ToggleButton show={this.state.showPerson} clicked={this.togglePersonsHandler}>Toggle Persons</ToggleButton>
          <p>Counter Changes: {this.state.counterChanges}</p>

          {persons}
        </AuthContaxt.Provider>

      </>
      //  </StyleRoot>
    );
  }

}

export default withClass(App, classes.App);

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

//       </header>
//     </div>
//   );
// }

// export default App;
