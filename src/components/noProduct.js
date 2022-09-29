import React from "react";
import img from "../assets/no-product-found.jpg"

function NoProduct() {
    return <>
        <img style={{ width: 'min-content' }} id="noProduct" src={img} alt="No Product Found" />
    </>
}

export default NoProduct;