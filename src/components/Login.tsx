import React from "react";
import { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import "./Login.css";
import Button from 'react-bootstrap/Button';




const Login= (props:any) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(username);
    }

    return (
        <div className="login-form-container">
            <h2>Login</h2>
            <form className="login-form" onClick={handleSubmit}>
                <label htmlFor="text">Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" name="username"></input>
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" name="password"></input>
                {/* <button type="submit">Login</button> */}
                <Button variant="light" size="sm" type="submit">Login</Button>
            </form>
            {/* <button onClick={() => props.onFormSwitch('register')}>Need an Account? Register Here.</button> */}
            <Button variant="link" onClick={() => props.onFormSwitch('register')}>Need an Account? Register Here.</Button>
        </div>
        
    );
};

export default Login;