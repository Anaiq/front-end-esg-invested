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
}

const Charts: React.FunctionComponent<IChartsProps> = (props) => {
    const data = {
        labels:["AAA", "AA", "BBB", "BB", "B", "CCC", "CC"],
        datasets:[
            {
                label: "ESG Portfolio Goals",
                data: [15, 15, 15, 15, 10, 10, 10, 10],
                backgroundColor: "green",
                borderColor: 'black',
                borderWidth: 2
            },
            {
                label: "Current ESG Portfolio",
                data: [10, 10, 16, 12, 22, 8, 14, 5],
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
