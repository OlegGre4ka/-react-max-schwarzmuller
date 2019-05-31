import React from 'react';

const authContext = React.createContext({
    isAuthentificate:false,
    login:()=>{}
});

export default authContext;
