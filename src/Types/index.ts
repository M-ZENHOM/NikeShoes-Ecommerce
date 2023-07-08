export interface ProductDataArr {
    data: ProductType[]
}
export interface ProductData {
    data: ProductType
}
export type Data = {
    map(arg0: (shoes: ProductType) => React.JSX.Element): unknown
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

}
export interface ProductType {
    filter(arg0: (el: ProductType) => boolean): unknown
    map(arg0: (shoes: ProductType) => React.JSX.Element): unknown
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
    map(arg0: (d: any, i: any) => import("react").JSX.Element): import("react").ReactNode
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