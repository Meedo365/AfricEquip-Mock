import React, { useEffect, useContext, useState } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import GoToTop from "../components/goToTop";
import { Store } from "../context/store";
import { Link, useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Icon } from '@iconify/react';
import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination';
import SideBar from "../components/sideBar";
import LocationComponent from "../components/locationComponent ";


function LocationPage() {
    let store = useContext(Store);
    let [mainUrl] = store.endUrl;
    let [post, setPost] = store.products;
    let [category, setCategory] = store.productCategory;
    let [location, setLocation] = store.allLocations;
    let id = useParams();
    let [catFilter, setCatFilter] = store.filterCategory;

    let items = [];
    let [active, setActive] = useState(3);
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => setActive(number)} >
                {number}
            </Pagination.Item >,
        );
    };

    useEffect(() => {
        loadProducts();
        loadCategory();
        loadLocations();
    }, []);

    let loadProducts = () => {
        let url = mainUrl + '/products';
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setPost(res)
            })
    };

    let loadCategory = () => {
        let url = mainUrl + '/category';
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setCategory(res)
            })
    };

    let loadLocations = () => {
        let url = mainUrl + '/location';
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setLocation(res)
            })
    };

    return <>
        <NavBar />

        <Container>
            <Row className="my-2 shopTopBar">
                <Col className="shopInput" lg="3">

                    <select onChange={(e) => setCatFilter(e.target.value)} style={{ textTransform: 'capitalize' }} defaultValue="">
                        {/* <Link to="/search"> */}
                        <option value={""} className="selectOption">
                            All Categories
                        </option>
                        {/* </Link> */}
                        {category.map((e, i) => {
                            return (
                                <option value={e.title} key={i} className="selectOption">{e.title}</option>
                            )
                        })}
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

                        {location.map((e, i) => {
                            if (id.id === e._id) {
                                return (
                                    <Breadcrumb.Item active>
                                        <p key={i} style={{ textTransform: 'capitalize' }}>{e.place}</p>
                                    </Breadcrumb.Item>
                                )
                            }
                        })}

                    </Breadcrumb>
                </div>
            </Row>

            <Row className="categoryLink mb-4">
                {category.map((e, i) => {
                    return (
                        <Col lg='3' md='4'>
                            <Link to={'/category/' + e._id}>{e.title}</Link>
                        </Col>
                    )
                })}
            </Row>
        </Container>

        <Container>
            <Row className="mb-5 gy-3" >
                <Col md="3">
                    <SideBar />
                </Col>

                <Col md='9'>
                    <Row className="gx-0" style={{ boxShadow: '0px 10px 15px 10px whitesmoke' }}>

                        {post.map((e, i) => {
                            if (id.id === e.location_id._id) {
                                return (
                                    <Col className="border-square" md="3" xs="6" style={{ width: 'fix-content' }}>
                                        <LocationComponent
                                            key={i}
                                            categoryProducts={e}
                                        />
                                    </Col>
                                )
                            }
                        }
                        )}

                    </Row>

                    {/* <div className="d-flex justify-content-center mt-4">
                        <Pagination>
                            <Pagination.First onClick={() => setActive(1)} />
                            <Pagination.Prev onClick={() => (active === 1 ? setActive(1) : setActive(active - 1))} />
                            {items}
                            <Pagination.Next onClick={() => (active === 5 ? setActive(5) : setActive(active + 1))} />
                            <Pagination.Last onClick={() => setActive(5)} />
                        </Pagination>
                    </div> */}
                </Col>
            </Row>
        </Container>


        <div style={{ background: 'whitesmoke' }}>
            <Footer />
        </div>
        <GoToTop />
    </>
}

export default LocationPage;