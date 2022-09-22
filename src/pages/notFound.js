import React from "react";
import NavBar from "../components/navbar";
import { Icon } from '@iconify/react';
import Container from 'react-bootstrap/Container';
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import GoToTop from "../components/goToTop";

function NotFound() {
    return <>
        <NavBar />

        <div className="banner" style={{ background: 'white' }}>
            <Container style={{ marginTop: '-230px' }}>
                <section>
                    <span id="what">
                        <Icon icon="uis:angle-double-right" color="#959595" width="40" height="44" />
                        <input type="search" placeholder="What ?" />
                    </span>
                    <span id="where">
                        <Icon icon="carbon:location-filled" color="#959595" width="35" height="44" />
                        <input type="search" placeholder="Where ?" />
                    </span>
                    <div>
                        <button type="button">
                            <Icon icon="ci:search" color="white" width="30" height="40" />
                            Find
                        </button>
                    </div>
                </section>
                <div className="search-mobile">
                    <span id="whatm">
                        <Icon icon="uis:angle-double-right" color="#959595" width="40" height="44" />
                        <input type="search" placeholder="What ?" />
                    </span>
                    <span id="wherem">
                        <Icon icon="carbon:location-filled" color="#959595" width="35" height="44" />
                        <input type="search" placeholder="Where ?" />
                    </span>
                    <div>
                        <button type="button">
                            <Icon icon="ci:search" color="white" width="30" height="40" />
                            Find
                        </button>
                    </div>
                </div>
            </Container>
        </div>

        <Container className="notFound" style={{ marginTop: '-250px', textAlign: 'center' }}>
            <h1 >404</h1>
            <span style={{ color: '#e74c3c' }}>
                <Icon icon="jam:triangle-danger-f" color="#e74c3c" width="16" height="16" />
                Page not found
            </span>
            <p>Meanwhile, you may <Link to='/'>return to homepage</Link> </p>
        </Container>

        <div style={{ background: 'whitesmoke' }}>
            <Footer />
        </div>
        <GoToTop />
    </>
}

export default NotFound;