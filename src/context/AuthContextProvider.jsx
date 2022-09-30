import React, { createContext, useState } from 'react';
export const AuthContext=createContext()
const AuthContextProvider = ({children}) => {
    const [isAuth,setIsAuth]=useState(false);
    const [token,setToken]=useState('');

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
