import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
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
}

const Register: React.FunctionComponent<IRegisterProps> = ({ handleRegisterSubmit }) => {
// const Register = (props:any) => {
    const [regFormData, setRegFormData] = useState(kDefaultFormState);

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>): void =>{
        const fieldValue = event.target.value;
        const fieldName = event.target.name;
        const newFormData = {...regFormData, [fieldName]:fieldValue}
        // console.log("newFormData:", newFormData);
        setRegFormData(newFormData);
    }

    const navigate = useNavigate();

    const handleSubmit = (event:any): void => {
    event.preventDefault()
    handleRegisterSubmit(regFormData)
    setRegFormData(kDefaultFormState);
    navigate('/portfolio');
    }

    return (
        <div className="reg-form-container">
            <header>
                <LoginHeader/>
            </header>
            <h2>Registration</h2>
            <form className="reg-form" onSubmit={handleSubmit}>
                <label htmlFor="text">Username</label>
                <input type="text" value={regFormData.username} onChange={handleChange} placeholder="Username" name="username"></input>
                <label htmlFor="password">Password</label>
                <input type="password" value={regFormData.password} onChange={handleChange} placeholder="********" name="password"></input>
                {/* <button type="submit">Register</button> */}
                <Button variant="light" size="sm" type="submit">Register</Button>
            </form>
            <Link to='/'>Already Have Account? Login Here.</Link>
            {/* <footer>
                <Footer/>
            </footer> */}
        </div>

    )
};


export default Register;
