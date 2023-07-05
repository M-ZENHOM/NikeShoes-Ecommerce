import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { ProductType } from '~/Types'
import { CgSearch } from 'react-icons/cg'

interface ProductCardProps {
    shoe: ProductType
}

const ProductCard: FC<ProductCardProps> = ({ shoe }) => {

    return (
        <div className="card w-96 h-96 bg-base-300 shadow-xl md:w-80">
            <div className="card-body">
                <div className='flex justify-between'>
                    <div className='flex items-center justify-between w-full'>
                        <h2 className="card-title">{shoe.title}</h2>
                        <Link href={`product/${shoe._id}`} className="bade bg-base-100 p-2 rounded-full hover:bg-black hover:text-white "><CgSearch /></Link>
                    </div>
                </div>
                <p> {shoe.price}$ </p>
            </div>
            <figure>
                <Link href={`product/${shoe._id}`}>
                    <Image className='hover:scale-110 transition-all duration-500' width={500} height={500} src={shoe.thumbnail} alt={shoe.title} priority />
                </Link>
            </figure>
        </div>
    )
}

export default ProductCard