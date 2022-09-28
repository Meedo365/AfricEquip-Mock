import React, { useContext, useEffect } from "react";
import NavBar from "../components/navbar";
import { Icon } from '@iconify/react';
import Container from 'react-bootstrap/Container';
import Footer from "../components/footer";
import { Link, useParams, useNavigate } from "react-router-dom";
import GoToTop from "../components/goToTop";
import { Store } from "../context/store";
import { useState } from "react";


function Activate() {
    let store = useContext(Store);
    let [mainUrl] = store.endUrl;
    let id = useParams();
    let history = useNavigate()
    let [user, setUser] = useState([])

    useEffect(() => {
        activateUser()
    }, []);

    let activateUser = () => {
        let activation_token = id.id;
        let url = mainUrl + "/activate";
        fetch(url, {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ activation_token })
        })
            .then(res => res.json())
            .then(result => {
                setUser(result)
            })
    }
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

        <Container className="notFound mb-5" style={{ marginTop: '-250px', textAlign: 'center' }}>
            {/* <h1 >404</h1> */}
            <span style={{ color: '#e74c3c' }}>
                {user.msg}
            </span>
            <h3 className="mb-5">
                <Link className="mb-5" to='/login'>Return to Login</Link>
            </h3>
        </Container>

        <div style={{ background: 'whitesmoke' }}>
            <Footer />
        </div>
        <GoToTop />
    </>
}

export default Activate;