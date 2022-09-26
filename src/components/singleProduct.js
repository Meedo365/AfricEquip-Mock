import React, { useState } from "react";
import { Icon } from '@iconify/react';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import CloseButton from 'react-bootstrap/CloseButton';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';

function ProductComponent() {

    const [images, setImages] = useState(["https://africequip.com/storage/files/ng/74/thumb-816x460-6d811572b383934dfb933ccd6a427a91.jpeg",
        "https://africequip.com/storage/files/ng/74/thumb-816x460-f5f2df1e88d22b108893eb659bb8a714.jpeg",
        "https://africequip.com/storage/files/ng/74/thumb-816x460-15dbe1b798e03f0955b080f51cebbb66.jpeg"]);

    return <>
        <Container>
            <div className="loginBar">
                <span>
                    <Link to="/login">Login</Link> for faster access to the best deals.
                    <Link to="/register"> Click here</Link> if you don't have an account.
                </span>
                <CloseButton aria-label="Hide" />
            </div>

            <div className="category-path d-flex justify-content-between">
                <div >
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to="/">
                                <Icon icon="bi:house-fill" width="18" height="20" />
                            </Link>
                        </Breadcrumb.Item>

                        <Breadcrumb.Item >
                            <Link to="/search">nigeria</Link>
                        </Breadcrumb.Item>

                        <Breadcrumb.Item >
                            <Link to="/category">automobiles equipment</Link>
                        </Breadcrumb.Item>

                        <Breadcrumb.Item >
                            <Link to="/sub-category">trucks & trailers</Link>
                        </Breadcrumb.Item>

                        <Breadcrumb.Item active style={{ width: 'fit-content' }}> <p>hydrospade trailer mount hydrovac</p></Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <div>
                    <Link to="/">
                        <Icon icon="uis:angle-double-right" width="25" height="30" hFlip={true} />
                        back to results
                    </Link>
                </div>
            </div>

            <Container>
                <Row className="mb-4 g-5">
                    <Col className="product-details p-3" lg="9" >
                        <h2>HYDROSPADE TRAILER MOUNT HYDROVAC</h2>

                        <hr />

                        <p className="d-flex justify-content-left align-items-center" style={{ flexWrap: 'wrap' }}>
                            <span style={{ marginRight: '5px', color: "#959595" }}>
                                < Icon icon="akar-icons:clock" color="#959595" width="15" height="15" style={{ marginRight: '5px' }} />
                                Feb 17th, 2022 at 16.02
                            </span>
                            <span style={{ marginRight: '5px', color: "#959595", textTransform: 'uppercase' }}>
                                <Icon icon="bi:folder" color="#959595" width="15" height="15" style={{ marginLeft: '5px', marginRight: '5px' }} />
                                automobiles equipment
                            </span>
                            <span style={{ marginRight: '5px', color: "#959595", textTransform: 'uppercase' }} >
                                <Icon icon="carbon:location-filled" color="#959595" width="20" height="15" />
                                abuja
                            </span>
                            <span style={{ marginRight: '5px', color: "#959595", textTransform: 'uppercase' }} >
                                <Icon icon="ant-design:eye-outlined" color="#959595" width="16" height="16" style={{ marginLeft: '5px', marginRight: '5px' }} />
                                100 views
                            </span>
                        </p>

                        <span className="">
                            <div className="carousell" style={{ textAlign: 'center' }}>
                                <Carousel showIndicators={false} infiniteLoop showStatus={false} thumbWidth>
                                    {images.map((e) => {
                                        return (
                                            <div className="caro">
                                                <img src={e} alt="" />
                                            </div>
                                        )
                                    })}
                                </Carousel>
                            </div>
                        </span>

                        <div className="product-tab">
                            <Tabs
                                id="uncontrolled-tab-example"
                            >
                                <Tab className="border-start border-bottom border-end p-3" eventKey="listing-details" title="Listing Details">
                                    <section className="flex location-price" style={{ justifyContent: 'space-between' }}>
                                        <span>
                                            <strong>Location: </strong><Link to="/location">Abuja</Link>
                                        </span>
                                        <span>
                                            <strong>Price: </strong>#64,125,000
                                        </span>
                                    </section>
                                    <hr />

                                    <div className="mb-4">
                                        <p>600 Tandem trailer mount</p>
                                        <p>600 Gallon debris</p>
                                        <p>225 CND gallon water</p>
                                    </div>

                                    <section>
                                        <span>
                                            <strong>
                                                <Icon icon="codicon:three-bars" width="25" height="30" style={{ marginRight: '10px' }} />
                                                Additional Details
                                            </strong>
                                        </span>

                                        <div className="flex car-brand-condition mt-4" style={{ justifyContent: 'space-evenly' }}>
                                            <span className="flex" style={{ justifyContent: 'space-between' }}>
                                                <h6>Car Brand</h6>
                                                <p>Other</p>
                                            </span>

                                            <span className="flex" style={{ justifyContent: 'space-between' }}>
                                                <h6>Condition</h6>
                                                <p>New</p>
                                            </span>
                                        </div>

                                        <div className="d-flex justify-content-evenly align-items-center my-5">
                                            <OverlayTrigger key="top" placement="top" overlay={
                                                <Tooltip id="tooltip-top">
                                                    Send a message
                                                </Tooltip>
                                            }>
                                                <Icon id='tab-icon' icon="ci:mail" width="50" height="50" />
                                            </OverlayTrigger>

                                            <OverlayTrigger key="top" placement="top" overlay={
                                                <Tooltip id="tooltip-top">
                                                    Save Listing
                                                </Tooltip>
                                            }>
                                                <Icon id='tab-icon' icon="charm:bookmark" width="50" height="45" />
                                            </OverlayTrigger>

                                            <OverlayTrigger key="top" placement="top" overlay={
                                                <Tooltip id="tooltip-top">
                                                    Report Abuse
                                                </Tooltip>
                                            }>
                                                <Icon id='tab-icon' icon="bi:flag" width="50" height="40" />
                                            </OverlayTrigger>
                                        </div>
                                    </section>
                                </Tab>
                            </Tabs>
                        </div>

                        <hr />

                        <div className="mb-3 mt-4">
                            <span className="border px-4 py-2" style={{ borderRadius: "10px", color: 'black', background: 'white', cursor: 'pointer' }}>
                                Send a message
                            </span>
                        </div>

                    </Col>
                    <Col className="product-owner" lg="3">
                        <div className="border" style={{ borderRadius: "10px" }}>
                            <div className="p-2 flex align-items-center">
                                <img src="https://africequip.com/images/user.jpg" alt="user" />
                                <span className="ms-3">
                                    <p>Posted By</p>
                                    <Link to='/sub-category'>
                                        <h3>Heavy Equipment</h3>
                                    </Link>
                                </span>
                            </div>
                            <hr />
                            <div className="px-4">
                                <span className="d-flex justify-content-between">
                                    <p style={{ fontSize: '13px' }}>Location</p>
                                    <Link style={{ fontSize: '13px' }} to='/location' id="posted-location">Abuja</Link>
                                </span>
                                <span className="d-flex justify-content-between">
                                    <p style={{ fontSize: '13px', width: '50%' }}>Joined</p>
                                    <p style={{ fontSize: '13px', width: '50%', textAlign: 'right' }}>Feb 3rd, 2022 at 14.35</p>
                                </span>
                            </div>
                            <hr />
                            <div className="p-4 mb-3">
                                <span className="border px-4 py-2" style={{ borderRadius: "10px", color: '#959595' }}>
                                    Send a message
                                </span>
                            </div>
                        </div>
                        {/* icon section */}
                        <div className="postIcon d-flex justify-content-center my-4">
                            <span className="mx-1 p-1" style={{ background: '#3b5998' }}>
                                <Icon icon="ri:facebook-circle-line" color="#3b5998" width="25" height="25" style={{ background: "white", borderRadius: '50%' }} />
                            </span>
                            <span className="mx-1 p-1" style={{ background: '#55acee' }}>
                                <Icon icon="line-md:twitter" color="white" width="25" height="25" />
                            </span>
                            <span className="mx-1 p-1" style={{ background: '#4dcb5b' }}>
                                <Icon icon="logos:whatsapp-icon" width="20" height="20" />
                            </span>
                            <span className="mx-1 p-1" style={{ background: '#007bb5' }}>
                                <Icon icon="fa6-brands:linkedin-in" color="white" width="20" height="20" />
                            </span>
                        </div>

                        <div className="border safety" style={{ borderRadius: '3px' }}>
                            <h5>
                                Safety Tips for Buyers
                            </h5>
                            <ul>
                                <li>Meet seller at a public place</li>
                                <li>Check the item before you buy</li>
                                <li>Pay only after collecting the item</li>
                            </ul>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        {/* <OwlCarousel margin={10} responsiveClass={true}>
                            <div class="item"><h4>1</h4></div>
                            <div class="item"><h4>2</h4></div>
                            <div class="item"><h4>3</h4></div>
                            <div class="item"><h4>4</h4></div>
                            <div class="item"><h4>5</h4></div>
                            <div class="item"><h4>6</h4></div>
                        </OwlCarousel> */}

                        <div className="category">
                            <div className="browse flex">
                                <p>
                                    Similar <b>Listings</b>
                                </p>
                                <h6>
                                    VIEW MORE
                                    <Icon icon="clarity:menu-line" width="20" height="20" />
                                </h6>
                            </div>

                            <div>
                                <h2>23</h2>
                                <h2>23</h2>
                                <h2>23</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>
}

export default ProductComponent;