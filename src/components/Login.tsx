import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./Login.css";
import LoginHeader from './LoginHeader';
import Footer from './Footer';

const kDefaultFormState = {
    username: '',
    password: ''
    };

interface ILoginProps {
    handleLoginSubmit: any,
}

const Login: React.FunctionComponent<ILoginProps> = ({ handleLoginSubmit}) => {
    const [loginFormData, setLoginFormData] = useState(kDefaultFormState);


    const handleChange = (event:React.ChangeEvent<HTMLInputElement>): void =>{
        const fieldValue = event.target.value;
        const fieldName = event.target.name;
        const newFormData = {...loginFormData, [fieldName]:fieldValue};
        console.log("newFormData:", newFormData);
        setLoginFormData(newFormData);
    }

    console.log('loginFormData.username: ', loginFormData.username);
    console.log('loginFormData.password: ', loginFormData.password);

    const navigate = useNavigate();

    const handleSubmit = (event:any): void => {
    event.preventDefault()
    if (!loginFormData.username || !loginFormData.password) return;
    if (loginFormData === undefined) {
        return;
    } else {
        handleLoginSubmit(loginFormData)
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
                <div className="mb-3 col-4 login-form-container">
                    <form className="login-form text-primary" onSubmit={handleSubmit}>
                        <label className="form-label" htmlFor="username" >Username</label>
                        <input type="text" id="username" value={loginFormData.username} onChange={handleChange} placeholder="Username" name="username"></input>
                        <label className="form-label" htmlFor="password">Password</label>
                        <input type="password" id="password" value={loginFormData.password} onChange={handleChange} placeholder="********" name="password"></input>
                        <button className="btn btn-primary"  type="submit" value="Log In" >Login</button>
                    </form>
                </div>
            <div className="col"></div>
        </div>
            
        <div className="col mb-5 text-center">
            <Link to='/register'>Need an Account? Register Here.</Link>
        </div>
        
        <div className="row shadow p-3 mb-5 bg-body-tertiary rounded mb-5">
            <div className="col">
                <div className="card border-light mb-3" >
                    <div className="card-header text-center">E</div>
                    <div className="card-body">
                        <h4 className="card-title">Environment</h4>
                        <p className="card-text"> "Environment issues may include corporate climate policies, energy use,
                            waste, pollution, natural resource conservation, and treatment of animals." (source investopedia)
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Publishes a carbon or sustainability report</li>
                            <li className="list-group-item">Limits harmful pollutants and chemicals</li>
                            <li className="list-group-item">Seeks to lower greenhouse gas emissions and CO2 footprint</li>
                            <li className="list-group-item">Uses renewable energy sources and reduces waste</li>
                        </ul> 
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card border-light mb-3" >
                    <div className="card-header text-center">S</div>
                    <div className="card-body">
                        <h4 className="card-title">Social</h4>
                        <p className="card-text">
                        "Social aspects look at the company’s relationships with internal and external stakeholders."
                        (source investopedia)
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Operates an ethical supply chains</li>
                            <li className="list-group-item">Has a high regard for employees’ health and safety
                                or avoids companies that employ child labor</li>
                            <li className="list-group-item">Supports LGBTQ+ rights and encourages all forms of diversity</li>
                            <li className="list-group-item">Has policies to protect against sexual misconduct</li>
                            <li className="list-group-item">Pays fair (living) wages</li>
                        </ul> 
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card border-light mb-3" >
                    <div className="card-header text-center">G</div>
                        <div className="card-body">
                            <h4 className="card-title ">Governance</h4>
                            <p className="card-text">
                            "Governance standards ensure a company uses accurate and transparent accounting methods, 
                            pursues integrity and diversity in selecting its leadership, and is accountable to shareholders."
                            (source investopedia)
                            </p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Embraces diversity on board of directors</li>
                                <li className="list-group-item">Embraces corporate transparency</li>
                                <li className="list-group-item">Someone other than the CEO is chair of the board</li>
                                <li className="list-group-item">Staggers board elections</li>
                            </ul>  
                        </div>
                    </div>
                </div>
            </div >

            <div className="row mb-5 text-center">
                <footer>
                    <Footer/>
                </footer>
            </div>
        </div>
    );
};

export default Login;


