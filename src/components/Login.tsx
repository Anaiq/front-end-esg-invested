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
    if (!loginFormData.username || !loginFormData.password ) return;
    if (loginFormData === undefined) {
        return;
    } else {
        handleLoginSubmit(loginFormData)
        navigate('/portfolio');
    }

    
    }

    return (
        <div className="container text-center">
            <header>
                <LoginHeader/>
            </header>
            <div className="row">
                <div className="col-md">
                    <h2>Login</h2>
                </div>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor='username' >Username</label>
                <input type="text" id="username" value={loginFormData.username} onChange={handleChange} placeholder="Username" name="username"></input>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={loginFormData.password} onChange={handleChange} placeholder="********" name="password"></input>
                <Button variant="light" size="sm" type="submit" value="Log In" 
                    >Login</Button>
            </form>
            <div className="col mb-5">
                <Link to='/register'>Need an Account? Register Here.</Link>
            </div>
            
            <div className="row  align-items-center">
                <div className="col">
                    <div className="card border-light mb-3" >
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h4 className="card-title">Light card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-light mb-3" >
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h4 className="card-title">Light card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-light mb-3" >
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h4 className="card-title">Light card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                
            </div >

        </div>
    );
};

export default Login;


