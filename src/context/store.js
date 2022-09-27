import React, { createContext, useState } from 'react';
export const Store = createContext();
const StoreContext = ({ children }) => {
    let [user, setUser] = useState('');
    let [url, setUrl] = useState('http://localhost:5001');
    let [cookieAllow, setCookieAllow] = useState('block');
    let [post8, setPost8] = useState([]);
    let [post, setPost] = useState([]);
    let [category, setCategory] = useState([]);
    let [subCategory, setSubCategory] = useState([]);
    let [location, setLocation] = useState([]);
    let [catFilter, setCatFilter] = useState("");

    let states = {
        userinfo: [user, setUser],
        endUrl: [url, setUrl],
        allowCookie: [cookieAllow, setCookieAllow],
        limitedPost: [post8, setPost8],
        products: [post, setPost],
        productCategory: [category, setCategory],
        productSubCategory: [subCategory, setSubCategory],
        allLocations: [location, setLocation],
        filterCategory: [catFilter, setCatFilter]

    };
    return <Store.Provider value={states}>{children}</Store.Provider>
}
export default StoreContext;