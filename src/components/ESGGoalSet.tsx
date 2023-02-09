import * as React from 'react';
import { Investor } from '../models/investorModel';
import Header from './Header'; 
import Footer from './Footer';
import Goal from './Goal';

interface IESGGoalSetProps {
    investor: Investor;
}

const ESGGoalSet: React.FunctionComponent<IESGGoalSetProps> = ({investor}) => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main className='main'>
                <h2>{`${investor.investorName}`}, Plan your ESG Goals!</h2>  
                <div className='goal-list'>
                    <Goal />
                </div>
            </main>
            
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default ESGGoalSet;

            
            
            