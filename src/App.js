import React from 'react';
import './index.css';
import StoreContext from './context/store';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import NotFound from './pages/notFound';
import Register from './pages/register';
import ResetPassword from './pages/resetPassword';
import LoginPage from './pages/login';
import ProductPage from './pages/product';
import SearchPage from './pages/search';
import CategoryPage from './pages/category';
import SubCategoryPage from './pages/subCategory';
import LocationPage from './pages/location';
import Activate from './pages/activate';

function App() {
  return (
    <StoreContext>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password/reset" element={<ResetPassword />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/sub-category/:id" element={<SubCategoryPage />} />
          <Route path="/location/:id" element={<LocationPage />} />
          {/* <Route path="/location/:id" element={<LocationPage />} /> */}
          <Route path="/user/activate/:id" element={<Activate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </StoreContext>
  );
}

export default App;
