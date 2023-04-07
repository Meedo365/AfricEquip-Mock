import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import { Icon } from '@iconify/react';
import Form from 'react-bootstrap/Form';
import { Link, useParams } from "react-router-dom";
import GoToTop from "../components/goToTop";
import { Store } from "../context/store";
import { useContext } from "react";
import FlashMessage from 'react-flash-message';

function NewPassword() {
    let [password, setPassword] = useState("");
    let [success, setSuccess] = useState("");
    let store = useContext(Store);
    let [mainUrl] = store.endUrl;
    let id = useParams();
    const [showPassword, setShowPassword] = useState('password');
    let handleShowPassword = () => {
        showPassword === 'password' ? setShowPassword('text') : setShowPassword('password')
    };
    let resetPassword = () => {
        let url = mainUrl + "/resetPassword";
        let data = { password };
        fetch(url, {
            headers: {
                "content-type": "application/json",
                "Authorization": id.id
            },
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                setSuccess(result.msg)
                setPassword('')
            })
    };

    return <>
        <NavBar />

        <Container className="passwordReset my-5">
            <Row className="justify-content-center m-1 mb-4">
                <Col className="square border pt-5 px-3" lg="5" md="7" sm='12' style={{ borderRadius: '10px' }}>
                    <div className="text-center mb-3 account-header" style={{ background: 'white', color: '#4682b4' }}>
                        <h3>Reset Password</h3>
                    </div>
                    {success !== "" ?
                        <FlashMessage duration={30000} persistOnHover={true} >
                            <p id="flash">{success}</p>
                        </FlashMessage> : ""
                    }
                    <Form>
                        <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
                            <Row className="align-items-start">
                                <Col className="mt-0">
                                    <span className="spanInput flex">
                                        <Form.Control
                                            type={showPassword}
                                            placeholder="New Password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required={true}
                                        />
                                        <Icon onClick={handleShowPassword} id="show-password" icon="quill:eye-closed" width="30" height="30" hFlip={true} />
                                    </span>
                                    <p className="mt-1" style={{ fontSize: '12px', color: 'gray' }}>At least 8 characters</p>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Button className="align-self-center" id='reset-btn' onClick={() => resetPassword()}>
                            Submit
                        </Button>
                    </Form>
                    <div className="mt-4 text-center" id="backToLogin">
                        <Link to='/login'>
                            Back to the Log In Page
                        </Link>
                    </div>
                </Col>
            </Row>


        </Container>

        <div style={{ background: 'whitesmoke', borderTop: '1px solid silver' }}>
            <Footer />
        </div>
        <GoToTop />
    </>
};

export default NewPassword;;