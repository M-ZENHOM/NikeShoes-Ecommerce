import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import type { ProductType } from "~/Types";
import Image from 'next/image';

const ProductDetailsCarousel = ({ data }: { data: ProductType }) => {
    return (
        <div className="text-white text-[20px] w-full max-w-[600px] mx-auto  top-[50px] lg:px-10">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                renderThumbs={() =>
                    data.images?.map((img, idx) => (
                        <Image
                            key={idx}
                            src={img}
                            width={500}
                            height={600}
                            alt="Thumbs imgs"
                            priority
                        />
                    ))
                }
                className="productCarousel"
            >
                {data.images?.map((img: string, idx: number) => (
                    <Image key={idx} width={500} height={500} src={img} alt="shoes image" priority />
                ))}
            </Carousel>
        </div>
    )
}

export default ProductDetailsCarousel