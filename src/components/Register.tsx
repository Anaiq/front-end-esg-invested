import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
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

    console.log('regFormData.username: ', regFormData.username);
    console.log('regFormData.password: ', regFormData.password);

    const navigate = useNavigate();

    const handleSubmit = (event:any): void => {
    event.preventDefault()
    if (!regFormData.username || ! regFormData.password) return;
    if (regFormData=== undefined) {
        return;
    } else {
        handleRegisterSubmit(regFormData)
        // setRegFormData(kDefaultFormState);
        navigate('/portfolio');
    }
    };

    return (
        <div className="container">
            <div className="row mb-5">
                <header>
                    <LoginHeader/>
                </header>
            </div>

            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row">
                <div className="col"></div>
                    <div className="mb-3 col-4 reg-form-container">
                        <form className="reg-form text-primary" onSubmit={handleSubmit}>
                            <label className="form-label" htmlFor="username">Username</label>
                            <input type="text" id="username" value={regFormData.username} onChange={handleChange} placeholder="Username" name="username"></input>
                            <label className="form-label" htmlFor="password">Password</label>
                            <input type="password" id="password" value={regFormData.password} onChange={handleChange} placeholder="********" name="password"></input>
                            <button className="btn btn-primary" type="submit" value="Register">Register</button>
                        </form>
                    </div>
                <div className="col"></div>
            </div>

            <div className="col mb-5 text-center">
                <Link to='/'>Already Have Account? Login Here.</Link>
            </div>

            <div className="row mb-5 text-center">
                <footer>
                    <Footer/>
                </footer>
            </div>
        </div>
    );
};


export default Register;
