import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BiArrowBack } from "react-icons/bi";
import SliderOne from "../../../public/slide-1.jpg";
import SliderTwo from "../../../public/slide-2.jpg";
import SliderThree from "../../../public/slide-3.jpg";
import Image from "next/image";

const SliderImages = [SliderOne, SliderTwo, SliderThree]

const Hero = () => {
    return (
        <Carousel
            autoPlay={true}
            showThumbs={false}
            infiniteLoop={true}
            showStatus={false}
            showIndicators={false}
            className="relative text-black dark:text-white max-w-[1360px] mx-auto pb-10"
            renderArrowPrev={(clickHandler) => (
                <div
                    onClick={clickHandler}
                    className="absolute right-[51px] md:right-[31px] bottom-0 w-[50px] md:w-[30px] h-[50px] md:h-[30px] bg-dark dark:bg-white text-white dark:text-dark z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                >
                    <BiArrowBack className="text-black text-lg md:text-sm" />
                </div>
            )}
            renderArrowNext={(clickHandler) => (
                <div
                    onClick={clickHandler}
                    className="absolute right-0 bottom-0 w-[50px] md:w-[30px] h-[50px] md:h-[30px] bg-dark text-white dark:text-dark dark:bg-white z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                >
                    <BiArrowBack className="text-black rotate-180 text-lg md:text-sm" />
                </div>
            )}
        >
            {SliderImages.map((img, index) => (
                <div key={index}>
                    <Image src={img} className="relative" alt="shoes image" />
                    <p className="text-black absolute bottom-20 left-0 bg-white dark:bg-dark w-[200px] p-5 font-bold uppercase text-2xl cursor-pointer md:w-[120px] md:text-sm md:p-2 md:bottom-5">
                        Shop Now
                    </p>
                </div>
            ))}

        </Carousel>
    )
}

export default Hero

