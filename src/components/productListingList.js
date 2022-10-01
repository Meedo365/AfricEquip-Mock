import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function ProductListingList(props) {
    let categoryRoute = '/category/' + props.category_id;
    let subCategoryRoute = '/sub-category/' + props.subCategory_id;
    let productRoute = '/product/' + props.product_id;
    let locationRoute = '/location/' + props.location_id

    return <>
        <div className="listing-card" style={{ display: props.noneList, height: 'fit-content' }}>

            <Row>
                <Col md="3">
                    <div style={{ background: 'white' }}>
                        <span className="flex">
                            <Icon icon="ant-design:camera-filled" color="#959595" width="20" height="20" />
                            <p>{props.photo}</p>
                        </span>
                        <Link to={productRoute}>
                            <img id="listing-img-tab" src={props.image} alt={props.imageAlt} />
                        </Link>
                    </div>
                </Col>

                <Col md="6">
                    <div className="listing-info">
                        <Link to={productRoute}>
                            <h4>
                                {props.productName}
                            </h4>
                        </Link>

                        <p className="listing-p" style={{ marginTop: '0px' }}>
                            <Icon icon="akar-icons:clock" color="#959595" width="20" height="15" style={{ marginRight: '10px' }} />
                            {props.date} at {props.hour}:{props.minute}<br />
                            <Icon icon="bi:folder" color="#959595" width="20" height="15" style={{ marginRight: '10px' }} />
                            <Link className="ae" to={categoryRoute}>{props.category}</Link><br />
                            <Icon icon="uis:angle-double-right" color="#959595" width="20" height="" style={{ marginRight: '10px' }} />
                            <Link className="ae" to={subCategoryRoute}>{props.subCategory}</Link>
                            <br />
                            <Link className="ae" to={locationRoute}>
                                <Icon icon="carbon:location-filled" color="#959595" width="20" height="15" style={{ marginRight: '10px' }} />
                                {props.location}
                            </Link>
                        </p>

                    </div>
                </Col>

                <Col>
                    <section className="priceSectionListView">
                        <div>
                            <h3 className="flex" >
                                <p style={{ display: props.shownaira }}>&#8358;</p>{props.price}
                            </h3>
                        </div><br /><br />
                        <br />

                        <div style={{ float: 'left' }} id="save-list-list" className="flex" >
                            <Icon icon="bi:bookmark-fill" width="15" height="15" style={{ marginRight: '2px', marginTop: '2px' }} />
                            <p >Save</p>
                        </div>
                    </section>
                </Col>

            </Row>


        </div>
    </>
}

export default ProductListingList;