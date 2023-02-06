import * as React from 'react';
import Goal from './Goal';
import Button from 'react-bootstrap/Button'

interface IGoalListProps {
}

const GoalList: React.FunctionComponent<IGoalListProps> = (props) => {
    return (
        <>
            <Goal />
            <Button as="input" type="submit" value="submit" variant="secondary"></Button>
        </>
            
    );
};

export default GoalList;
