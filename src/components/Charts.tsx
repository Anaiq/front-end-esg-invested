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
    
interface IChartsProps {
}

const Charts: React.FunctionComponent<IChartsProps> = (props) => {
    const data = {
        labels:["AAA", "AA", "BBB", "BB", "B", "CCC", "CC"],
        datasets:[
            {
                label: "ESG Portolio Goals",
                data: [0.8, 0.5, 0.5, 0.87, 0.36, 0.4, 0.12],
                backgroundColor: "#A6A6A6",
                borderColor: 'black',
                borderWidth: 1
            },
            {
                label: "Current ESG Portfolio",
                data: [0.67, 0.52, 0.69, 0.46, 0.89, 0.18, 0.23],
                backgroundColor: "#595959",
                borderColor: 'black',
                borderWidth: 1
            },
        ],
    }

    const options = {};

    return(
        <Bar data={data}
        options={options}>
        </Bar>
    );
};

export default Charts;
