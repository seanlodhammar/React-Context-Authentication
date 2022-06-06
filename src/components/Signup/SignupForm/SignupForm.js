import React, { useRef, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import FormButton from '../../UI/FormButton';
import FormText from '../../UI/FormText';
import AltLink from '../../UI/AltLink/AltLink';
import './SignupForm.css';
import StyledLabel from '../../UI/StyledLabel';
import StyledInput from '../../UI/StyledInput'
import InvalidFormText from '../../UI/InvalidFormText';
import AuthContext from '../../../contexts/auth-context';

const SignupForm = () => {
    const authContext = useContext(AuthContext);
    const emailRef = useRef();
    const passwordRef = useRef();
    const invalidText = 'Incorrect Details'

    // haha get it
    const prEvent = (e) => {
        e.preventDefault()
        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;
        authContext.signUp(emailValue, passwordValue);
    }
    
    return (
        <form onSubmit={prEvent} className="SignupForm">
                {authContext.isAuthenticated === true ? <Navigate to={`/authenticated`} /> : ''}
                <FormText id="formtext" textColor='#c12870'>Sign Up</FormText>
                <div className="usernamediv">
                    <StyledLabel id="usernamelabel">Email</StyledLabel>
                    <StyledInput id='usernameinput' placeholder='Type your email' type='email' ref={emailRef}/>
                </div>
                <div className="passworddiv">
                    <StyledLabel id="passwordlabel">Password</StyledLabel>
                    <StyledInput id="passwordinput" placeholder='Type your password' type="password" ref={passwordRef} />
                </div>
                {authContext.isError ? <InvalidFormText id="invalidformtext" textColor='#c12870'>{invalidText}</InvalidFormText> : ''}
                <FormButton type="button" id="submitbtn" onClick={prEvent}>SUBMIT</FormButton>
                <AltLink divClass="loginOption" hrefVal='/login' linkText='Log back in' altId="signUp"/>
        </form>
    )
}

export default SignupForm