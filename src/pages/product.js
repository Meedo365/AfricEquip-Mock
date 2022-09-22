import React from "react";
import NavBar from "../components/navbar";
import { Icon } from '@iconify/react';
import Container from 'react-bootstrap/Container';
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import GoToTop from "../components/goToTop";
import ProductComponent from "../components/singleProduct";

function ProductPage() {
    return <>
        <NavBar />

        <ProductComponent />

        <div style={{ background: 'whitesmoke' }}>
            <Footer />
        </div>
        <GoToTop />
    </>
}

export default ProductPage;