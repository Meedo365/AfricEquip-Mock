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
import SubCategoryComponent from "../components/subCategoryComponent";
import SideBar from "../components/sideBar";
import NoProduct from "../components/noProduct";
import { useLocation } from "react-router-dom";

function SubCategoryPage() {
    let store = useContext(Store);
    let [mainUrl] = store.endUrl;
    let [post, setPost] = useState([]);
    let [grid, setGrid] = store.gridSort;
    let [list, setList] = store.listSort;
    let [compact, setCompact] = store.compactSort;
    let [category, setCategory] = store.productCategory;
    let [compactSearch, setCompactSearch] = useState("block");
    let [gridSearch, setGridSearch] = useState("block");
    let [listSearch, setListSearch] = useState("block");
    let id = useParams();
    const routePath = useLocation();
    let search = routePath.search;
    let [catFilter, setCatFilter] = store.filterCategory;
    let [subCategory, setSubCategory] = store.productSubCategory;
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
        loadSubCategory();
        display()
    }, [routePath]);

    let loadProducts = () => {
        let url = mainUrl + '/products';
        console.log(url)
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                let result = [];
                res.map(e => {
                    if (e.subCategory_id._id === id.id) {
                        result.push(e)
                    }
                })
                console.log(result)
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

    let loadCategory = () => {
        let url = mainUrl + '/category';
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setCategory(res)
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
                    <select onChange={(e) => setCatFilter(e.target.value)} style={{ textTransform: 'capitalize' }} >
                        <option value="all" className="selectOption">
                            All Categories
                        </option>

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

                        {subCategory.map((e, i) => {
                            if (id.id === e._id) {
                                return (
                                    <Breadcrumb.Item>
                                        <Link to={"/category/" + e.category_id._id} key={i} style={{ textTransform: 'capitalize' }}>{e.category_id.title}</Link>
                                    </Breadcrumb.Item>
                                )
                            }
                        })}

                        {subCategory.map((e, i) => {
                            if (id.id === e._id) {
                                return (
                                    <Breadcrumb.Item active>
                                        <p style={{ textTransform: 'capitalize' }}>{e.title}</p>
                                    </Breadcrumb.Item>
                                )
                            }
                        })}

                    </Breadcrumb>
                </div>
            </Row>

            <Row className="categoryLink mb-4">
                {subCategory.map((e, i) => {
                    if (e.category_id._id) {
                        if (id.id === e._id) {
                            return (
                                <Col lg='3' md='4'>
                                    <Link style={{ color: 'black' }} to={'/sub-category/' + e._id}>{e.title}</Link>
                                </Col>
                            )
                        } else {
                            return (
                                <Col lg='3' md='4'>
                                    <Link to={'/sub-category/' + e._id} >{e.title}</Link>
                                </Col>
                            )
                        }
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
                                <Link to={"/sub-category/" + id.id + "?display=grid"}>
                                    <Icon icon="clarity:grid-chart-solid" width="20" height="20" color={grid} />
                                </Link>
                            </p>
                            <p>
                                <Link to={"/sub-category/" + id.id + "?display=list"}>
                                    <Icon icon="ci:list-checklist" width="20" height="20" color={list} />
                                </Link>
                            </p>
                            <p>
                                <Link to={"/sub-category/" + id.id + "?display=compact"}>
                                    <Icon icon="bi:list" width="20" height="20" color={compact} />
                                </Link>
                            </p>
                        </section>
                    </div>
                    <Row className="gx-0" style={{ boxShadow: '0px 10px 15px 10px whitesmoke' }}>
                        {post.length == 0 ?
                            <NoProduct /> :
                            post?.map((e, i) => {
                                if (id.id === e.subCategory_id._id) {
                                    return (
                                        <Col className="border-square" md="3" xs="6" style={{ width: 'fix-content' }}>
                                            <SubCategoryComponent
                                                key={i}
                                                categoryProducts={e}
                                                noneGridd={gridSearch}
                                                noneListt={listSearch}
                                                noneCompactt={compactSearch}
                                            />
                                        </Col>
                                    )
                                }
                            })}
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
        </Container >

        <div style={{ background: 'whitesmoke' }}>
            <Footer />
        </div>
        <GoToTop />
    </>
}

export default SubCategoryPage;