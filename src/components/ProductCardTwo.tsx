import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { ProductType } from '~/Types'

const ProductCardTwo: FC<{ shoe: ProductType }> = ({ shoe }) => {
    return (
        <div className="card w-full h-96  bg-base-100 shadow-xl image-full">
            <figure><Image src={shoe.thumbnail} width={500} height={500} priority alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{shoe.title}</h2>
                <p>{shoe.price}$</p>
                <div className="card-actions justify-end">
                    <Link href={`product/${shoe._id}`} className="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCardTwo