import React from 'react';
import Radium from 'radium';


const ToggleButton = props => {
    
    const styleButton = {
        backgroundColor: 'green',
        color: 'white',
        width: '150px',
        height: '40px',
        fontSize: '18px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
      }
      if
        (props.showPerson === true) {
        styleButton.backgroundColor = 'red'; styleButton[':hover'] = {
          backgroundColor: 'pink',
          color: 'black'
        }
      } else { styleButton.backgroundColor = 'green' }
    return(
    <button
        style={styleButton}
        onClick={props.clicked}>Toggle Persons</button>)
}
export default Radium(ToggleButton);