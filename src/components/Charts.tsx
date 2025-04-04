import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
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
        portfolioChartData: {
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

const Charts: React.FunctionComponent<IChartsProps> = ({goalChartData, portfolioChartData}) => {
    
    
    const data = {
        labels:['AAA', 'AA', 'A', 'BBB', 'BB', 'B', 'CCC', 'CC'],
        datasets:[
            {
                label: "",
                data: [goalChartData.AAA, goalChartData.AA, goalChartData.A, goalChartData.BBB, 
                    goalChartData.BB, goalChartData.B, goalChartData.CCC, goalChartData.CC],
                backgroundColor: "#18BC9C",
                borderColor: 'black',
                borderWidth: 1
            },
            {
                label: "",
                data: [portfolioChartData.AAA, portfolioChartData.AA, portfolioChartData.A, portfolioChartData.BBB, 
                    portfolioChartData.BB, portfolioChartData.B, portfolioChartData.CCC, portfolioChartData.CC],
                backgroundColor: "#2C3E50",
                borderColor: 'black',
                borderWidth: 1
            },
        ],
    }

    const options = {};

    return(
        <div className="container">
            <div className="row mb-5">
                <div className="col"><h4>ESG Ratings Goals</h4></div>
                <div className="col"><h4>Portfolio ESG Ratings</h4></div>
            </div>
            <Bar data={data}
                options={options}>
            </Bar>
        </div>
        
    );
};

export default Charts;
