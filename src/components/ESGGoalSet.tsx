import * as React from 'react';
import { Investor } from '../models/investorModel';
import Header from './Header'; 
import Footer from './Footer';
import Goal from './Goal';
import GoalChart from './GoalChart';

interface IESGGoalSetProps {
    investor: Investor;
    handleGoalChangeSubmit:any;
    goalChartData:{
        AAA:number,
        AA:number,
        A:number,
        BBB:number,
        BB:number,
        B:number,
        CCC:number,
        CC:number,
        }
    
}

const ESGGoalSet: React.FunctionComponent<IESGGoalSetProps> = ({investor, handleGoalChangeSubmit, goalChartData}) => {
    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col">
                    <header>
                        <Header/>
                    </header>
                </div>  
            </div>

            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            <div className="row  mb-5"><h2>{`${investor.investorName}`}, Plan your ESG goals here.</h2></div>


            <div className="container  mb-5">
                <div className="row text-center mb-5"><h2>ESG Ratings Goals</h2></div>
                <div className="col"></div>
                <div className="col shadow p-3 mb-5 bg-body-tertiary rounded">
                    <GoalChart goalChartData={goalChartData}/>
                </div>
                <div className="col"></div>
            </div>

            <div className="row mb-5"></div>
            <div className="row mb-5"></div>
            
            <div className="container  mb-5">
                <div className="col"></div>
                <div className="col">
                    <Goal goalChartData={goalChartData} handleGoalChangeSubmit={handleGoalChangeSubmit}/>
                </div>
                <div className="col"></div>
            </div>
            
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default ESGGoalSet;

            
            
            