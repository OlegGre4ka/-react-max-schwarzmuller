import React,{useEffect} from 'react';
import './Cockpit.scss';

const Cockpit = props => {
    useEffect(()=>{
        console.log('[Cockpit.js],useEffect-1');
        setTimeout(()=>{
            alert('Cockpit useEffect()-1-one time');
        },1000)
    },[]);

    useEffect(()=>{
        console.log('[Cockpit.js],useEffect-2');
        setTimeout(()=>{
            alert('Cockpit useEffect()-2-again and again');
        },2000)
    },);

    useEffect(()=>{
        console.log('[Cockpit.js],useEffect-3');
        setTimeout(()=>{
            alert('Cockpit useEffect()-3-when props.persons');
        },2500)
    },[props.persons]);

    useEffect(()=>{
        return ()=>{
            alert('Cockpit useEffect()-4-useEffect-4-as componentUnMount');

            console.log('[Cockpit.js],useEffect-4-as componentUnMount');
        }
    },);

    const classes = [];
    // alert('Cockpit useEffect()');

    if (props.persons.length <= 2) { classes.push('red') };
    if (props.persons.length <= 1) { classes.push('bold') };
    return (
        <>
            <h3>Hello React {props.title}!</h3>

            <p className={classes.join(' ')}>This is really working!!!</p>
        </>
    )
}

export default Cockpit;