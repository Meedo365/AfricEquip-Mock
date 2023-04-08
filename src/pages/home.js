import React, { useEffect, useContext } from "react";
import NavBar from "../components/navbar";
import { Icon } from '@iconify/react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ProductListing from "../components/productListing";
import Footer from "../components/footer";
import GoToTop from "../components/goToTop";
import { Store } from "../context/store";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

function Home() {
    let store = useContext(Store);
    let [mainUrl] = store.endUrl;
    let [user, setUser] = store.userinfo;
    let [post8, setPost8] = store.limitedPost;
    let [category, setCategory] = store.productCategory;


    useEffect(() => {
        loadCategory();
        load8Products();
    }, []);

    let loadCategory = () => {
        let url = mainUrl + '/category';
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setCategory(res)
            });
    };

    let load8Products = () => {
        let url = mainUrl + '/product-8';
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setPost8(res)
            })
    };




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
                        {category.map((e, i) => {
                            return (
                                <Col lg="2" md="4" key={i}>
                                    <Link id="category-link" to={"/category/" + e._id}>
                                        <div className="browse-card">
                                            <Icon id="browse-car" icon="bi:car-front-fill" width="50" height="50" />
                                            <p style={{ paddingTop: '10px' }}>{e.title}</p>
                                        </div>
                                    </Link>
                                </Col>
                            )
                        })}
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

                    <Link to="/search">
                        <h6>
                            VIEW MORE
                            <Icon icon="clarity:menu-line" width="20" height="20" />
                        </h6>
                    </Link>

                </div>

                <Row className="g-0">
                    {post8.length === 0 ? <div className="flex loading">
                        <Spinner animation="border" variant="secondary" />
                        <h4>LOADING...</h4>
                    </div> : post8.map((e, i) => {
                        let prices = "";
                        let shownaira = 'block';
                        let numImages;
                        let hour = new Date(e.createdAt).getHours();
                        let minute = new Date(e.createdAt).getMinutes();
                        let day = new Date(e.createdAt).getDate();
                        let month = new Date(e.createdAt).toLocaleDateString('en-us', { month: 'short' });
                        let year = new Date(e.createdAt).getFullYear();

                        let date = month + ' ' + day + ', ' + year;
                        if (e.price === "Contact Us") {
                            prices = "Contact Us";
                            shownaira = "none"
                        } else {
                            prices = e.price
                        }
                        if (e.images[0] == "/uploads//325picture.jpg") {
                            numImages = 0
                        } else {
                            numImages = e.images.length
                        }

                        return (
                            <Col className="square border-bottom  border-end" lg="3" md="4" xs="6">
                                <ProductListing
                                    key={i}
                                    photo={numImages}
                                    image={e.images[0]}
                                    imageAlt={i}
                                    productName={e.itemName}
                                    date={date}
                                    hour={hour}
                                    minute={minute}
                                    category={e.subCategory_id.category_id.title}
                                    subCategory={e.subCategory_id.title}
                                    location={e.location_id.place}
                                    price={prices}
                                    shownaira={shownaira}
                                    category_id={e.subCategory_id.category_id._id}
                                    location_id={e.location_id._id}
                                    subCategory_id={e.subCategory_id._id}
                                    product_id={e._id}
                                    noneGrid={"block"}
                                    noneList={"none"}
                                    noneCompact={"none"}
                                />
                            </Col>
                        )
                    })}
                </Row>

                <Container>
                    <Row className="view-more-row">
                        <Col >
                            <Link to="/search">
                                <span id="view-more-btn">
                                    <Icon icon="bi:arrow-right-circle-fill" width="20" height="18" style={{ marginRight: '3px' }} />
                                    View More
                                </span>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>

        <div style={{ background: 'whitesmoke' }}>
            <Footer />
        </div>

        <GoToTop />
    </>
}

export default Home