import { useState } from "react";
import "./App.css";
import ProductPage from "./pages/product-page";
import productsData from "./data/products.json";
import type Product from "./interface/products";

function App() {
    const [products, setProducts] = useState<Product[]>(productsData);

    return <ProductPage products={products} setProducts={setProducts} />;
}

export default App;
