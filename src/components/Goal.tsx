import * as React from 'react';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';


interface IGoalProps {
    handleGoalChangeSubmit:any;
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
}

const Goal: React.FunctionComponent<IGoalProps> = ({handleGoalChangeSubmit, goalChartData}) => {

    const [goalFormData, setGoalFormData] = useState(goalChartData);

    const handleGoalChange = (event:React.ChangeEvent<HTMLInputElement>): void =>{
        const fieldValue = parseInt(event.target.value, 10);
        const fieldName = event.target.name;
        const newGoalFormData= {...goalFormData, [fieldName]:fieldValue}
        console.log('newGoalFormData: ', newGoalFormData);
        setGoalFormData(newGoalFormData);
    };

    const handleGoalSubmit = (event:any): void => {
        event.preventDefault()
    if (!goalFormData) {
        return;
    } else {
        handleGoalChangeSubmit(goalFormData)
    } ;
    };


    return (
        <div className='container'>
                <Form onSubmit={handleGoalSubmit}>
                    <Row className='mb-3 text-md-center'>
                        <Col>
                            <Form.Label><legend>Environmental</legend></Form.Label>
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
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label><strong>AAA</strong></Form.Label>
                            <Form.Control onChange={handleGoalChange} name="AAA" type="text"   size="lg" placeholder="AAA" />
                        </Col>
                        <Col>
                            <Form.Label><strong>AA</strong></Form.Label>
                            <Form.Control onChange={handleGoalChange} name="AA" type="text"   size="lg" placeholder="AA" />
                        </Col>
                        <Col>
                            <Form.Label><strong>A</strong></Form.Label>
                            <Form.Control onChange={handleGoalChange} name="A"type="text"    size="lg" placeholder="A" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label><strong>BBB</strong></Form.Label>    
                            <Form.Control onChange={handleGoalChange} name="BBB" type="text"    size="lg" placeholder="BBB" />
                        </Col>
                        <Col>
                            <Form.Label><strong>BB</strong></Form.Label> 
                            <Form.Control onChange={handleGoalChange} name="BB" type="text"  size="lg" placeholder="BB" />
                        </Col>
                        <Col>
                            <Form.Label><strong>B</strong></Form.Label> 
                            <Form.Control onChange={handleGoalChange} name="B" type="text"   size="lg" placeholder="B" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label><strong>CCC</strong></Form.Label> 
                            <Form.Control onChange={handleGoalChange} name="CCC" type="text"   size="lg" placeholder="CCC" />
                        </Col>
                        <Col>
                            <Form.Label><strong>CC</strong></Form.Label> 
                            <Form.Control onChange={handleGoalChange} name="CC" type="text"   size="lg" placeholder="CC" />
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

