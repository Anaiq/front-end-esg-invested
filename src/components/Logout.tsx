import React from "react";
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
            <div>
                <h1> Goodbye, {`${investor.investorName}`}!</h1>
                <></>
                <section className="develop">"Develop Financial Literacy... Boost Financial Health.... Create Financial Freedom... Pass on  generational Wealth..."</section>
                <section className="free">Become Free.</section>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Logout;




