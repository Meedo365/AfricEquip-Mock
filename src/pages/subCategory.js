import React from "react";
import NavBar from "../components/navbar";
import { Icon } from '@iconify/react';
import Container from 'react-bootstrap/Container';
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import GoToTop from "../components/goToTop";
import SearchComponent from "../components/searchComponent";
import SubCategoryComponent from "../components/subCategoryComponent";

function SubCategoryPage() {
    return <>
        <NavBar />

        <SubCategoryComponent />

        <div style={{ background: 'whitesmoke' }}>
            <Footer />
        </div>
        <GoToTop />
    </>
}

export default SubCategoryPage;