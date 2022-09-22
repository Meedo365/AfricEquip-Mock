import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { Icon } from '@iconify/react';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import GoToTop from "../components/goToTop";

function LoginPage() {
    const [showPassword, setShowPassword] = useState('password');
    let handleShowPassword = () => {
        showPassword === 'password' ? setShowPassword('text') : setShowPassword('password')
    };
    let register = () => {
        alert('aaaa')
    };
    return <>
        <NavBar />

        <Container className="passwordReset my-4">
            <Row className="justify-content-center m-1">
                <Col className="square border pt-5 px-3" lg="5" md="7" sm='12' style={{ borderRadius: '10px' }}>
                    <div className="text-center mb-3 account-header" style={{ background: 'white', color: '#4682b4' }}>
                        <h3>Log In</h3>
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Login (Email or Phone)</Form.Label>
                            <span className="flex">
                                <Icon icon="bxs:user" width="35" height="35" style={{ background: 'whitesmoke' }} />
                                <Form.Control
                                    type="email"
                                    placeholder="Email or Phone"
                                />
                            </span>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <span className="flex">
                                <Icon style={{ background: 'whitesmoke' }} icon="bxs:lock-alt" width="35" height="35" />
                                <Form.Control
                                    type={showPassword}
                                    placeholder="Password"
                                />
                                <Icon onClick={handleShowPassword} id="show-password" icon="quill:eye-closed" width="30" height="30" hFlip={true} />
                            </span>
                        </Form.Group>

                        <Row>
                            <div className="captcha">
                                <h4>Captcha Here</h4>
                            </div>

                            <div className="captchaInput">
                                <p>Please enter the security code shown in the image above in the field below:</p>
                                <Form.Control style={{ width: '50%' }}
                                    type="text"
                                />
                            </div>
                        </Row>

                        <Button className="align-self-center" id='reset-btn'>
                            Log In
                        </Button>
                    </Form>
                    <div className="flex mt-4 px-4" id="backToLogin" style={{ justifyContent: 'space-between' }}>
                        <span className="flex" style={{ border: 'none' }}>
                            <input id="checkbox" type='checkbox' />
                            <label id="checkboxLabel" for="checkbox" style={{ color: 'black' }}>Keep me logged in</label>
                        </span>

                        <Link to='/password/reset'>
                            Lost your password ?
                        </Link>
                    </div>
                </Col>

                <Col className="toRegsiter text-center m-3 p-3" lg='8'>
                    Do you have an account?<br />
                    <Link to="/register">Sign Up !</Link>
                </Col>

            </Row>


        </Container>

        <div style={{ background: 'whitesmoke', borderTop: '1px solid silver' }}>
            <Footer />
        </div>
        <GoToTop />
    </>
}

export default LoginPage;