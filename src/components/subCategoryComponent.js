// import React, { useState } from "react";
// import { Icon } from '@iconify/react';
// import Container from 'react-bootstrap/Container';
// import { Link } from "react-router-dom";
// import { Col, Row } from "react-bootstrap";
// import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import ProductListing from "./productListing";
// import Pagination from 'react-bootstrap/Pagination';

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ProductListing from "./productListing";
import { Store } from "../context/store";

function SubCategoryComponent(props) {
    let store = useContext(Store);
    let post = [props.categoryProducts];
    let id = useParams();

    return <>

        {post?.map((e, i) => {
            let prices = "";
            let shownaira = 'block';
            let numImages = e.images.length;
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

            // if (id.id === e.subCategory_id._id) {
                return (
                    <div className="border-square">
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
                            category_name={e.subCategory_id.category_id.title}
                            hide="none"
                            subCategory_id={e.subCategory_id._id}
                            product_id={e._id}
                            location_id={e.location_id._id}
                        />
                    </div>
                )
            // }


        })}
    </>
}

export default SubCategoryComponent;