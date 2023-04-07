import React, { useState, useContext, useEffect } from "react";
import Footer from '../components/footer';
import GoToTop from "../components/goToTop";
import NavBar from '../components/navbar';
import { Store } from "../context/store";
import { Icon } from '@iconify/react';
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import FlashMessage from 'react-flash-message';
import { useLocation } from "react-router-dom";


function CreatePosting() {
    const routePath = useLocation();
    let store = useContext(Store);
    let [mainUrl] = store.endUrl;
    let [itemName, setItemName] = useState("");
    let [price, setPrice] = useState("");
    let [brand, setBrand] = useState("Other");
    let [transmission, setTransmission] = useState("");
    let [success, setSuccess] = useState("");
    let [uploadErr, setUploadErr] = useState("");
    let [condition, setCondition] = useState("");
    let [year, setYear] = useState("");
    let [model, setModel] = useState("");
    let [location_id, setLocation] = useState("");
    let [locations, setLocations] = useState([]);
    let [subCategory_id, setSubCategory] = useState("");
    let [subCategorys, setSubCategorys] = useState([]);
    let [category_id, setCategory] = useState("");
    let [categorys, setCategorys] = useState([]);
    let [images, setImages] = useState(null);
    let num;
    let num2;
    let user_id = localStorage.getItem('afriqId');

    useEffect(() => {
        loadCategory();
        loadSubCategory();
        loadLocation();
    }, []);

    let loadCategory = () => {
        let url = mainUrl + '/category';
        fetch(url)
            .then((ee) => ee.json())
            .then((ress) => {
                setCategorys(ress)
            })
    };

    let loadSubCategory = () => {
        let url = mainUrl + '/sub-category';
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setSubCategorys(res)
            })
    };

    let loadLocation = () => {
        let url = mainUrl + '/location';
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setLocations(res)
            })
    };

    const onTop = () => {
        window.scrollTo(0, 0);
    }
    let createPost = (e) => {
        if (user_id == undefined) return (setUploadErr('You have to login'));
        let url = mainUrl + "/product";
        num = price.replace(/,/gi, "");
        num2 = num.replace(/\d(?=(?:\d{3})+$)/g, '$&,');
        let defaultImage = '/uploads/ / 325picture.jpg'
        if (price == "" || price == " ") {
            setPrice("Contact Us")
        }
        if (brand == "" || brand == " ") {
            setPrice("Other")
        }
        let data = {
            user_id, itemName, brand, price: num2, transmission,
            condition, year, model, location_id, category_id,
            subCategory_id, images: defaultImage
        }
        const formData = new FormData();
        formData.append('user_id', user_id)
        formData.append('itemName', itemName)
        formData.append('price', num2)
        formData.append('brand', brand)
        formData.append('transmission', transmission)
        formData.append('condition', condition)
        formData.append('year', year)
        formData.append('model', model)
        formData.append('location_id', location_id)
        formData.append('category_id', category_id)
        formData.append('subCategory_id', subCategory_id)

        if (images === null) {
            fetch(url, {
                headers: {
                    "content-type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    setSuccess(result.msg)
                })
            setItemName("")
            setPrice("")
            setBrand("")
            setTransmission("---")
            setUploadErr("")
            setCondition("")
            setYear('')
            setModel("")
            setLocation("")
            setSubCategory("")
            setCategory("")
            setImages("")
            setSuccess("")
            onTop()

        } else if (images !== null) {
            if (images.length > 4) return (setUploadErr('Maximum of 4 images per product listing'));
            for (let i = 0; i < images.length; i++) {
                formData.append('images', images[i]);
            }
            fetch(url, { method: "POST", body: formData })
                .then(res => res.json())
                .then(result => {
                    setSuccess(result.msg)
                })
            setItemName("")
            setPrice("")
            setBrand("")
            setTransmission("---")
            setUploadErr("")
            setCondition("---")
            setYear('')
            setModel("")
            setLocation("---")
            setSubCategory("---")
            setCategory("")
            setImages("")
            setSuccess("")
            onTop()
        }
    };

    return <>
        <NavBar />

        <Container>
            <Row className="my-4">
                <Col className="py-3" lg='8'>
                    <Card>
                        <div className="account-header flex">
                            <Icon icon="icon-park:ad-product" width="35" height="30" />
                            <h3>Create New Product Listing</h3>

                        </div>
                        <br />
                        <div style={{ margin: '0 auto' }}>
                            <div className="create-listing">{success !== "" ?
                                <FlashMessage duration={10000} persistOnHover={true} >
                                    <p style={{ color: 'red', textTransform: 'uppercase', fontWeight: '500' }}>{success}</p>
                                </FlashMessage> : ""
                            }
                                <Row className="mb-3">
                                    <Col md="4">
                                        <label>Item</label>
                                    </Col>
                                    <Col md="7">
                                        <input type="text" name="itemName" placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md="4">
                                        <label>Price</label>
                                    </Col>
                                    <Col md="7">
                                        <input type="text" name="price" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md="4">
                                        <label>Brand</label>
                                    </Col>
                                    <Col md="7">
                                        <input type="text" name="brand" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md="4">
                                        <label>Transmission</label>
                                    </Col>
                                    <Col md="7">
                                        <select onChange={(e) => setTransmission(e.target.value)} value={transmission}>
                                            <option value='---'>---</option>
                                            <option value='Automatic'>Automatic</option>
                                            <option value="Manual">Manual</option>
                                        </select>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md="4">
                                        <label>condition</label>
                                    </Col>
                                    <Col md="7">
                                        <select onChange={(e) => setCondition(e.target.value)} value={condition}>
                                            <option value='---'>---</option>
                                            <option value='New'>New</option>
                                            <option value="Used">Used</option>
                                        </select>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md="4">
                                        <label>Year</label>
                                    </Col>
                                    <Col md="7">
                                        <input type="text" name="year" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md="4">
                                        <label>Model</label>
                                    </Col>
                                    <Col md="7">
                                        <input type="text" name="model" placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)} required />
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md="4">
                                        <label>Location</label>
                                    </Col>
                                    <Col md="7">
                                        <select name="location_id" onChange={(e) => setLocation(e.target.value)} style={{ textTransform: 'capitalize' }} value={location_id}>
                                            <option value="---" className="selectOption">---</option>
                                            {locations.map((e, i) => {
                                                return (
                                                    <option value={e._id} key={i} className="selectOption">{e.place}</option>
                                                )
                                            })}
                                        </select>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md="4">
                                        <label>category</label>
                                    </Col>
                                    <Col md="7">
                                        <select name="category_id" onChange={(e) => setCategory(e.target.value)} style={{ textTransform: 'capitalize' }} value={category_id}>
                                            <option value="---" className="selectOption">---</option>
                                            {categorys.map((e, i) => {
                                                return (
                                                    <option value={e._id} key={i} className="selectOption">{e.title}</option>
                                                )
                                            })}
                                        </select>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md="4">
                                        <label>Sub-category</label>
                                    </Col>
                                    <Col md="7">
                                        <select name="subCategory_id" onChange={(e) => setSubCategory(e.target.value)} style={{ textTransform: 'capitalize' }} value={subCategory_id}>
                                            <option>---</option>
                                            {subCategorys.map((e, i) => {
                                                if (category_id === e.category_id._id) {
                                                    return (
                                                        <option value={e._id} key={i + "s"} className="selectOption">{e.title}</option>
                                                    )
                                                }
                                            })}
                                        </select>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md="4">
                                        <label>Images</label>
                                    </Col>
                                    <Col md="7">
                                        <input type="file" name="images" multiple onChange={(e) => setImages(e.target.files)}
                                        />
                                    </Col>
                                </Row>

                                {success !== "" ?
                                    <FlashMessage duration={10000} persistOnHover={true} >
                                        <p style={{ color: 'red', textTransform: 'uppercase', fontWeight: '500' }}>{success}</p>
                                    </FlashMessage> : ""
                                }
                                {uploadErr !== "" ?
                                    <FlashMessage duration={10000} persistOnHover={true} >
                                        <p style={{ color: 'red', textTransform: 'uppercase', fontWeight: '500' }}>{uploadErr}</p>
                                    </FlashMessage> : ""
                                }

                                <button onClick={() => createPost()}>Save New Listing</button>
                                {/* <Link to={"/product/" + productRoute}>
                                    <h3>View Created Listing</h3>
                                </Link> */}


                            </div>
                        </div>

                    </Card>
                </Col>

                <Col className="reg-right-col text-center py-3" lg='4'>
                    <Row>
                        <Col className="m-3 px-2 pb-3" lg='11' md="3">
                            <Icon style={{ borderRadius: '5px', background: '#ff9113' }} icon="ep:picture-filled" color="white" width="56" height="45" />
                            <h3 className="py-2">Create New Listing</h3>
                            <p>Do you have something to sell, to rent, any service to offer or a job offer? Post it at African Heavy Duty Equipment Leasing, its free, for local business and very easy to use!</p>
                        </Col>

                        <Col className="m-3 px-2 pb-3" lg='11' md="4">
                            <Icon style={{ borderRadius: '5px', background: '#e6c840', width: '50px', height: '40px', padding: '5px' }} icon="fa-solid:pen" color="white" width="56" height="45" />
                            <h3 className="py-2">Create and Manage Items</h3>
                            <p>Become a best seller or buyer. Create and Manage your listings. Repost your old listings, etc.</p>
                        </Col>

                        <Col className="m-3 px-2 pb-3" lg='11' md="3">
                            <Icon icon="bi:heart-fill" color="#74c29b" width="56" height="45" />
                            <h3 className="py-2">Create your favorite listings list.</h3>
                            <p>Create your favorite listings list. And save your search. Don't forget any deal.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

        <div style={{ background: 'whitesmoke', borderTop: '1px solid silver' }}>
            <Footer />
        </div>

        <GoToTop />

    </>

};

export default CreatePosting;