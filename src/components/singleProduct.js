import React, { useState, useEffect, useContext } from "react";
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
import { Store } from "../context/store";

function ProductComponent(props) {
    let store = useContext(Store);
    let [mainUrl] = store.endUrl;
    let [block, setBlock] = useState("visible");
    const [images, setImages] = useState(props.images);
    const [mt, setMT] = useState("");

    useEffect(() => {
        userCheck();
    }, []);

    let userCheck = () => {
        if (localStorage.getItem("afriqId") === null) {
            setBlock('visible');
        } else {
            setBlock('hidden');
            setMT("-100px")
        }
    };


    return <>
        <Container>
            <div className="loginBar" style={{ visibility: block }}>
                <span>
                    <Link to="/login">Login</Link> for faster access to the best deals.
                    <Link to="/register"> Click here</Link> if you don't have an account.
                </span>
                <CloseButton aria-label="Hide" />
            </div>

            <div style={{ marginTop: mt }} className="category-path d-flex justify-content-between">
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
                            <Link to={"/category/" + props.catId}>{props.category}</Link>
                        </Breadcrumb.Item>

                        <Breadcrumb.Item >
                            <Link to={"/sub-category/" + props.subId}>{props.subCategory}</Link>
                        </Breadcrumb.Item>

                        <Breadcrumb.Item active style={{ width: 'fit-content' }}> <p>{props.product}</p></Breadcrumb.Item>
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
                        <h2>{props.product}</h2>

                        <hr />

                        <p className="d-flex justify-content-left align-items-center" style={{ flexWrap: 'wrap' }}>
                            <span style={{ marginRight: '5px', color: "#959595" }}>
                                < Icon icon="akar-icons:clock" color="#959595" width="15" height="15" style={{ marginRight: '5px' }} />
                                {props.date} at {props.hour}:{props.minute}
                            </span>
                            <span style={{ marginRight: '5px', color: "#959595", textTransform: 'uppercase' }}>
                                <Icon icon="bi:folder" color="#959595" width="15" height="15" style={{ marginLeft: '5px', marginRight: '5px' }} />
                                {props.category}
                            </span>
                            <span style={{ marginRight: '5px', color: "#959595", textTransform: 'uppercase' }} >
                                <Icon icon="carbon:location-filled" color="#959595" width="20" height="15" />
                                {props.location}
                            </span>
                            <span style={{ marginRight: '5px', color: "#959595", textTransform: 'uppercase' }} >
                                <Icon icon="ant-design:eye-outlined" color="#959595" width="16" height="16" style={{ marginLeft: '5px', marginRight: '5px' }} />
                                {props.views} views
                            </span>
                        </p>

                        <span className="">
                            <div className="carousell" style={{ textAlign: 'center' }}>
                                <Carousel showIndicators={false} infiniteLoop showStatus={false} thumbWidth>
                                    {images.map((e, i) => {
                                        return (
                                            <div className="caro">
                                                <img style={{ maxHeight: '650px' }} key={i} src={e} alt={i} />
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
                                            <strong>Location: </strong><Link style={{ textTransform: "capitalize" }} to={"/location/" + props.locationId}>{props.location}</Link>
                                        </span>
                                        <span className="flex" style={{ alignItems: 'center' }}>
                                            <strong style={{ display: props.shownaira, paddingRight: '5px' }}>Price: &#8358;</strong> {props.price}
                                        </span>
                                    </section>
                                    <hr />

                                    <div className="mb-4">
                                        <p>{props.model}</p>
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
                                                <p>{props.brand}</p>
                                            </span>

                                            <span className="flex" style={{ justifyContent: 'space-between' }}>
                                                <h6>Condition</h6>
                                                <p>{props.condition}</p>
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
                                {/* <img src={props.userImg} alt={props.username[0]} /> */}
                                <Icon icon="mdi:user" width="100" height="100" />
                                <span className="ms-3">
                                    <p>Posted By</p>
                                    {/* <Link to={'/category/' + props.catId}> */}
                                    <h3 style={{ textTransform: "capitalize" }}>{props.username}</h3>
                                    {/* </Link> */}
                                </span>
                            </div>
                            <hr />
                            <div className="px-4">
                                <span className="d-flex justify-content-between">
                                    <p style={{ fontSize: '13px' }}>Location</p>
                                    <Link style={{ fontSize: '13px', textTransform: 'capitalize' }} to={'/location/' + props.locationId} id="posted-location">{props.location}</Link>
                                </span>
                                <span className="d-flex justify-content-between">
                                    <p style={{ fontSize: '13px', width: '50%' }}>Joined</p>
                                    <p style={{ fontSize: '13px', width: '50%', textAlign: 'right' }}>{props.dateUser} at {props.hourUser}:{props.minuteUser}</p>
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

                {/* <Row> */}
                {/* <Col> */}
                {/* <div className="category">
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
                        </div> */}
                {/* </Col> */}
                {/* </Row> */}
            </Container>
        </Container>
    </>
}

export default ProductComponent;