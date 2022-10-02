import React, { useEffect, useContext, useState } from "react";
import NavBar from "../components/navbar";
import { Icon } from '@iconify/react';
import Container from 'react-bootstrap/Container';
import Footer from "../components/footer";
import { Link, useParams } from "react-router-dom";
import GoToTop from "../components/goToTop";
import ProductComponent from "../components/singleProduct";
import { Store } from "../context/store";

function ProductPage() {
    let store = useContext(Store);
    let [mainUrl] = store.endUrl;
    let [post, setPost] = useState([]);
    let [category, setCategory] = store.productCategory;
    let id = useParams()


    useEffect(() => {
        loadCategory();
        loadProduct();
    }, []);


    let loadCategory = () => {
        let url = mainUrl + '/category';
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setCategory(res)
            });
    };

    let loadProduct = () => {
        let url = mainUrl + '/product/' + id.id;
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setPost([res])
            })
    };
    return <>
        <NavBar />

        {post.map((e, i) => {
            let prices = "";
            let shownaira = 'block';
            let numImages = e.images.length;
            let hour = new Date(e.createdAt).getHours();
            let minute = new Date(e.createdAt).getMinutes();
            let day = new Date(e.createdAt).getDate();
            let month = new Date(e.createdAt).toLocaleDateString('en-us', { month: 'short' });
            let year = new Date(e.createdAt).getFullYear();

            let hourUser = new Date(e.user_id.createdAt).getHours();
            let minuteUser = new Date(e.user_id.createdAt).getMinutes();
            let dayUser = new Date(e.user_id.createdAt).getDate();
            let monthUser = new Date(e.user_id.createdAt).toLocaleDateString('en-us', { month: 'short' });
            let yearUser = new Date(e.user_id.createdAt).getFullYear();

            let date = month + ' ' + day + ', ' + year;
            let dateUser = monthUser + ' ' + dayUser + ', ' + yearUser;
            if (e.price === "Contact Us") {
                prices = "Contact Us";
                shownaira = "none"
            } else {
                prices = e.price
            }
            return (
                <ProductComponent
                    key={i}
                    images={e.images}
                    catId={e.subCategory_id.category_id._id}
                    category={e.subCategory_id.category_id.title}
                    subId={e.subCategory_id._id}
                    subCategory={e.subCategory_id.title}
                    product={e.itemName}
                    date={date}
                    hour={hour}
                    minute={minute}
                    location={e.location_id.place}
                    views={e.view}
                    locationId={e.location_id._id}
                    shownaira={shownaira}
                    price={prices}
                    model={e.model}
                    brand={e.brand}
                    condition={e.condition}
                    dateUser={dateUser}
                    hourUser={hourUser}
                    minuteUser={minuteUser}
                    userImg={e.user_id.image}
                    username={e.user_id.name}
                />
            )
        })}


        <div style={{ background: 'whitesmoke' }}>
            <Footer />
        </div>
        <GoToTop />
    </>
}

export default ProductPage;