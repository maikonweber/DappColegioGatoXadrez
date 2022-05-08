import { createContext, useEffect, useState, useContext} from 'react';
import {parseCookies, setCookie} from 'nookies';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [cart, setCart] = useState([]);
    const auth = 'authetication'


    useEffect(() => {
        const { 'nextauth.token': token } = parseCookies()
        getCart();

    }, []);

    return (
        <AuthContext.Provider value={{
            
        }}>
            {children}
        </AuthContext.Provider>
    );
}