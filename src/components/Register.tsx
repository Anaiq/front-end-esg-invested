import React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import "./Register.css";


const Register = (props:any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(username);
    }


    return (
        <div className="reg-form-container">
            <form onClick={handleSubmit}>
                <label htmlFor="text">Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" name="username"></input>
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" name="password"></input>
                <button type="submit">Login</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Already Have Account? Login Here.</button>
        </div>

    )
};


export default Register;