import { createContext, useEffect, useState, useContext} from 'react';
import {parseCookies, setCookie} from 'nookies';
import Router from 'next/router';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const auth = 'auth'
    useEffect(() => {
        const { 'nextauth.token': token } = parseCookies()
        
    }, []);

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}