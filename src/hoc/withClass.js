import React from 'react';

const withClass = (WrappedComponent, className) =>{
    return props=>(<div className={className}><WrappedComponent /*appTitle={props.appTitle}*/ {...props}/></div>);
}
export default withClass;