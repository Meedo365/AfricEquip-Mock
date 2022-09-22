import React, { createContext, useState } from 'react';
export const Store = createContext();
const StoreContext = ({ children }) => {
    let [user, setUser] = useState('');
    let [url, setUrl] = useState('http://localhost:5001')
    let [cookieAllow, setCookieAllow] = useState('block')
    let states = {
        userinfo: [user, setUser],
        endUrl: [url, setUrl],
        allowCookie: [cookieAllow, setCookieAllow]

    };
    return <Store.Provider value={states}>{children}</Store.Provider>
}
export default StoreContext;