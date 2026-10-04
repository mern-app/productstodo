//import { useState } from 'react'
import "./App.css";
import ProductPage from "./pages/product-page";
import products from "./data/products.json";

function App() {
    return (
        <>
            <ProductPage products={products} />
        </>
    );
}

export default App;
