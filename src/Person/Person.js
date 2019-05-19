import React from 'react';
// import Radium from 'radium';
import styles from'./Person.module.scss';

const Person = (props) => {
    // styles with Radium - media query
    // const style={
    //     '@media(min-width:500px)':{
    //         width:'450px'
    //     }
    // }
    return (
        <div className={styles.Person}/* style={style} */  >
            <p
              className={styles.P}
              onClick={props.click}
              title="Remote?"
            >I'm a {props.name} and I'm {props.age} years old! <span>{props.children}</span></p>
            <input
            className={styles.Input}
                type="text"
                onChange={props.changed}
                value={props.name} />
        </div>
    )
}
export default Person;
// export default Radium(Person);
