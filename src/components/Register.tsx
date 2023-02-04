import React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./Register.css";
import LoginHeader from './LoginHeader';
import Footer from './Footer';

const kDefaultFormState = {
    username: '',
    password: ''
    }; 

interface IRegisterProps {
    handleRegisterSubmit: any,
    onFormSwitch: any
}

const Register: React.FunctionComponent<IRegisterProps> = ({handleRegisterSubmit, onFormSwitch }) => {
// const Register = (props:any) => {
    const [regFormData, setRegFormData] = useState(kDefaultFormState);

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>): void =>{
        const fieldValue = event.target.value;
        const fieldName = event.target.name;
        const newFormData = {...regFormData, [fieldName]:fieldValue}
        console.log("newFormData:", newFormData);
        setRegFormData(newFormData);
    }

    const handleSubmit = (event:any): void => {
    event.preventDefault()
    handleRegisterSubmit(regFormData)
    setRegFormData(kDefaultFormState);
    }

    return (
        <div className="reg-form-container">
            <header>
                <LoginHeader/>
            </header>
            <h2>Registration</h2>
            <form className="reg-form" onClick={handleSubmit}>
                <label htmlFor="text">Username</label>
                <input type="text" value={regFormData.username} onChange={handleChange} placeholder="Username" name="username"></input>
                <label htmlFor="password">Password</label>
                <input type="password" value={regFormData.password} onChange={handleChange} placeholder="********" name="password"></input>
                {/* <button type="submit">Register</button> */}
                <Button variant="light" size="sm" type="submit" onClick={()=> handleRegisterSubmit(regFormData.username)}>Register</Button>
            </form>
            {/* <button onClick={() => props.onFormSwitch('login')}>Already Have Account? Login Here.</button> */}
            <Button variant="link" onClick={onFormSwitch('login')}>Already Have Account? Login Here.</Button>
            <footer>
                <Footer/>
            </footer>
        </div>

    )
};


export default Register;
