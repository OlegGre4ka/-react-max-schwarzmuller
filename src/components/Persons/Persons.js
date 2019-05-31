import React, { PureComponent } from 'react';
import Person from './Person/Person';
class Persons extends PureComponent {
    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js],getDerivedStateFromProps')
    //     return state
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js],shouldComponentUpdate');
    //     if (nextProps.persons !== this.props.persons) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('[Persons.js],getSnapshotBeforeUpdate');
    //     return { message: "Snapshot!" }

    // }
    // componentDidUpdate(prevProps, prevState, snapshort) {
    //     console.log('[Persons.js],componentDidUpdate');
    //     console.log(snapshort)
    // }

    // componentWillUnmount() {
    //     console.log('[Persons.js],componentWillUnmount');

    // }

    render() {
        // console.log('[Persons.js],rendering...');

        return (
            this.props.persons.map((person, i) =>
                <Person
                    click={() => this.props.clicked(i)}
                    changed={(event) => this.props.changed(event, person.id)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                     />)
        )
    }
}
export default Persons;