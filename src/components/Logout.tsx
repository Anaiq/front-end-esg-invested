import React from "react";
import { useState } from 'react';
import "./Logout.css";
import { Investor } from "../models/investorModel";
import LoginHeader from "./LoginHeader";
import Footer from "./Footer";

interface ILogoutProps {
    investor: Investor;
}

const Logout: React.FunctionComponent<ILogoutProps> = ({investor}) => {
    return (
        <div>
            <header>
                <LoginHeader/>
            </header>
            <main>
                <h1> Goodbye, {`${investor.investorName}`}!</h1>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Logout;




