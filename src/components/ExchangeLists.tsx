import * as React from 'react';
import Table from 'react-bootstrap/Table';
import ExchangeStocks, {ExchangeStock} from './ExchangeStocks';

interface ExchangeList {
    exchanges: ExchangeStock[]
}

const ExchangeLists: React.FunctionComponent<ExchangeList> = ({exchanges}) => {
    return (
        <section>
            <h2> ESG Stock Exchange</h2>
            <Table striped>
                <thead>
                    <tr>
                        <th>Stock Symbol</th>
                        <th>Company Name</th>
                        <th>Current Stock Price</th>
                        <th>Environment Rating</th>
                        <th>Social Rating</th>
                        <th>Governance Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {exchanges.map((exchange) => (<ExchangeStocks {...exchange}/>))}
                </tbody>
            </Table>
            <ul>
                
                {/* <li>Amazon.com Inc.</li>
                <li>Alphabet Inc. Class A</li>
                <li>Berkshire Hathaway Inc. Class B</li>
                <li>Alphabet Inc. Class C</li>
                <li>NVIDIA Corporation</li>
                <li>Exxon Mobil Corporation</li>
                <li>UnitedHealth Group Incorporated</li>
                <li>Johnson & Johnson</li>
                <li>JPMorgan Chase & Co.</li>
                <li>Amazon.com Inc.</li>
                <li>Amazon.com Inc.</li> */}
            </ul>
        </section>
        
    );
};

export default ExchangeLists;
