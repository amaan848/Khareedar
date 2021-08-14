import React from 'react';
import classes from './Login.module.css';

const Login = props => {
    return (
        <div className={classes.form}>
            <div>
                <input placeholder="Email" type="email" onChange={props.onEmailChange}></input>
                <input placeholder="Password" type="password" onChange={props.onPasswordChange}></input>
                <p>{props.error}</p>
            </div>
            <button onClick={props.onSubmitHandlerSignup}>SIGN UP</button>
            <button onClick={props.onSubmitHandlerSignin}>SIGN IN</button>
        </div>
    )
}

export default Login;