import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function ProductListingCompact(props) {
    let categoryRoute = '/category/' + props.category_id;
    let subCategoryRoute = '/sub-category/' + props.subCategory_id;
    let productRoute = '/product/' + props.product_id;
    let locationRoute = '/location/' + props.location_id

    return <>
        <div className="listing-card" id="compact-id" style={{ display: props.noneCompact }}>

            <Row id="compact-row">
                <Col md="9">
                    <Row>
                        <Col lg="6">
                            <div className="listing-info">
                                <Link to={productRoute}>
                                    <h4 id="compact-h4">
                                        {props.productName}
                                    </h4>
                                </Link>
                            </div>
                        </Col>

                        <Col lg="5">
                            <div className="listing-info">

                                <p className="listing-p flex" >
                                    <div className="flex" style={{ justifyContent: 'center', alignItems: 'center', height: 'fit-content' }}>
                                        <Icon icon="akar-icons:clock" color="#959595" width="20" height="15" style={{ marginRight: '2px' }} />
                                        {props.date} at {props.hour}:{props.minute}
                                    </div>

                                    <div>
                                        <Link className="ae flex" to={locationRoute} style={{ justifyContent: 'center', alignItems: 'center', height: 'fit-content' }}>
                                            <Icon icon="carbon:location-filled" color="#959595" width="20" height="15" style={{ marginRight: '2px' }} />
                                            {props.location}
                                        </Link>
                                    </div>

                                </p>

                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col md="3">
                    <Row>
                        <Col lg="9">
                            <div>
                                <h3 className="flex" style={{ fontSize: 'large', fontWeight: '700' }}>
                                    <p style={{ display: props.shownaira }}>&#8358;</p>{props.price}
                                </h3>
                            </div>
                        </Col>

                        <Col lg="2">
                            <section>
                                <div id="save-list-compact" className="flex" style={{ marginTop: '0px' }}>
                                    <Icon icon="bi:bookmark-fill" width="15" height="15" />
                                </div>
                            </section>
                        </Col>
                    </Row>
                </Col>




            </Row>


        </div>
    </>
}

export default ProductListingCompact;