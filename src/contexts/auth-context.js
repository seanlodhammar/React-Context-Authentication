import React, { useState } from 'react'
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDowbRzEO_cEC8plUPaLos3W12b2HIIhQM",
    authDomain: "database-56b98.firebaseapp.com",
    databaseURL: "https://database-56b98-default-rtdb.firebaseio.com",
    projectId: "database-56b98",
    storageBucket: "database-56b98.appspot.com",
    messagingSenderId: "174316458567",
    appId: "1:174316458567:web:7c287aa1e174524bfb9762"
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
