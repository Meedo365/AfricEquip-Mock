import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function ProductListing(props) {
    let categoryRoute = '/category/' + props.category_id;
    return <>
        <div className="listing-card">
            <div style={{ background: 'white' }}>
                <span className="flex">
                    <Icon icon="ant-design:camera-filled" color="#959595" width="20" height="20" />
                    <p>{props.photo}</p>
                </span>
                <img src={props.image} alt={props.imageAlt} />
            </div>

            <div className="listing-info">
                <h4>
                    {props.productName}
                </h4>

                {/* <section> */}
                <p> <Icon icon="akar-icons:clock" color="#959595" width="15" height="15" style={{ marginRight: '5px' }} />
                    {props.date} at {props.hour}:{props.minute}
                    <Icon icon="bi:folder" color="#959595" width="15" height="15" style={{ marginLeft: '5px' }} />
                    <Link className="ae" to={categoryRoute}>{props.category}</Link>
                    <Icon icon="uis:angle-double-right" color="#959595" width="20" height="20" />
                    <Link className="ae" to='/'>{props.subCategory}</Link>
                    <Link className="ae" to='/'>
                        <Icon icon="carbon:location-filled" color="#959595" width="20" height="15" />
                        {props.location}
                    </Link>
                </p>
                {/* </section> */}
            </div>

            <section>
                <div style={{ float: 'right' }}>
                    <h3 className="flex">
                        <p style={{ display: props.shownaira }}>&#8358;</p>{props.price}
                    </h3>
                </div><br /><br />
                <br />

                <div id="save-list" className="flex" >
                    <Icon icon="bi:bookmark-fill" width="15" height="15" style={{ marginRight: '2px', marginTop: '2px' }} />
                    <p >Save</p>
                </div>
            </section>
        </div>
    </>
}

export default ProductListing;