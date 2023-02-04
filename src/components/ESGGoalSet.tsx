import * as React from 'react';
import Header from './Header'; 
import Footer from './Footer';
import GoalChart from './GoalChart';
import GoalList from './GoalList';

interface IESGGoalSetProps {
}

const ESGGoalSet: React.FunctionComponent<IESGGoalSetProps> = (props) => {
    return (
        <section>
            <header>
                <Header/>
            </header>
            <main className="main">
                <h2>PLan your ESG Goals here!!</h2>
                <div className="goal-chart">
                    <GoalChart />
                </div>    
                <div className="goal-list">
                    <GoalList />
                    </div>
            </main>
            
            <footer>
                <Footer/>
            </footer>
        </section>
    );
};

export default ESGGoalSet;

            
            
            