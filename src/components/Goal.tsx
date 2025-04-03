import * as React from 'react';
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FormLabel } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Percent from './Percent';
import { GoalChartData } from '../types/auth';


interface IGoalProps {
    handleGoalChangeSubmit:(goalChartData: {})=> void;
    goalChartData: {
        AAA:number;
        AA:number;
        A:number;
        BBB:number;
        BB:number;
        B:number;
        CCC:number;
        CC:number;
        // [key: string]: number;
}
    // goalChartData:GoalChartData
}

const Goal: React.FunctionComponent<IGoalProps> = ({handleGoalChangeSubmit, goalChartData}) => {
    const [goalFormData, setGoalFormData] = useState(goalChartData);
    // const [alertShown, setAlertShown] = useState<boolean>();
    // const [total, setTotal] = useState(0);

    const handleGoalChange = (event:React.ChangeEvent<HTMLInputElement>): void =>{
        const fieldValue = event.target.value;
        // let fieldValue = event.target.value;
        // if (fieldValue === '' || isNaN(parseInt(fieldValue))) {
        //     fieldValue = '0'
        // }

        // const parsedFieldValue = parseInt(fieldValue)


        console.log(`current fieldValue: ${fieldValue}`)
        const fieldName = event.target.name;
        console.log(`current fieldName: ${fieldName}`)
        const newGoalFormData= {...goalFormData, [fieldName]:fieldValue}
        // const newGoalFormData= {...goalFormData, [fieldName]:parsedFieldValue}
        
        console.log('newGoalFormData: ', newGoalFormData);
        setGoalFormData(newGoalFormData);
        checkValidGoalFormData(newGoalFormData)
    };

    const handleGoalSubmit = (event:any): void => {
        event.preventDefault()
    if (!goalFormData) {
        return;
    } else {
        handleGoalChangeSubmit(goalFormData)
        console.log(`goalData: ${JSON.stringify(goalFormData, null, 2)}`);
    } ;
    };

    const checkValidGoalFormData = (updatedFormValues:GoalChartData) => {
        let total = 0;
        for (let key in updatedFormValues) {
            total += updatedFormValues[key];
            console.log(`current total : ${total}`)
        }
        return total;
    }

    // useEffect(() => {
    //     const newTotal = checkValidGoalFormData(goalFormData)
    //     if (newTotal > 100 && !alertShown) {
    //         alert('Percentage is over 100%')
    //         setAlertShown(true);
    //         setTotal(newTotal);
    //     } else if (newTotal <=100 && alertShown) {
    //         setAlertShown(false);
    //         setTotal(newTotal);
    //     }
    // },
    // [goalFormData, total, alertShown]);
    
    // console.log(`total being passed down as prop to Percentage component: ${total}`)
    

    return (
        <div className='container'>
                <Form onSubmit={handleGoalSubmit}>
                    <Row className='mb-3 text-md-center'>
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
                    <Row className="mb-5 text-center">
                            <Col><h5>Place choose Maximal rating for each ESG Category</h5></Col>
                            <Col className='col-3'><Percent /></Col>
                            {/* <Col className='col-3'><Percent total={total}/></Col> */}
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label><strong>AAA</strong></Form.Label>
                            <Form.Control onChange={handleGoalChange} name="AAA" type="text"   size="lg" placeholder="AAA"  />
                            {/* <Form.Control onChange={handleGoalChange} name="AAA" type="text"   size="lg" placeholder={goalFormData.AAA.toString()} /> */}
                        </Col>
                        <Col>
                            <Form.Label><strong>AA</strong></Form.Label>
                            <Form.Control onChange={handleGoalChange} name="AA" type="text"   size="lg"placeholder="AA" />
                            {/* <Form.Control onChange={handleGoalChange} name="AA" type="text"   size="lg"placeholder={goalFormData.AA.toString()}  /> */}
                        </Col>
                        <Col>
                            <Form.Label><strong>A</strong></Form.Label>
                            <Form.Control onChange={handleGoalChange} name="A"type="text"    size="lg" placeholder="A"  />
                            {/* <Form.Control onChange={handleGoalChange} name="A"type="text"    size="lg" placeholder={goalFormData.A.toString()}  /> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label><strong>BBB</strong></Form.Label>    
                            <Form.Control onChange={handleGoalChange} name="BBB" type="text"    size="lg" placeholder="BBB"  />
                            {/* <Form.Control onChange={handleGoalChange} name="BBB" type="text"    size="lg" placeholder={goalFormData.BBB.toString()}  /> */}
                        </Col>
                        <Col>
                            <Form.Label><strong>BB</strong></Form.Label> 
                            <Form.Control onChange={handleGoalChange} name="BB" type="text"  size="lg" placeholder="BB"  />
                            {/* <Form.Control onChange={handleGoalChange} name="BB" type="text"  size="lg" placeholder={goalFormData.BB.toString()}  /> */}
                        </Col>
                        <Col>
                            <Form.Label><strong>B</strong></Form.Label> 
                            <Form.Control onChange={handleGoalChange} name="B" type="text"   size="lg" placeholder="B"  />
                            {/* <Form.Control onChange={handleGoalChange} name="B" type="text"   size="lg" placeholder={goalFormData.B.toString()}  /> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label><strong>CCC</strong></Form.Label> 
                            <Form.Control onChange={handleGoalChange} name="CCC" type="text"   size="lg" placeholder="CCC"  />
                            {/* <Form.Control onChange={handleGoalChange} name="CCC" type="text"   size="lg" placeholder={goalFormData.CCC.toString()}  /> */}
                        </Col>
                        <Col>
                            <Form.Label><strong>CC</strong></Form.Label> 
                            <Form.Control onChange={handleGoalChange} name="CC" type="text"   size="lg" placeholder="CC"  />
                            {/* <Form.Control onChange={handleGoalChange} name="CC" type="text"   size="lg" placeholder={goalFormData.CC.toString()}  /> */}
                        </Col>
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

