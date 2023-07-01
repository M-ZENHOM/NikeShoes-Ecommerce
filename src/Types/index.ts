


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
    sizes: []

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
    sizes: []
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
    sizes: []
}
