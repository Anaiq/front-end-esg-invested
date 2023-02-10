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
    

interface IGoalChartProps {
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
// parseInt(goalChartData.AAA, 10)

const GoalChart: React.FunctionComponent<IGoalChartProps> = ({goalChartData}) => {
    
    const data = {
        labels:['AAA', 'AA', 'A', 'BBB', 'BB', 'B', 'CCC', 'CC'],
        datasets:[
            {
                label: 'ESG Ratings',
                data: [goalChartData.AAA, goalChartData.AA, goalChartData.A, goalChartData.BBB, 
                    goalChartData.BB, goalChartData.BB, goalChartData.CCC, goalChartData.CC],
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

export default GoalChart;
