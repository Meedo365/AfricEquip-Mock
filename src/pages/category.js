import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import GoToTop from "../components/goToTop";
import CategoryComponent from "../components/categoryComponent ";

function CategoryPage() {
    return <>
        <NavBar />

        <CategoryComponent />

        <div style={{ background: 'whitesmoke' }}>
            <Footer />
        </div>
        <GoToTop />
    </>
}

export default CategoryPage;