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
                <section>"Develop Financial Literacy... boost Financial Health.... create Financial Freedom... become FREE"</section>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Logout;




