import type { FC } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import type { ProductType } from "~/Types";

interface ProductCarouselProps {
    data: ProductType
}

const ProductCarousel: FC<ProductCarouselProps> = ({ data }) => {
    return (
        <div className="text-white text-[20px] w-full max-w-[600px] mx-auto  top-[50px] lg:px-10">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                {data.images?.map((img: string, index: number) => (
                    <img key={index} src={img} alt="shoes image" loading="lazy" />
                ))}
            </Carousel>
        </div>
    )
}

export default ProductCarousel