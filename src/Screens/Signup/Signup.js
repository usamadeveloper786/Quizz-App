import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Signup = () => {
    return (
        <>
            <section>
                <div className='form--cmp'>
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12} lg={6} >
                                <h3 className="mb-3 text-center">Signup Here</h3>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox" label="I agree the Terms & Conditions." />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" className="m-auto d-block">
                                        Signup
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
}

export default Signup;