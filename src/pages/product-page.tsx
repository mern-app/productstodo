import type { Dispatch, SetStateAction } from "react";
import type Product from "../interface/products";

type ProductPageProps = {
    products: Product[];
    setProducts: Dispatch<SetStateAction<Product[]>>;
};

export default function ProductPage({
    products,
    setProducts,
}: ProductPageProps) {
    const cartProducts = products.filter((product) => product.in_cart);

    function handleAddToCart(productId: string) {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === productId
                    ? {
                          ...product,
                          in_cart: true,
                          quantity: product.in_cart ? product.quantity + 1 : 1,
                      }
                    : product,
            ),
        );
    }

    function handleRemoveFromCart(productId: string) {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === productId
                    ? { ...product, in_cart: false, quantity: 0 }
                    : product,
            ),
        );
    }

    return (
        <div className="page-layout">
            <section>
                <h1>Products</h1>
                <div className="product-grid">
                    {products.map((product) => (
                        <article className="product-card" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>
                                {product.product_category} ·{" "}
                                {product.manufacturer} ·{" "}
                                <strong>${product.price}</strong>
                            </p>
                            <button
                                type="button"
                                onClick={() => handleAddToCart(product.id)}
                            >
                                {product.in_cart
                                    ? `Add another (${product.quantity} in cart)`
                                    : "Add to Cart"}
                            </button>
                        </article>
                    ))}
                </div>
            </section>

            <aside className="cart">
                <h2>Cart</h2>
                {cartProducts.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="cart-list">
                        {cartProducts.map((product) => (
                            <article className="product-card" key={product.id}>
                                <img src={product.image} alt={product.name} />
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <p>
                                    {product.product_category} ·{" "}
                                    {product.manufacturer} ·{" "}
                                    <strong>${product.price}</strong>
                                </p>
                                <p>Quantity: {product.quantity}</p>
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleRemoveFromCart(product.id)
                                    }
                                >
                                    Remove from Cart
                                </button>
                            </article>
                        ))}
                    </div>
                )}
            </aside>
        </div>
    );
}
