import React from "react";
import { useState } from 'react';
import "./Logout.css";
import LoginHeader from "./LoginHeader";
import Footer from "./Footer";
import Button from 'react-bootstrap/Button';


const Logout= (props:any) => {
    return (
        <div>
            <header>
                <LoginHeader/>
            </header>
            <main>
                <h1> Goodbye, "(Name of Investor Here)"!</h1>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Logout;
