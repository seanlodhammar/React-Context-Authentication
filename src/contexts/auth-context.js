import React, { useState } from 'react'
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, getAuth } from 'firebase/auth';

const firebaseConfig = {
    // Firebase Config details
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const AuthContext = React.createContext({
    signUp: () => {},
    signIn: () => {},
    logout: () => {},
    isAuthenticated: false,
    isError: false,
})

export const AuthProvider = (props) => {
    const [isError, setIsError] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState();

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setIsError(false)
            localStorage.setItem('email', userCredential.user.email);
        })
        .catch((error) => {
            setIsError(true);
        })
    }

    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setIsError(false);
            localStorage.setItem('email', userCredential.user.email);
        })
        .catch((error) => {
            setIsError(true)
        })
    }

    const logout = () => {
        signOut(auth).then(() => {
            localStorage.removeItem('email');
        }).catch((error) => {

        })
    }

    onAuthStateChanged(auth, (user) => {
        if(user) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
            localStorage.removeItem('email');
        }
    })
    

    return (
        <AuthContext.Provider value={{ signUp: signUp, signIn: signIn, logout: logout, isError: isError, isAuthenticated: isAuthenticated }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
