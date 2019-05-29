import React,{Component} from 'react';
// import Radium from 'radium';
import styles from'./Person.module.scss';
import WithClasses from '../../../hoc/WithClasses';

class Person extends Component {
    // constructor(props){
    //     super(props)
    // }
    // styles with Radium - media query
    // const style={
    //     '@media(min-width:500px)':{
    //         width:'450px'
    //     }
    // }
    render(){

    return (
        // <div className={styles.Person}/* style={style} */  >
        <WithClasses classes={styles.Person} >

            <p
              className={styles.P}
              onClick={this.props.click}
              title="Remote?"
            >I'm a {this.props.name} and I'm {this.props.age} years old! <span>{this.props.children}</span></p>
            <input
            className={styles.Input}
                type="text"
                onChange={this.props.changed}
                value={this.props.name} />
                </WithClasses>
        // </div>
    )
}

}
export default Person;
// export default Radium(Person);
