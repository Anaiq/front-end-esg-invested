import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./Login.css";
import LoginHeader from './LoginHeader';
import Footer from './Footer';
import esgscale from '../assets/images/esgscale.png';
import esgtree from '../assets/images/esgtree.png';
import esgmagnifyingglass from '../assets/images/esgmagnifyingglass.png'
import { LoginData } from "../types/auth";

const kDefaultFormState: LoginData  = {
    username: '',
    password: ''
    };

interface ILoginProps {
    handleLoginSubmit:(kDefaultFormState: LoginData) => void;
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
                <div className="col">
                    <header>
                        <LoginHeader/>
                    </header>
                </div>  
            </div>

            <div className="row mt-5"></div>
            <div className="row mt-5"></div>

            <div className="row text-center mb-5 mt-10"><h2>Welcome to ESGInvested.</h2></div> 
        
            <div className="row shadow p-3 mb-5 bg-body-tertiary rounded mb-5">
                <div className="col">
                    <div className="card border-warning mb-3" >
                        <div className="card-header text-center">E</div>
                        <div className="card-body">
                            <h4 className="card-title">Environment</h4>
                            <div className="text-center">
                                <img  src={esgtree} alt="tree logo" width="250" height="400"  className="d-inline-block align-top"></img>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-warning mb-3" >
                        <div className="card-header text-center">S</div>
                        <div className="card-body">
                            <h4 className="card-title">Social</h4>
                            <div className="text-center">
                                <img  src={esgscale} alt="scale logo" width="250" height="400"  className="d-inline-block align-top"></img>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card border-warning mb-3" >
                        <div className="card-header text-center">G</div>
                            <div className="card-body">
                                <h4 className="card-title ">Governance</h4>
                                <div className="text-center">
                                    <img  src={esgmagnifyingglass} alt="scale logo" width="250" height="400"  className="d-inline-block align-top"></img>
                                </div> 
                        </div>
                    </div>
                </div>
            </div>

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
            

            <div className="row mb-5 text-center">
                <footer>
                    <Footer/>
                </footer>
            </div>
        </div>
    );
};

export default Login;