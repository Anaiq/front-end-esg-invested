import React from "react";
import { useState } from 'react';
import "./Login.css";
import Button from 'react-bootstrap/Button';
import LoginHeader from './LoginHeader';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";

const kDefaultFormState = {
    username: '',
    password: ''
    };

interface ILoginProps {
    handleLoginSubmit: any,
    onFormSwitch: any
}

const Login: React.FunctionComponent<ILoginProps> = ({handleLoginSubmit, onFormSwitch}) => {
// const Login= ({handleLoginSubmit, onFormSwitch, currentForm}) => {
    const [loginFormData, setLoginFormData] = useState(kDefaultFormState);
    // console.log("loginFormData:", loginFormData)

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>): void =>{
        const fieldValue = event.target.value;
        const fieldName = event.target.name;
        const newFormData = {...loginFormData, [fieldName]:fieldValue}
        // console.log("newFormData:", newFormData);
        setLoginFormData(newFormData);
    }

    // console.log(loginFormData.username);
    // console.log(loginFormData.password);

    const handleSubmit = (event:any): void => {
    event.preventDefault()
    handleLoginSubmit(loginFormData)
    setLoginFormData(kDefaultFormState);
    }

    return (
        <div className="login-form-container">
            <header>
                <LoginHeader/>
            </header>
            {/* <main className="main"></main> */}
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor='username' >Username</label>
                <input type="text" id="username" value={loginFormData.username} onChange={handleChange} placeholder="Username" name="username"></input>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={loginFormData.password} onChange={handleChange} placeholder="********" name="password"></input>
                <Button variant="light" size="sm" type="submit" value="Log In" 
                    onClick={()=> handleLoginSubmit(loginFormData.username)}>Login</Button>
            </form>
            <Button variant="link" onClick={onFormSwitch('register')}>Need an Account? Register Here.</Button>
            <footer>
                <Footer/>
            </footer>
        </div>
        
    );
};

export default Login;


