export interface Product {
    id: string;
    name: string;
    category: string;
    label: string;
    price: number;
    image: string;
    color: string;
    tag: string;
    fresh: boolean;
    description: string;
    material: string;
    sizes: string[];
    collection: string;
}
export interface CartItem {
    id: string;
    size: string;    qty: number;
}
export interface Profile {
    name: string;
    email: string;
}
export interface Order {
    id: string;
    date: string;
    customer: Profile & {
        phone: string;
        address: string;
        city: string;
        postal: string;
    };
    items: (CartItem & { name: string; price: number; image: string })[];
    shipping: string;
    payment: string;
    subtotal: number;
    delivery: number;
    total: number;
    status: string;
}

export interface ShopState {
    cart: CartItem[];
    wishlist: string[];
    profile: Profile | null;
    session: boolean;
    orders: Order[];
}

export interface CheckoutInput {
    customer: Order["customer"];
    shipping: "regular" | "express";
    payment: string;
    consent: boolean;
    requestKey: string;
}
