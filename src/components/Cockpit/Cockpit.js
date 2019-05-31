import React,/* { useEffect }*/{useContext} from 'react';
// import './Cockpit.module.scss';
import stylesClass from './Cockpit.module.scss';
import Aux from '../../hoc/Auxiliary';
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
    const authContext = useContext(AuthContext)
    // useEffect(() => {
    //     console.log('[Cockpit.js],useEffect-1');
    //     // setTimeout(()=>{
    //     //     alert('Cockpit useEffect()-1-one time');
    //     // },1000)
    // }, []);

    // useEffect(()=>{
    //     console.log('[Cockpit.js],useEffect-2');
    //     setTimeout(()=>{
    //         alert('Cockpit useEffect()-2-again and again');
    //     },2000)
    // },);

    // useEffect(()=>{
    //     console.log('[Cockpit.js],useEffect-3');
    //     setTimeout(()=>{
    //         alert('Cockpit useEffect()-3-when props.persons');
    //     },2500)
    // },[props.persons]);

    // useEffect(() => {
    //     return () => {
    //         // alert('Cockpit useEffect()-4-useEffect-4-as componentUnMount');

    //         console.log('[Cockpit.js],useEffect-4-as componentUnMount');
    //     }
    // });

    const classes = [];
    // alert('Cockpit useEffect()');

    // if (props.lengthPersons <= 2) { classes.push('red') };
    // if (props.lengthPersons <= 1) { classes.push('bold') };
    if (props.lengthPersons <= 2) { classes.push(stylesClass.red) };
    if (props.lengthPersons <= 1) { classes.push(stylesClass.bold) };
    return (
        // <>
        <Aux>
            <h3 >Hello React {props.title}!</h3>

            <p className={classes.join(' ')}>This is really working!!!</p>
            {/* <AuthContext.Consumer>
                {context =><button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer> */}
<button onClick={authContext.login}>Log in</button>
        </Aux>

        // </>
    )
}

export default React.memo(Cockpit);