import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Button from 'react-bootstrap/Button';
import LoginHeader from './LoginHeader';
import Footer from './Footer';


const kDefaultFormState = {
    username: '',
    password: ''
    };

interface ILoginProps {
    handleLoginSubmit: any,
    setInvestorData: any
}

const Login: React.FunctionComponent<ILoginProps> = ({ handleLoginSubmit, setInvestorData}) => {
// const Login= ({handleLoginSubmit, currentForm}) => {
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

    const navigate = useNavigate();

    const handleSubmit = (event:any): void => {
    event.preventDefault()
    if (!loginFormData.username || !loginFormData.password ) return;
    if (loginFormData === undefined) {
        return;
    } else {
        handleLoginSubmit(loginFormData)
        console.log('LoginFormData: ', loginFormData);
        setInvestorData({loginFormData});
        setLoginFormData(kDefaultFormState);
        navigate('/portfolio');
    }

    
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
                    >Login</Button>
            </form>
            <Link to='/register'>Need an Account? Register Here.</Link>
            {/* <footer>
                <Footer/>
            </footer> */}
        </div>
        
    );
};

export default Login;


