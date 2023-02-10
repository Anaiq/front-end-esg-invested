import * as React from 'react';
import { Investor } from '../models/investorModel';
import Header from './Header'; 
import Footer from './Footer';
import Goal from './Goal';

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
        <div>
            <header>
                <Header/>
            </header>
            <main className='main'>
                <h2>{`${investor.investorName}`}, Plan your ESG Goals!</h2>  
                <div className='goal-list'>
                    <Goal goalChartData={goalChartData} handleGoalChangeSubmit={handleGoalChangeSubmit}/>
                </div>
            </main>
            
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default ESGGoalSet;

            
            
            