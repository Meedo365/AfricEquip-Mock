import React, { useState, useEffect, useContext } from "react";
import logo from "../assets/logo.png"
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Icon } from '@iconify/react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Store } from "../context/store";

function NavBar() {
    let store = useContext(Store);
    let [mainUrl] = store.endUrl;
    let [user, setUser] = store.userinfo;
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let history = useNavigate();
    const [show, setShow] = useState(false);
    let [none, setNone] = useState("none");
    let [block, setBlock] = useState("block");
    const [showPassword, setShowPassword] = useState('password');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const loginStatus = (e) => setBlock(e);
    const logoutStatus = (e) => setNone(e);
    let routePath = useLocation();

    useEffect(() => {
        userCheck();
    }, [routePath]);


    let userCheck = () => {
        if (localStorage.getItem("afriqId") === null) {
            loginStatus("block");
            logoutStatus("none");
        } else {
            loginStatus("none");
            logoutStatus("block");
        }

    };

    let loginUser = () => {
        let data = { email, password }
        let url = mainUrl + "/login";
        fetch(url, {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                setUser(result)
                localStorage.setItem("afriqId", result.user._id)
            })
        history('/register')
        setEmail("");
        setPassword("");
        handleClose();
    };

    let handleLogout = () => {
        let url = mainUrl + "/logout";
        fetch(url, {
            headers: {
                "content-type": "application/json"
            },
            method: "POST"
        })
            .then(localStorage.removeItem("afriqId"))
            .then(history('/'))
        userCheck();
    };

    let handleShowPassword = () => {
        showPassword === 'password' ? setShowPassword('text') : setShowPassword('password')
    };

    return <>
        <Navbar collapseOnSelect expand="lg" id="nav">
            <Container className="cen">
                <Navbar.Brand >
                    <Link to="/">
                        <img id="logo" src={logo} alt="logo" />
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="justify-content-end flex-grow-1 pe-3"
                        id="hamburger"
                        style={{}}
                        navbarScroll
                    >
                        <Nav.Link onClick={handleShow} style={{ display: block }}>
                            <Icon icon="bxs:user" width="16" height="16" />
                            Login
                        </Nav.Link>


                        <Nav.Link style={{ display: block }}>
                            <Link to='/register'>
                                <Icon icon="bxs:user-plus" width="22" height="22" />
                                Register
                            </Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to='/' onClick={() => handleLogout()} style={{ display: none }}>
                                Logout
                            </Link>
                        </Nav.Link>


                        <Nav.Link>
                            <Link to="?list=1">
                                <button id="create-listing">
                                    <Icon icon="bytesize:compose" width="16" height="16" style={{ marginRight: '6px' }} />
                                    Create Listing
                                </button>
                            </Link>
                        </Nav.Link>
                        {/* <Nav.Link href="#action2">Register</Nav.Link> */}
                        <NavDropdown title="EN" id="navbarScrollingDropdown" >
                            {/* <button id="en-button"> */}
                            <NavDropdown.Item href="#action3">French</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">English</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Italiano</NavDropdown.Item>
                            {/* </button> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Modal className="modal" show={show} onHide={handleClose}>
            <Modal.Header closeButton style={{ background: 'whitesmoke' }}>
                <Modal.Title>
                    <Icon icon="entypo:login" width="25" height="25" />    Log In
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Login (Email or Phone)</Form.Label>
                        <span className="flex">
                            <Icon className="login-icon" icon="bxs:user" width="35" height="35" />
                            <Form.Control
                                type="email"
                                placeholder="Email or Phone"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoFocus
                            />
                        </span>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <span className="flex">
                            <Icon className="login-icon" icon="bxs:lock-alt" width="35" height="35" />
                            <Form.Control
                                type={showPassword}
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <Icon onClick={handleShowPassword} id="show-password" icon="quill:eye-closed" width="30" height="30" hFlip={true} />
                        </span>
                    </Form.Group>
                </Form>

                <Row>
                    <Col lg="6">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <span className="flex" style={{ alignItems: 'center' }}>
                                <input id="checkbox" type='checkbox' />
                                <label id="checkboxLabel" for="checkbox">Keep me logged in</label>
                            </span>
                        </Form.Group>
                    </Col>

                    <Col id='reset-register' lg="6">
                        <Link to='/password/reset'>Lost your password?</Link> /
                        <Link to='/register'> Register</Link>
                    </Col>
                </Row>

                {/* <Row>
                    <div className="captcha">
                        <p>We don't like robots :(</p>
                        <h3>Captcha Here</h3>
                    </div>

                    <div className="captchaInput">
                        <p>Please enter the security code shown in the image above in the field below:</p>
                        <input type='text' />
                    </div>
                </Row> */}

            </Modal.Body>
            <Modal.Footer>
                <Button id="modal-cancel" onClick={handleClose}>
                    Cancel
                </Button>
                <Button id="modal-login" onClick={() => loginUser()} style={{ background: '' }}>
                    Login
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}

export default NavBar;
