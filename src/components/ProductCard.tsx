import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { ProductType } from '~/Types'

interface ProductCardProps {
    shoe: ProductType
}

const ProductCard: FC<ProductCardProps> = ({ shoe }) => {
    return (
        <div className="card w-96 h-96 bg-base-100 shadow-xl md:w-80">
            <div className="card-body">
                <h2 className="card-title">{shoe.title}</h2>
                <p className='flex items-center justify-between'>
                    {shoe.price}$
                    <Link href={`product/${shoe._id}`} className="btn badge badge-primary">Buy Now</Link>
                </p>
            </div>
            <figure><Image width={500} height={500} src={shoe.thumbnail} alt={shoe.title} priority /></figure>
        </div>
    )
}

export default ProductCard