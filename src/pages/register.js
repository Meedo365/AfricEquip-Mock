import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Card from 'react-bootstrap/Card';
import { Icon } from '@iconify/react';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import GoToTop from "../components/goToTop";

function Register() {
    const [showPassword, setShowPassword] = useState('password');
    let handleShowPassword = () => {
        showPassword === 'password' ? setShowPassword('text') : setShowPassword('password')
    };
    let register = () => {
        alert('aaaa')
    };
    return <>
        <NavBar />

        <Container>
            <Row className="my-4">
                <Col className="py-3" lg='8'>
                    <Card className="account-container">
                        <div className="account-header flex">
                            <Icon icon="bxs:user-plus" width="35" height="35" />
                            <h3>Create your account, It's 100% free</h3>
                        </div>

                        <div className="account-body">
                            <hr className="mx-3 " />
                            <Form>
                                <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
                                    <Row className="align-items-center">
                                        <Col md="3">
                                            <span className="flex">
                                                <Form.Label className="">Name</Form.Label>
                                                <Icon icon="lucide:asterisk" color="red" width="20" height="15" />
                                            </span>
                                        </Col>
                                        <Col md="9">
                                            <Form.Control
                                                type="text"
                                                placeholder="Name"
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
                                    <Row className="align-items-center">
                                        <Col md="3">
                                            <Form.Label className="">Phone</Form.Label>
                                        </Col>
                                        <Col md="9">
                                            <span className="spanInput flex">
                                                <Icon icon="twemoji:flag-nigeria" width="36" height="36" />
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Phone Number"
                                                    min='0'
                                                />
                                                <div className="flex" style={{ alignItems: 'center', margin: '3px' }}>
                                                    <OverlayTrigger key="top" placement="top" overlay={
                                                        <Tooltip id="tooltip-top">
                                                            Hide the phone number on the listings
                                                        </Tooltip>
                                                    }>
                                                        <span className="flex">
                                                            <input id="hide-checkbox" type='checkbox' />
                                                            <label for="hide-checkbox" style={{ marginLeft: '3px' }}>Hide</label>
                                                        </span>
                                                    </OverlayTrigger>
                                                </div>
                                            </span>
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
                                    <Row className="align-items-center">
                                        <Col md="3">
                                            <Form.Label className="">Email</Form.Label>
                                        </Col>
                                        <Col md="9">
                                            <span className="spanInput flex">
                                                <Icon icon="ci:mail" width="36" height="36" />
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Email"
                                                />
                                            </span>
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
                                    <Row className="align-items-start">
                                        <Col md="3">
                                            <span className="flex">
                                                <Form.Label className="">Password</Form.Label>
                                                <Icon icon="lucide:asterisk" color="red" width="20" height="15" />
                                            </span>
                                        </Col>
                                        <Col className="mt-0" md="9">
                                            <span className="spanInput flex">
                                                <Form.Control
                                                    type={showPassword}
                                                    placeholder="Password"
                                                />
                                                <Icon onClick={handleShowPassword} id="show-password" icon="quill:eye-closed" width="30" height="30" hFlip={true} />
                                            </span>

                                            <Form.Control className="mt-2"
                                                type="password"
                                                placeholder="Password Confirmation"
                                            />
                                            <p className="mt-1" style={{ fontSize: '12px', color: 'gray' }}>At least 6 characters</p>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <div className="captcha mb-2">
                                            <h3>Captcha Here</h3>
                                        </div>

                                        <div className="captchaInput mb-2">
                                            <p>Please enter the security code shown in the image above in the field below:</p>
                                            <input type='text' />
                                        </div>
                                    </Row>

                                    <Row>
                                        <span className="flex mb-2">
                                            <input id="checkbox" type='checkbox' />
                                            <label id="checkboxLabel" for="checkbox">
                                                I have read and agree to the <Link to="/terms&conditions">
                                                    Terms & Condition
                                                </Link>
                                            </label>
                                        </span>

                                        <span className="flex mb-3">
                                            <input id="checkbox1" type='checkbox' />
                                            <label id="checkboxLabel" for="checkbox1">
                                                I accept to receive marketing emails.
                                            </label>
                                        </span>

                                        <Button className="p-2" id="modal-login" onClick={register} style={{ width: 'max-content' }}>
                                            Register
                                        </Button>

                                    </Row>
                                </Form.Group>
                            </Form>
                        </div>
                    </Card>
                </Col>

                <Col className="reg-right-col text-center py-3" lg='4'>
                    <Row>
                        <Col className="m-3 px-2 pb-3" lg='11' md="3">
                            <Icon style={{ borderRadius: '5px', background: '#ff9113' }} icon="ep:picture-filled" color="white" width="56" height="45" />
                            <h3 className="py-2">Create New Listing</h3>
                            <p>Do you have something to sell, to rent, any service to offer or a job offer? Post it at African Heavy Duty Equipment Leasing, its free, for local business and very easy to use!</p>
                        </Col>

                        <Col className="m-3 px-2 pb-3" lg='11' md="4">
                            <Icon style={{ borderRadius: '5px', background: '#e6c840', width: '50px', height: '40px', padding: '5px' }} icon="fa-solid:pen" color="white" width="56" height="45" />
                            <h3 className="py-2">Create and Manage Items</h3>
                            <p>Become a best seller or buyer. Create and Manage your listings. Repost your old listings, etc.</p>
                        </Col>

                        <Col className="m-3 px-2 pb-3" lg='11' md="3">
                            <Icon icon="bi:heart-fill" color="#74c29b" width="56" height="45" />
                            <h3 className="py-2">Create your favorite listings list.</h3>
                            <p>Create your favorite listings list. And save your search. Don't forget any deal.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

        <div style={{ background: 'whitesmoke', borderTop: '1px solid silver' }}>
            <Footer />
        </div>

        <GoToTop />

    </>
}

export default Register;