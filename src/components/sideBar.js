import React, { useEffect, useContext } from "react";
import { Store } from "../context/store";
import { Link } from "react-router-dom";


function SideBar() {
    let store = useContext(Store);
    let [mainUrl] = store.endUrl;
    let [category, setCategory] = store.productCategory;
    let [location, setLocation] = store.allLocations;


    useEffect(() => {
        loadCategory();
        loadLocations();
    }, []);

    let loadCategory = () => {
        let url = mainUrl + '/category';
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setCategory(res)
            });
    };

    let loadLocations = () => {
        let url = mainUrl + '/location';
        fetch(url)
            .then((e) => e.json())
            .then((res) => {
                setLocation(res);
            })
    };

    return <>
        <div className="sideBar border pt-3">
            <section >
                <h3>all categories</h3>
                <hr />
                {category.map((e, i) => {
                    return (
                        <span className="mb-3">
                            <Link key={i} to={"/category/" + e._id}>{e.title}</Link>
                        </span>
                    )
                })}
            </section>

            <section >
                <h3>locations</h3>
                <hr />
                <span className="mb-3">
                    {location.map((e, i) => {
                        return (
                            <Link key={i} to={"/location/" + e._id}>{e.place}</Link>
                        )
                    })}
                    <p>View More ({location.length})</p>
                </span>
            </section>

            <section >
                <h3>date posted</h3>
                <hr />
                <span className="mb-3">
                    <div className="flex mb-2">
                        <input type="radio" id="24hrs" name="filterDate" />
                        <label for="24hrs">24 hours</label>
                    </div>

                    <div className="flex mb-2">
                        <input type="radio" id="3days" name="filterDate" />
                        <label for="3days">3 days</label>
                    </div>

                    <div className="flex mb-2">
                        <input type="radio" id="7days" name="filterDate" />
                        <label for="7days">7 days</label>
                    </div>

                    <div className="flex mb-2">
                        <input type="radio" id="30days" name="filterDate" />
                        <label for="30days">30 days</label>
                    </div>
                </span>
            </section>


        </div>
    </>
}

export default SideBar;