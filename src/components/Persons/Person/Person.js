import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Radium from 'radium';
import styles from './Person.module.scss';
import WithClasses from '../../../hoc/WithClasses';
import AuthContext from '../../../context/auth-context';
class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElRef = React.createRef()
    }
    // styles with Radium - media query
    // const style={
    //     '@media(min-width:500px)':{
    //         width:'450px'
    //     }
    // }

    // static getDerivedStateFromProps(props, state) {
    //   console.log('[App.js],getDerivedStateFromProps', props)
    //   return state
    // }
    static contextType = AuthContext;
    componentDidMount() {
        console.log('[App.js],componentDidMount');
        // document.querySelector('input').focus();//focus on first element
        // this.inputEl.focus();//focus on last element
        this.inputElRef.current.focus();
    }
    // componentDidUpdate(prevProps, prevState, snapshort) {
    //     console.log('[App.js],componentDidUpdate');
    //     // console.log(snapshort)
    //     // document.querySelector('input').focus();//focus on first element
    //     this.inputElRef.current.focus();
    // }
    render() {

        return (
            // <div className={styles.Person}/* style={style} */  >
            <WithClasses classes={styles.Person} >

                <p
                    className={styles.P}
                    onClick={this.props.click}
                    title="Remote?"
                >I'm a {this.props.name} and I'm {this.props.age} years old! <span>{this.props.children}</span></p>
            {/* <AuthContext.Consumer> */}
               {/* {context=>context.isAuthentificate ? <p>Authentificated!</p> : <p>Please, log in!</p>} */}
               {this.context.isAuthentificate ? <p>Authentificated!</p> : <p>Please, log in!</p>}

            {/* </AuthContext.Consumer> */}

                <input
                    className={styles.Input}
                    // ref={inputEl=>this.inputEl=inputEl}
                    ref={this.inputElRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </WithClasses>
            // </div>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    children: PropTypes.string,
    changed: PropTypes.func
}
export default Person;
// export default Radium(Person);
