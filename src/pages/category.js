import React, { useEffect, useContext, useState } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import GoToTop from "../components/goToTop";
import CategoryComponent from "../components/categoryComponent ";
import { Store } from "../context/store";
import { Link, useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Icon } from '@iconify/react';
import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination';
import SideBar from "../components/sideBar";
import NoProduct from "../components/noProduct";
import { useLocation } from "react-router-dom";


function CategoryPage() {
    let store = useContext(Store);
    let [mainUrl] = store.endUrl;
    let [post, setPost] = useState([]);
    let [grid, setGrid] = store.gridSort;
    let [list, setList] = store.listSort;
    let [compact, setCompact] = store.compactSort;
    let [category, setCategory] = store.productCategory;
    let [location, setLocation] = store.allLocations;
    let id = useParams();
    let [catFilter, setCatFilter] = store.filterCategory;
    let [subCategory, setSubCategory] = store.productSubCategory;
    let [compactSearch, setCompactSearch] = useState("block");
    let [gridSearch, setGridSearch] = useState("block");
    let [listSearch, setListSearch] = useState("block");

    const routePath = useLocation();
    let search = routePath.search;
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
        loadSubCategory();
        display();
    }, [routePath]);

    let loadProducts = () => {
        // let url = mainUrl + '/product-sort-by-category/' + id.id;
        let url = mainUrl + '/products';
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                let result = [];
                res.map(e => {
                    if (e.subCategory_id.category_id._id === id.id) {
                        result.push(e)
                    }
                })
                return result
            })
            .then((res) => {
                setPost(res)
            })
    };

    let loadSubCategory = () => {
        let url = mainUrl + '/sub-category';
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setSubCategory(res)
            })
    };

    let display = () => {
        if (search === "?display=compact") {
            setCompact("black")
            setGrid("steelblue")
            setList("steelblue")
            setGridSearch('none')
            setListSearch('none')
            setCompactSearch('block')
        } else if (search === "?display=list") {
            setList("black")
            setGrid("steelblue")
            setCompact("steelblue")
            setCompactSearch("none")
            setGridSearch("none")
            setListSearch("block")
        } else {
            setGrid("black")
            setList("steelblue")
            setCompact("steelblue")
            setCompactSearch("none")
            setListSearch("none")
            setGridSearch("block")
        }
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

                        {category.map((e, i) => {
                            if (id.id === e._id) {
                                return (
                                    <Breadcrumb.Item active>
                                        <p key={i} style={{ textTransform: 'capitalize' }}>{e.title}</p>
                                    </Breadcrumb.Item>
                                )
                            }
                        })}
                    </Breadcrumb>
                </div>
            </Row>

            <Row className="categoryLink mb-4">
                {subCategory.map((e, i) => {
                    if (id.id === e.category_id._id) {
                        return (
                            <Col lg='3' md='4'>
                                <Link to={'/sub-category/' + e._id}>{e.title}</Link>
                            </Col>
                        )
                    }
                })}
            </Row>
        </Container>

        <Container>

            <Row className="mb-5 gy-3" >

                <Col md="3">
                    <SideBar />
                </Col>

                <Col md='9'>
                    <div className="post-count-container">
                        <span className="flex post-count">
                            <p>All Listings</p>
                            <p id="post-length">{post.length}</p>
                        </span>
                    </div>
                    <div className="flex grid-compact">
                        <h6>All listings</h6>
                        <section>
                            <p>
                                <Link to={"?display=grid"}>
                                    <Icon icon="clarity:grid-chart-solid" width="20" height="20" color={grid} />
                                </Link>
                            </p>
                            <p>
                                <Link to={"?display=list"}>
                                    <Icon icon="el:th-list" width="20" height="15" color={list} />
                                </Link>
                            </p>
                            <p>
                                {/* <Link to={"/category/" + id.id + "?display=compact"}> */}
                                <Link to={"?display=compact"}>
                                    <Icon icon="bi:list" width="20" height="20" color={compact} />
                                </Link>
                            </p>
                        </section>
                    </div>
                    <Row className="gx-0" style={{ boxShadow: '0px 10px 15px 10px whitesmoke' }}>
                        {post.length === 0 ?
                            <NoProduct /> :
                            post.map((e, i) => {
                                return (
                                    <>
                                        <Col className="border-square" md="3" xs="6" style={{ width: 'fix-content', display: gridSearch }}>
                                            <CategoryComponent
                                                key={i}
                                                categoryProducts={e}
                                                noneGridd={gridSearch}
                                                noneListt={listSearch}
                                                noneCompactt={compactSearch}
                                            />
                                        </Col>

                                        <Col className="border-square" lg="12" style={{ width: 'fix-content', display: listSearch }}>
                                            <CategoryComponent
                                                key={i}
                                                categoryProducts={e}
                                                noneGridd={gridSearch}
                                                noneListt={listSearch}
                                                noneCompactt={compactSearch}
                                            />
                                        </Col>

                                        <Col className="border-square" lg="12" style={{ width: 'fix-content', display: compactSearch }}>
                                            <CategoryComponent
                                                key={i}
                                                categoryProducts={e}
                                                noneGridd={gridSearch}
                                                noneListt={listSearch}
                                                noneCompactt={compactSearch}
                                            />
                                        </Col>
                                    </>
                                )
                            })
                        }
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

export default CategoryPage;