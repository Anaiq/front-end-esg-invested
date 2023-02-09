import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale, //y
    BarElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';
    import { Bar } from 'react-chartjs-2';

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    

interface IGoalChart2Props {
} 

const GoalChart2: React.FunctionComponent<IGoalChart2Props> = () => {
    
    const data = {
        labels:['AAA', 'AA', 'A', 'BBB', 'BB', 'B', 'CCC', 'CC'],
        datasets:[
            {
                label: '',
                data: [30, 20, 15, 15, 10,10, 0, 0],
                backgroundColor: 'green',
                borderColor: 'black',
                borderWidth: 2
            },
        ],
    }

    const options = {};

    return(
        <div>
            <h2>ESG Portfolio Goals</h2>
            <Bar 
            data={data}
            options={options}>
            </Bar>
        </div>
        
    );
};

export default GoalChart2;
