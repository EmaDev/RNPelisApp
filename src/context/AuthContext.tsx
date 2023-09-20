import React,{ createContext } from "react";

export interface AuthState {
    isLogged: boolean;
    username?: string;
    favoriteIcon?: string;
}

//Estado inicial
export const AuthInitialState:AuthState = {
    isLogged: false,
    username: undefined,
    favoriteIcon: undefined
}

//Informacion que va a exponer el context

export interface authContextProps {
    authState: AuthState;
    logIn: () => void;
}

//crear el contexto
export const authContext = createContext({} as authContextProps);

//Provedor del context

export const AuthProvider = ({children} : any) => {

    return(
        <authContext.Provider
        value={{
            authState: AuthInitialState, 
            logIn: () => {} 
        }}
        >
            {children}
        </authContext.Provider>
    )
}