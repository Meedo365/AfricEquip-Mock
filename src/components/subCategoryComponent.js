import React, { useState } from "react";
import { Icon } from '@iconify/react';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ProductListing from "./productListing";
import Pagination from 'react-bootstrap/Pagination';

function SubCategoryComponent() {
    let items = [];
    let [active, setActive] = useState(3);
    for (let number = 1; number <= 5; number++) {
        console.log(number)
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => setActive(number)} >
                {number}
            </Pagination.Item >,
        );
    }

    return <>
        <Container>
            <Row className="my-2 shopTopBar">
                <Col className="shopInput" lg="3">
                    <select>
                        <option className="selectOption">All Categories</option>
                        <option className="selectOption">Automobiles Equipment</option>
                    </select>
                </Col>
                <Col className="shopInput" lg="4">
                    <input type='search' placeholder="What ?" />
                </Col>
                <Col className="shopInput" lg="3">
                    <input type='search' placeholder="Where ?" />
                </Col>
                <Col className="text-center" lg="1">
                    <button>Find</button>
                </Col>
            </Row>

            <Row>
                <div className="category-path">
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

                        <Breadcrumb.Item active>
                            <p style={{ textTransform: 'capitalize' }}>heavy equipments</p>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </Row>

            <Row className="categoryLink mb-4">
                <Col lg='3' md='4'>
                    <Link to='/category'>construction</Link>
                </Col>

                <Col lg='3' md='4'>
                    <Link to='/category'>forestry</Link>
                </Col>

                <Col lg='3' md='4'>
                    <Link to='/category' style={{ color: 'black', cursor: 'text' }}>heavy equipment</Link>
                </Col>

                <Col lg='3' md='4'>
                    <Link to='/category'>attachment</Link>
                </Col>

                <Col lg='3' md='4'>
                    <Link to='/category'>trucks & trailers</Link>
                </Col>

                <Col lg='3' md='4'>
                    <Link to='/category'>vehicle parts & accessories</Link>
                </Col>

                <Col lg='3' md='4'>
                    <Link to='/category'>watercraft & boats</Link>
                </Col>
            </Row>

        </Container>

        <Container>
            <Row className="mb-5 gy-3" >
                <Col md="3">
                    <div className="sideBar border pt-3">
                        <section >
                            <h3>all categories</h3>
                            <hr />
                            <span className="mb-3">
                                <Link to="/category">automobiles equipment</Link>
                                <Link to="/category">automobiles equipment</Link>
                                <Link to="/category">automobiles equipment</Link>
                                <Link to="/category">automobiles equipment</Link>
                            </span>
                        </section>

                        <section >
                            <h3>locations</h3>
                            <hr />
                            <span className="mb-3">
                                <Link to="/category">lagos</Link>
                                <Link to="/category">kano</Link>
                                <Link to="/category">ibadan</Link>
                                <Link to="/category">kaduna</Link>
                                <Link to="/category">port harcourt</Link>
                                <Link to="/category">benin city</Link>
                                <Link to="/category">maiduguri</Link>
                                <Link to="/category">zaria</Link>
                                <p>View More (92)</p>
                            </span>
                        </section>

                        <section >
                            <h3>date posted</h3>
                            <hr />
                            <span className="mb-3">
                                <div className="flex mb-2">
                                    <input type="radio" id="24hrs" name="filterDate" />
                                    <label for="24hrs">24 hours</label>
                                </div>

                                <div className="flex mb-2">
                                    <input type="radio" id="3days" name="filterDate" />
                                    <label for="3days">3 days</label>
                                </div>

                                <div className="flex mb-2">
                                    <input type="radio" id="7days" name="filterDate" />
                                    <label for="7days">7 days</label>
                                </div>

                                <div className="flex mb-2">
                                    <input type="radio" id="30days" name="filterDate" />
                                    <label for="30days">30 days</label>
                                </div>
                            </span>
                        </section>


                    </div>
                </Col>

                <Col md='9'>
                    <div className="contentBar" style={{ boxShadow: '0px 10px 15px 10px whitesmoke' }}>
                        <ProductListing
                            hide="none"
                        />

                        <div className="d-flex justify-content-center">
                            <Pagination>
                                <Pagination.First onClick={() => setActive(1)} />
                                <Pagination.Prev onClick={() => (active === 1 ? setActive(1) : setActive(active - 1))} />
                                {items}
                                <Pagination.Next onClick={() => (active === 5 ? setActive(5) : setActive(active + 1))} />
                                <Pagination.Last onClick={() => setActive(5)} />
                            </Pagination>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
}

export default SubCategoryComponent;