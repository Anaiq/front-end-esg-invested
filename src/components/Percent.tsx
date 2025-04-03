import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './Percent.module.css';

interface IPercentProps {
    total:number;
}

const Percent: React.FunctionComponent<IPercentProps> = ({total}) => {
    // const [newTotal, setNewTotal] = useState(total);

    useEffect( () => {
        console.log(`total: ${total}`)
        // setNewTotal(newTotal)
    },
    [total]
    );

    let percentStyle = styles.validPercent;
    switch (true) {
        case total === 100:
            percentStyle = styles.oneHundredPercent;
            break;
        case total > 100:
            percentStyle = styles.invalidPercent;
            break;
        default:
            percentStyle = styles.validPercent;
    }

    console.log(`styling for percent: ${percentStyle}`)
    return (
        <div className='container'>
        <h4>Percentage total: <span className={percentStyle}>{total}</span></h4>
        </div>
    );
};

export default Percent
;
