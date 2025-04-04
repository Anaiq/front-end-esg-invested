import React from "react";
import "./Logout.module.css";
import { Investor } from "../models/investorModel";
import LoginHeader from "./LoginHeader";
import Footer from "./Footer";

interface ILogoutProps {
    investor: Investor;
}

const Logout: React.FunctionComponent<ILogoutProps> = ({investor}) => {
    return (
        <div className="container">
            <div className="row mb-5">
                <header>
                    <LoginHeader/>
                </header>
            </div>

            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            
            <div className="row mb-5 text-center">
                <h1> Goodbye, {`${investor.investorName}`}!</h1>
            </div>
    
            <div className="container  text-center">
                <div className="row mb-5">
                    <div className="col-3 mb-5 text-primary shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div className="card text-white bg-success mb-3" >
                            <div className="card-body">
                                <h4 className="card-title">Develop Financial Literacy.</h4>
                                <p className="card-text"></p>
                            </div>
                        </div> 
                    </div>
                    <div className="col-3 mb-5 text-primary shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div className="card text-white bg-success mb-3" >
                            <div className="card-body">
                                <h4 className="card-title">Boost Financial Health.</h4>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mb-5 text-primary shadow p-3 mb-5 bg-body-tertiary rounded" >
                        <div className="card text-white bg-success mb-3" >
                            <div className="card-body">
                                <h4 className="card-title">Create Financial Freedom.</h4>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 mb-5 text-primary shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div className="card text-white bg-success mb-3" >
                            <div className="card-body">
                                <h4 className="card-title">Transfer generational Wealth.</h4>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-5 text-primary text-center"><h2>❤️ QP</h2></div> 
            </div>   
            

            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>

            <div className="row mb-5 text-center">
                <footer>
                    <Footer/>
                </footer>
            </div>
        </div>
    );
};

export default Logout;