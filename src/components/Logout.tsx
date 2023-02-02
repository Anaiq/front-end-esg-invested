import React from "react";
import { useState } from 'react';
import "./Logout.css";
import Header from "./Header";
import Footer from "./Footer";
import Button from 'react-bootstrap/Button';


const Logout= (props:any) => {
    return (
        <section>
            <header>
                <Header/>
            </header>
            <main>
                <h1> Goodbye, "(Name of Investor Here)"!</h1>
            </main>
            <footer>
                <Footer/>
            </footer>
            {/* <h2>Login</h2>
            <form className="login-form" onClick={handleSubmit}>
                <label htmlFor="text">Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" name="username"></input>
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" name="password"></input> */}
                {/* <button type="submit">Login</button> */}
                {/* <Button variant="light" size="sm" type="submit">Login</Button> */}
            {/* </form> */}
            {/* <button onClick={() => props.onFormSwitch('register')}>Need an Account? Register Here.</button> */}
            {/* <Button variant="link" onClick={() => props.onFormSwitch('register')}>Need an Account? Register Here.</Button> */}
        </section>
    );
};

export default Logout;
