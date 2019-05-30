import React, { useEffect,useRef } from 'react';
// import Radium from 'radium';
import classes from'./Cockpit.module.scss';
// import './Cockpit.scss';


const ToggleButton =props=>{
  const toggleBtnRef = useRef(null);

  useEffect(
    () => {
      toggleBtnRef.current.click()
    }, []
  )
// console.log(classes,'classes')
  // const styleButton = {
  //   backgroundColor: 'green',
  //   color: 'white',
  //   width: '150px',
  //   height: '40px',
  //   fontSize: '18px',
  //   cursor: 'pointer',
  //   ':hover': {
  //     backgroundColor: 'lightgreen',
  //     color: 'black'
  //   }
  // }
  
  // if
  //   (props.showPerson === true) {
  // //   styleButton.backgroundColor = 'red'; styleButton[':hover'] = {
  // //     backgroundColor: 'pink',
  // //     color: 'black'
  // //   }
  // } else { 
  //   // styleButton.backgroundColor = 'green'
  // }


  return (
    <button 
      ref={toggleBtnRef}
      className={props.show === true?classes.BtnRed:classes.BtnGreen}
      // style={styleButton}
      onClick={props.clicked}>{props.children}</button>)
}
// with useRef() - Radium don't work
// export default Radium(ToggleButton);
export default ToggleButton;
