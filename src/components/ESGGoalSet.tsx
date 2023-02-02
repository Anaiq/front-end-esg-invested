import * as React from 'react';
import GoalChart from './GoalChart';
import GoalList from './GoalList';
import {Link} from 'react-router-dom';

interface IESGGoalSetProps {
}

const ESGGoalSet: React.FunctionComponent<IESGGoalSetProps> = (props) => {
    return (
        <section>
            <h2>PLan your ESG Goals here!!</h2>
            <div className="goal-chart">
                <GoalChart />
            </div>    
            <div className="goal-list">
                <GoalList />
            </div>
        </section>
    );
};

export default ESGGoalSet;

