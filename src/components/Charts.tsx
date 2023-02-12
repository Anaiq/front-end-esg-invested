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
        labels:['AAA', 'AA', 'A', 'BBB', 'BB', 'B', 'CCC', 'C'],
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
                data: [portfolioChartData.AAA, portfolioChartData.AA, portfolioChartData.A, portfolioChartData.BBB, 
                    portfolioChartData.BB, portfolioChartData.B, portfolioChartData.CCC, portfolioChartData.CC],
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
