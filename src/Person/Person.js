import React from 'react';

const Person = (props) => {
    return (
        <p>I'm a {props.name} and I'm {props.age} years old! <span>{props.children}</span></p>
    )
}
export default Person;