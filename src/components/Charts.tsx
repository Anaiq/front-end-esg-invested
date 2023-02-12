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

export const options = {};

interface IChartsProps {
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

const Charts: React.FunctionComponent<IChartsProps> = ({goalChartData}) => {
    const data = {
        labels:["AAA", "AA", "BBB", "BB", "B", "CCC", "CC"],
        datasets:[
            {
                label: "ESG Portfolio Goals",
                data: [goalChartData.AAA, goalChartData.AA, goalChartData.A, goalChartData.BBB, 
                    goalChartData.BB, goalChartData.BB, goalChartData.CCC, goalChartData.CC],
                backgroundColor: "#18BC9C",
                borderColor: 'black',
                borderWidth: 1
            },
            {
                label: "Current ESG Portfolio",
                data: [10, 10, 16, 12, 22, 8, 14, 5],
                backgroundColor: "#2C3E50",
                borderColor: 'black',
                borderWidth: 1
            },
        ],
    }

    // const options = {};

    return(
        <div className="container">
            <Bar data={data}
                options={options}>
            </Bar>
        </div>
        
    );
};

export default Charts;
