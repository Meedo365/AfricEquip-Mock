import React from "react";
import NavBar from "../components/navbar";
import { Icon } from '@iconify/react';
import Container from 'react-bootstrap/Container';
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import GoToTop from "../components/goToTop";
import SearchComponent from "../components/searchComponent";

function SearchPage() {
    return <>
        <NavBar />

        <SearchComponent />

        <div style={{ background: 'whitesmoke' }}>
            <Footer />
        </div>
        <GoToTop />
    </>
}

export default SearchPage;