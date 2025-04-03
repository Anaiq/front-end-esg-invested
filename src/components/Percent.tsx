import * as React from 'react';
import { useEffect } from 'react';
import styles from './Percent.module.css';

interface IPercentProps {
    // total:number;
}
const Percent: React.FunctionComponent<IPercentProps> = () => {
// const Percent: React.FunctionComponent<IPercentProps> = ({total}) => {
    // useEffect( () => {
    //     console.log(`total: ${total}`)
    // },
    // [total]
    // );

    // console.log(`is total more than 100? ${total > 100}` );
    // const percentStyle = total > 100 ?  styles.invalidPercent : styles.validPercent;
    // console.log(`styling for percent: ${percentStyle}`)
    return (
        <div className='container'>
        <h4>Max total: 100%</h4>
        {/* <h4>Max total: <span className={percentStyle}>{total}</span></h4> */}
        </div>
    );
};

export default Percent
;
