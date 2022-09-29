import React, { createContext, useState } from 'react';
export const Store = createContext();
const StoreContext = ({ children }) => {
    let [user, setUser] = useState('');
    // let [url, setUrl] = useState('http://localhost:5001');
    let [url, setUrl] = useState('https://afric-equip-api.herokuapp.com');
    let [cookieAllow, setCookieAllow] = useState('block');
    let [post8, setPost8] = useState([]);
    let [post, setPost] = useState([]);
    let [category, setCategory] = useState([]);
    let [subCategory, setSubCategory] = useState([]);
    let [location, setLocation] = useState([]);
    let [catFilter, setCatFilter] = useState("");
    let [grid, setGrid] = useState("black");
    let [list, setList] = useState("steelblue");
    let [compact, setCompact] = useState("steelblue");

    let states = {
        userinfo: [user, setUser],
        endUrl: [url, setUrl],
        allowCookie: [cookieAllow, setCookieAllow],
        limitedPost: [post8, setPost8],
        products: [post, setPost],
        productCategory: [category, setCategory],
        productSubCategory: [subCategory, setSubCategory],
        allLocations: [location, setLocation],
        filterCategory: [catFilter, setCatFilter],
        gridSort: [grid, setGrid],
        listSort: [list, setList],
        compactSort: [compact, setCompact]

    };
    return <Store.Provider value={states}>{children}</Store.Provider>
}
export default StoreContext;