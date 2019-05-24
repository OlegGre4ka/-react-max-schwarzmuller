import React from 'react';
import Person from './Person/Person';
const Persons = props => {
    return(
    props.persons.map((person, i) =>  
        <Person
        click = {()=>props.clicked(i)}
        changed = {(event)=>props.changed(event, person.id)}
          name={person.name}
          age={person.age}
          key={person.id} />)
    )

}
export default  Persons;