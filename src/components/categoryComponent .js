import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ProductListing from "./productListing";
import { Store } from "../context/store";
import NoProduct from "./noProduct";
import ProductListingList from "./productListingList";
import ProductListingCompact from "./productListingCompact";

function CategoryComponent(props) {
    let store = useContext(Store);
    let post = [props.categoryProducts];
    let id = useParams()
    return <>
        {post.map((e, i) => {
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
            };

            if (e.images[0] === "https://africequip.com/storage/app/default/picture.jpg") {
                numImages = 0
            } else {
                numImages = e.images.length
            }
            // if (id.id === e.subCategory_id.category_id._id) {
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
                        noneGrid={props.noneGridd}
                    />
                    <ProductListingList
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
                        noneList={props.noneListt}
                    />

                    <ProductListingCompact
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
                        noneCompact={props.noneCompactt}
                    />
                </div>
            )
            // }
        })}
    </>
}

export default CategoryComponent;