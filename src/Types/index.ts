


export type Data = {
    map(arg0: (shoes: ProductType) => import("react").JSX.Element): unknown
    _id: string
    id: number
    title: string
    quantity: number
    description: string
    price: number
    thumbnail: string
    category: string
    images: []
}
export interface ProductType {
    map(arg0: (shoes: ProductType) => import("react").JSX.Element): unknown
    _id: string
    id: number
    title: string
    quantity: number
    description: string
    price: number
    thumbnail: string
    category: string
    images: []
}
export interface PostProduct {
    id: number
    title: string
    description: string
    price: number
    thumbnail: string
    category: string
    images: []
}
