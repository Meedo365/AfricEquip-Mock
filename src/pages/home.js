import React, { useEffect } from "react";
import NavBar from "../components/navbar";
import { Icon } from '@iconify/react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ProductListing from "../components/productListing";
import Footer from "../components/footer";
import GoToTop from "../components/goToTop";

function Home() {

    useEffect(() => {

    }, []);


    return <>
        <NavBar />

        <div className="banner">
            <Container>
                <Card className="text-center" style={{ background: '#444444', border: 'none' }}>
                    <h1>lease automobile equipment near you</h1>
                    <p>With simple, fast financing options</p>
                </Card>
                <section>
                    <span id="what">
                        <Icon icon="uis:angle-double-right" color="#959595" width="40" height="44" />
                        <input type="search" placeholder="What ?" />
                    </span>
                    <span id="where">
                        <Icon icon="carbon:location-filled" color="#959595" width="35" height="44" />
                        <input type="search" placeholder="Where ?" />
                    </span>
                    <div>
                        <button type="button">
                            <Icon icon="ci:search" color="white" width="30" height="40" />
                            Find
                        </button>
                    </div>
                </section>
                <div className="search-mobile">
                    <span id="whatm">
                        <Icon icon="uis:angle-double-right" color="#959595" width="40" height="44" />
                        <input type="search" placeholder="What ?" />
                    </span>
                    <span id="wherem">
                        <Icon icon="carbon:location-filled" color="#959595" width="35" height="44" />
                        <input type="search" placeholder="Where ?" />
                    </span>
                    <div>
                        <button type="button">
                            <Icon icon="ci:search" color="white" width="30" height="40" />
                            Find
                        </button>
                    </div>
                </div>
            </Container>
        </div>

        <Container>
            <div className="category">
                <div>
                    <div className="browse flex">
                        <p>
                            Browse by <b>Category</b>
                        </p>
                        <h6>
                            VIEW MORE
                            <Icon icon="clarity:menu-line" width="20" height="30" />
                        </h6>
                    </div>

                    <Row className="gx-0">
                        <Col lg="2" md="4">
                            <div className="browse-card">
                                <Icon id="browse-car" icon="bi:car-front-fill" width="50" height="50" />
                                <p style={{ paddingTop: '10px' }}>automobiles equipment</p>
                            </div>
                        </Col>

                        <Col lg="2" md="4">
                            <div className="browse-card" >
                                <Icon id="browse-car" icon="bi:car-front-fill" width="50" height="50" />
                                <p style={{ paddingTop: '10px' }}>automobiles equipment</p>
                            </div>
                        </Col>

                        <Col lg="2" md="4">
                            <div className="browse-card">
                                <Icon id="browse-car" icon="bi:car-front-fill" width="50" height="50" />
                                <p style={{ paddingTop: '10px' }}>automobiles equipment</p>
                            </div>
                        </Col>

                        <Col lg="2" md="4">
                            <div className="browse-card">
                                <Icon id="browse-car" icon="bi:car-front-fill" width="50" height="50" />
                                <p style={{ paddingTop: '10px' }}>automobiles equipment</p>
                            </div>
                        </Col>

                        <Col lg="2" md="4">
                            <div className="browse-card">
                                <Icon id="browse-car" icon="bi:car-front-fill" width="50" height="50" />
                                <p style={{ paddingTop: '10px' }}>automobiles equipment</p>
                            </div>
                        </Col>

                        <Col lg="2" md="4">
                            <div className="browse-card">
                                <Icon id="browse-car" icon="bi:car-front-fill" width="50" height="50" />
                                <p style={{ paddingTop: '10px' }}>automobiles equipment</p>
                            </div>
                        </Col>

                        <Col lg="2" md="4">
                            <div className="browse-card">
                                <Icon id="browse-car" icon="bi:car-front-fill" width="50" height="50" />
                                <p style={{ paddingTop: '10px' }}>automobiles equipment</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>

        <Container>
            <div className="category">
                <div className="browse flex">
                    <p>
                        Latest <b>Listings</b>
                    </p>
                    <h6>
                        VIEW MORE
                        <Icon icon="clarity:menu-line" width="20" height="20" />
                    </h6>
                </div>

                <ProductListing />
            </div>
        </Container>

        <div style={{ background: 'whitesmoke' }}>
            <Footer />
        </div>
        <GoToTop />
    </>
}

export default Home