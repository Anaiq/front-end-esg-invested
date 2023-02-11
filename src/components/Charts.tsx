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
    getPortfolioChartData:any
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

const Charts: React.FunctionComponent<IChartsProps> = ({goalChartData, portfolioChartData, getPortfolioChartData}) => {
    
    
    const data = {
        labels:["AAA", "AA", "BBB", "BB", "B", "CCC", "CC"],
        datasets:[
            {
                label: "ESG Portfolio Goals",
                data: [goalChartData.AAA, goalChartData.AA, goalChartData.A, goalChartData.BBB, 
                    goalChartData.BB, goalChartData.BB, goalChartData.CCC, goalChartData.CC],
                backgroundColor: "green",
                borderColor: 'black',
                borderWidth: 2
            },
            {
                label: "Current ESG Portfolio",
                data: [portfolioChartData.AAA, portfolioChartData.AA, portfolioChartData.A, portfolioChartData.BBB, 
                    portfolioChartData.BB, portfolioChartData.BB, portfolioChartData.CCC, portfolioChartData.CC],
                backgroundColor: "#595959",
                borderColor: 'black',
                borderWidth: 2
            },
        ],
    }

    // const options = {};

    return(
        <Bar data={data}
        options={options}>
        </Bar>
    );
};

export default Charts;
