import * as React from 'react';
import styles  from './Warning.module.css'

interface IWarningProps {
}

const Warning: React.FunctionComponent<IWarningProps> = () => {

    const warningStyle = styles.invalidPercent;

    return (
        <div className='container' >
            <h4 className={warningStyle}> Your percentage total is greater than 100%.&nbsp;&nbsp;&nbsp;&nbsp;Please adjust your percentages.</h4>
        </div>
    );
};

export default Warning;
