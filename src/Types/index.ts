
export interface ProductType {
    _id: string
    id: number
    title: string
    quantity: number
    description: string
    price: number
    thumbnail: string
    category: string
    images: []
    size: string
    sizes: string[]
    userId: string
}
export interface PostProduct {
    id: number
    title: string
    description: string
    price: number
    thumbnail: string
    category: string
    images: []
    size: string
    sizes: string[]
}
export type User = {
    id: string
    email: string
    name: string
    image: string
}

export type OrdersType = {
    currency: string,
    img: string,
    paymentStatus: string,
    shippingDetails: {
        address: {
            city: string,
            country: string,
            line1: string,
        }
        name: string,
        email: string
    }
    shippingTime: number,
    totalPrice: number
}