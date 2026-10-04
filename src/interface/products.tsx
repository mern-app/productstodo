export default interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    manufacturer: string;
    created_at: string;
    updated_at: string;
    product_category: string;
    in_cart: boolean;
    quantity: number;
}
