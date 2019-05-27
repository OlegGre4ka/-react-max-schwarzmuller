import React from 'react';
import './Cockpit.scss';
const cockpit = props => {
    const classes = [];
    if (props.persons.length <= 2) { classes.push('red') };
    if (props.persons.length <= 1) { classes.push('bold') };
    return (
        <>
            <h3>Hello React {props.title}!</h3>

            <p className={classes.join(' ')}>This is really working!!!</p>
        </>
    )
}

export default cockpit;