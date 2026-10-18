import { useState } from "react"
import "./App.css"
import ProductPage from "./pages/product-page"
import productsData from "./data/products2.json"
import type Product from "./interface/products"
import "font-awesome/css/font-awesome.min.css"

function App() {
    const [products, setProducts] = useState<Product[]>(productsData)

    return <ProductPage products={products} setProducts={setProducts} />
}

export default App
