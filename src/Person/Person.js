import React from 'react';

const Person = (props) => {
    return (
        <>
        <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old! <span>{props.children}</span></p>
        <input type="text" onChange={props.changed} value={props.name}/>
        </>
    )
}
export default Person;