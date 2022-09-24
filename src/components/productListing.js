import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function ProductListing(props) {
    return <>
        <Row className="gx-0">
            <Col className="square border-bottom border-end" lg="3" md="4" xs="6">
                <div className="listing-card">
                    <div style={{ background: 'white' }}>
                        <span className="flex">
                            <Icon icon="ant-design:camera-filled" color="#959595" width="20" height="20" />
                            <p>0</p> {props.index}
                        </span>
                        <img src="https://africequip.com/storage/app/default/picture.jpg" />

                    </div>

                    <div className="listing-info">
                        <h4>
                            POREBA 40" x 240" Gap Bed Engine Lathe Type TR-100B1/6M, No. 1191-116
                        </h4>
                        {/* <section> */}

                        <p> <Icon icon="akar-icons:clock" color="#959595" width="15" height="15" style={{ marginRight: '5px' }} />
                            Feb 17th, 2022 at 16.02
                            <Icon icon="bi:folder" color="#959595" width="15" height="15" style={{ marginLeft: '5px' }} />
                            <Link className="ae" to='/'> automobiles equipment </Link>
                            <Icon icon="uis:angle-double-right" color="#959595" width="20" height="20" />
                            <Link className="ae" to='/'> heavy equipment</Link>
                            <Link className="ae" to='/'>
                                <Icon icon="carbon:location-filled" color="#959595" width="20" height="15" />
                                abuja
                            </Link>
                        </p>
                        {/* </section> */}
                    </div>

                    <section>
                        <div style={{ float: 'right' }}>
                            <h3>
                                #24,750,000
                            </h3>
                        </div><br /><br />
                        <br />

                        <div id="save-list" className="flex" >
                            <Icon icon="bi:bookmark-fill" width="15" height="15" style={{ marginRight: '2px', marginTop: '2px' }} />
                            <p >Save</p>
                        </div>

                    </section>

                </div>
            </Col>

            <Col className="square border-bottom border-end" lg="3" md="4" xs="6">
                <div className="listing-card">
                    <div style={{ background: 'white' }}>
                        <span className="flex">
                            <Icon icon="ant-design:camera-filled" color="#959595" width="20" height="20" />
                            <p>0</p>
                        </span>
                        <img src="https://africequip.com/storage/app/default/picture.jpg" />

                    </div>

                    <div className="listing-info">
                        <h4>
                            POREBA 40" x 240" Gap Bed Engine Lathe Type TR-100B1/6M, No. 1191-116
                        </h4>
                        {/* <section> */}

                        <p> <Icon icon="akar-icons:clock" color="#959595" width="15" height="15" style={{ marginRight: '5px' }} />
                            Feb 17th, 2022 at 16.02
                            <Icon icon="bi:folder" color="#959595" width="15" height="15" style={{ marginLeft: '5px' }} />
                            <Link className="ae" to='/'> automobiles equipment </Link>
                            <Icon icon="uis:angle-double-right" color="#959595" width="20" height="20" />
                            <Link className="ae" to='/'> heavy equipment</Link>
                            <Link className="ae" to='/'>
                                <Icon icon="carbon:location-filled" color="#959595" width="20" height="15" />
                                abuja
                            </Link>
                        </p>
                        {/* </section> */}
                    </div>

                    <section>
                        <div style={{ float: 'right' }}>
                            <h3>
                                #24,750,000
                            </h3>
                        </div><br /><br />
                        <br />

                        <div id="save-list" className="flex" >
                            <Icon icon="bi:bookmark-fill" width="15" height="15" style={{ marginRight: '2px', marginTop: '2px' }} />
                            <p >Save</p>
                        </div>

                    </section>

                </div>
            </Col>

            <Col className="square border-bottom border-end" lg="3" md="4" xs="6">
                <div className="listing-card">
                    <div style={{ background: 'white' }}>
                        <span className="flex">
                            <Icon icon="ant-design:camera-filled" color="#959595" width="20" height="20" />
                            <p>0</p>
                        </span>
                        <img src="https://africequip.com/storage/app/default/picture.jpg" />

                    </div>

                    <div className="listing-info">
                        <h4>
                            POREBA 40" x 240" Gap Bed Engine Lathe Type TR-100B1/6M, No. 1191-116
                        </h4>
                        {/* <section> */}

                        <p> <Icon icon="akar-icons:clock" color="#959595" width="15" height="15" style={{ marginRight: '5px' }} />
                            Feb 17th, 2022 at 16.02
                            <Icon icon="bi:folder" color="#959595" width="15" height="15" style={{ marginLeft: '5px' }} />
                            <Link className="ae" to='/'> automobiles equipment </Link>
                            <Icon icon="uis:angle-double-right" color="#959595" width="20" height="20" />
                            <Link className="ae" to='/'> heavy equipment</Link>
                            <Link className="ae" to='/'>
                                <Icon icon="carbon:location-filled" color="#959595" width="20" height="15" />
                                abuja
                            </Link>
                        </p>
                        {/* </section> */}
                    </div>

                    <section>
                        <div style={{ float: 'right' }}>
                            <h3>
                                #24,750,000
                            </h3>
                        </div><br /><br />
                        <br />

                        <div id="save-list" className="flex" >
                            <Icon icon="bi:bookmark-fill" width="15" height="15" style={{ marginRight: '2px', marginTop: '2px' }} />
                            <p >Save</p>
                        </div>

                    </section>

                </div>
            </Col>

            <Col className="square border-bottom border-end" lg="3" md="4" xs="6">
                <div className="listing-card">
                    <div style={{ background: 'white' }}>
                        <span className="flex">
                            <Icon icon="ant-design:camera-filled" color="#959595" width="20" height="20" />
                            <p>0</p>
                        </span>
                        <img src="https://africequip.com/storage/app/default/picture.jpg" />

                    </div>

                    <div className="listing-info">
                        <h4>
                            POREBA 40" x 240" Gap Bed Engine Lathe Type TR-100B1/6M, No. 1191-116
                        </h4>
                        {/* <section> */}

                        <p> <Icon icon="akar-icons:clock" color="#959595" width="15" height="15" style={{ marginRight: '5px' }} />
                            Feb 17th, 2022 at 16.02
                            <Icon icon="bi:folder" color="#959595" width="15" height="15" style={{ marginLeft: '5px' }} />
                            <Link className="ae" to='/'> automobiles equipment </Link>
                            <Icon icon="uis:angle-double-right" color="#959595" width="20" height="20" />
                            <Link className="ae" to='/'> heavy equipment</Link>
                            <Link className="ae" to='/'>
                                <Icon icon="carbon:location-filled" color="#959595" width="20" height="15" />
                                abuja
                            </Link>
                        </p>
                        {/* </section> */}
                    </div>

                    <section>
                        <div style={{ float: 'right' }}>
                            <h3>
                                #24,750,000
                            </h3>
                        </div><br /><br />
                        <br />

                        <div id="save-list" className="flex" >
                            <Icon icon="bi:bookmark-fill" width="15" height="15" style={{ marginRight: '2px', marginTop: '2px' }} />
                            <p >Save</p>
                        </div>

                    </section>

                </div>
            </Col>

            <Col className="square border-bottom border-end" lg="3" md="4" xs="6">
                <div className="listing-card">
                    <div style={{ background: 'white' }}>
                        <span className="flex">
                            <Icon icon="ant-design:camera-filled" color="#959595" width="20" height="20" />
                            <p>0</p>
                        </span>
                        <img src="https://africequip.com/storage/app/default/picture.jpg" />

                    </div>

                    <div className="listing-info">
                        <h4>
                            POREBA 40" x 240" Gap Bed Engine Lathe Type TR-100B1/6M, No. 1191-116
                        </h4>
                        {/* <section> */}

                        <p> <Icon icon="akar-icons:clock" color="#959595" width="15" height="15" style={{ marginRight: '5px' }} />
                            Feb 17th, 2022 at 16.02
                            <Icon icon="bi:folder" color="#959595" width="15" height="15" style={{ marginLeft: '5px' }} />
                            <Link className="ae" to='/'> automobiles equipment </Link>
                            <Icon icon="uis:angle-double-right" color="#959595" width="20" height="20" />
                            <Link className="ae" to='/'> heavy equipment</Link>
                            <Link className="ae" to='/'>
                                <Icon icon="carbon:location-filled" color="#959595" width="20" height="15" />
                                abuja
                            </Link>
                        </p>
                        {/* </section> */}
                    </div>

                    <section>
                        <div style={{ float: 'right' }}>
                            <h3>
                                #24,750,000
                            </h3>
                        </div><br /><br />
                        <br />

                        <div id="save-list" className="flex" >
                            <Icon icon="bi:bookmark-fill" width="15" height="15" style={{ marginRight: '2px', marginTop: '2px' }} />
                            <p >Save</p>
                        </div>

                    </section>

                </div>
            </Col>
        </Row>

        <Container>
            <Row className="view-more-row">
                <Col>
                    <span id="view-more-btn" style={{ display: props.hide }}>
                        <Icon icon="bi:arrow-right-circle-fill" width="20" height="18" style={{ marginRight: '3px' }} />
                        View More
                    </span>
                </Col>
            </Row>
        </Container>
    </>
}

export default ProductListing;