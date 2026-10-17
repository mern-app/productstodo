export default interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    // manufacturer: string;
    // created_at: string;
    // updated_at: string;
    category: string;
    in_cart: boolean;
    quantity: number;
}
