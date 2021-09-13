import React, { createContext, useReducer } from "react"
import { authReducer } from './authReducer';

// Definir que información se definirá
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false
}

// Se define que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logout: () => void;
    favoriteIcon: (name: string) => void;
    changeUsername: (username: string) => void;
}

// Crear context
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)
    const signIn = () => {
        dispatch({ type: 'signIn' });
    }

    const changeFavoriteIcon = (name: string) => {
        dispatch({ type: 'favoriteIcon', payload: name });
    }

    const logout = () => {
        dispatch({ type: 'logout' });
    }

    const changeUsername = (username: string) => {
        dispatch({ type: 'changeUsername', payload: username });
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeUsername,
            favoriteIcon: changeFavoriteIcon
        }}>
            {children}
        </AuthContext.Provider>
    )
}