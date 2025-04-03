import * as React from 'react';
import { useState, useEffect, FormEvent } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FormLabel } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Percent from './Percent';
import { GoalChartData } from '../types/auth';
import Warning from './Warning';
import GoalFormConfirmation from './GoalFormConfirmation';
import styles from './Goal.module.css'


interface IGoalProps {
    handleGoalChangeSubmit:(goalChartData: {})=> void;
    goalChartData:GoalChartData
}

const Goal: React.FunctionComponent<IGoalProps> = ({handleGoalChangeSubmit, goalChartData}) => {
    const [goalFormData, setGoalFormData] = useState(goalChartData);
    const [total, setTotal] = useState(0);
    const [showWarning, setShowWarning] = useState<boolean>(false);
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
    

    const handleGoalChange = (event:React.ChangeEvent<HTMLInputElement>): void =>{

        let fieldValue = event.target.value;
        if (fieldValue === '' || isNaN(parseInt(fieldValue))) {
            fieldValue = '0'
        }

        const parsedFieldValue = parseInt(fieldValue)


        console.log(`current fieldValue: ${fieldValue}`)
        const fieldName = event.target.name;
        console.log(`current fieldName: ${fieldName}`)
        const newGoalFormData= {...goalFormData, [fieldName]:parsedFieldValue}
        
        console.log('newGoalFormData: ', newGoalFormData);
        setGoalFormData(newGoalFormData);
        checkValidGoalFormData(newGoalFormData)
    };

    const handleGoalSubmit = (event:FormEvent, total:number): void => {
        event.preventDefault()
        if (!goalFormData || total !== 100) {
            return;
        } 
        setShowConfirmation(true)
        handleGoalChangeSubmit(goalFormData)
        setTimeout(() => {
            setShowConfirmation(false); 
        }, 3000);
        console.log(`goalData: ${JSON.stringify(goalFormData, null, 2)}`);
        
    };

    const checkValidGoalFormData = (updatedFormValues:GoalChartData) => {
        let total = 0;
        for (let key in updatedFormValues) {
            total += updatedFormValues[key];
            console.log(`current total : ${total}`)
        }
        return total;
    }

    useEffect(() => {
        const newTotal = checkValidGoalFormData(goalFormData)
        if (newTotal > 100 && !showWarning) {
            setShowWarning(true);
        } else if (newTotal <=100 && showWarning) {
            setShowWarning(false);
        }
        setTotal(newTotal);
    },
    [goalFormData, total, showWarning]);

    console.log(`total being passed down as prop to Percentage component: ${total}`)
    
    const warningHeight = styles.warning;
    const confirmationHeight = styles.confirmation

    return (
        <div className='container '>
                <Form onSubmit={(event) => handleGoalSubmit(event, total)}>
                    <Row className='mt-5 text-md-center'>
                        <Col>
                            <FormLabel><legend>Environmental</legend></FormLabel>
                        </Col>
                        <Col>
                            <Form.Label><legend>Social</legend></Form.Label>
                        </Col>
                        <Col>
                            <Form.Label><legend>Governance</legend></Form.Label>
                        </Col>
                    </Row>
                    <Row className="m-5 text-center">
                            <Col><h4>Place enter your desired investment percentage for each ESG Category.</h4></Col>
                            <Col className='col-3'><Percent total={total}/></Col>
                    </Row >
                    <Row className={warningHeight}>
                            {showWarning && <Warning />}
                    </Row>
                    <Row className="ms-3 me-3">
                        <Col>
                            <Form.Label><strong>AAA</strong></Form.Label>
                                <Form.Control onChange={handleGoalChange} name="AAA" type="text"   size="lg" placeholder={goalFormData.AAA.toString()} />
                        </Col>
                        <Col>
                            <Form.Label><strong>AA</strong></Form.Label>
                            <Form.Control onChange={handleGoalChange} name="AA" type="text"   size="lg" placeholder={goalFormData.AA.toString()}  />
                        </Col>
                        <Col>
                            <Form.Label><strong>A</strong></Form.Label>
                            <Form.Control onChange={handleGoalChange} name="A"type="text"    size="lg" placeholder={goalFormData.A.toString()}  />
                        </Col>
                    </Row>
                    <Row className="ms-3 me-3">
                        <Col>
                            <Form.Label><strong>BBB</strong></Form.Label>    
                            <Form.Control onChange={handleGoalChange} name="BBB" type="text"    size="lg" placeholder={goalFormData.BBB.toString()}  />
                        </Col>
                        <Col>
                            <Form.Label><strong>BB</strong></Form.Label> 
                            <Form.Control onChange={handleGoalChange} name="BB" type="text"  size="lg" placeholder={goalFormData.BB.toString()}  />
                        </Col>
                        <Col>
                            <Form.Label><strong>B</strong></Form.Label> 
                            <Form.Control onChange={handleGoalChange} name="B" type="text"   size="lg" placeholder={goalFormData.B.toString()}  />
                        </Col>
                    </Row>
                    <Row className="ms-3 me-3">
                        <Col>
                            <Form.Label><strong>CCC</strong></Form.Label> 
                            <Form.Control onChange={handleGoalChange} name="CCC" type="text"   size="lg" placeholder={goalFormData.CCC.toString()}  />
                        </Col>
                        <Col>
                            <Form.Label><strong>CC</strong></Form.Label> 
                            <Form.Control onChange={handleGoalChange} name="CC" type="text"   size="lg" placeholder={goalFormData.CC.toString()}  />
                        </Col>
                    </Row>
                    <Row className={confirmationHeight}>
                            {showConfirmation && <GoalFormConfirmation />}
                    </Row>
                    <div className='container '>
                        <div className='row mb-5 text-center'>
                            <div className="col-4"></div>
                            <div className="col">
                                <button className="btn btn-primary" type="submit" value='Set Goal'>SUBMIT YOUR GOALS</button>
                            </div>
                            <div className="col-4"></div>
                        </div>
                    </div>
                </Form>
        </div>
    );
};

export default Goal;

