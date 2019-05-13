import React from 'react';
import Radium from 'radium';
import './Person.scss';

const Person = (props) => {
    const style={
        '@media(min-width:500px)':{
            width:'450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <p
                onClick={props.click}
            >I'm a {props.name} and I'm {props.age} years old! <span>{props.children}</span></p>
            <input
                type="text"
                onChange={props.changed}
                value={props.name} />
        </div>
    )
}
export default Radium(Person);