import React, { useContext } from 'react';
import AuthContext from '../../contexts/auth-context';
import { Navigate } from 'react-router-dom';
import './Authenticated.css';

const Authenticated = () => {
    const authContext = useContext(AuthContext);
    return (
        <div className="Authenticated-Wrapper">
            <div className="Authenticated">
                { authContext.isAuthenticated === true ? '' : <Navigate to='/login' /> }
                <h2>{localStorage.getItem('email')}</h2>
                <button onClick={authContext.logout}>Logout</button>
            </div>
        </div>
    )
}

export default Authenticated;