import { Carousel } from "antd";
import { Banner1, Banner2, Banner3, Banner4 } from "../../assets/images";

const slides = [Banner1, Banner2, Banner3, Banner4];

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <Carousel autoplay>
        {slides.map((image, index) => (
          <div key={image}>
            <img
              src={image}
              alt={`UAE New Year Promo ${index + 1}`}
              className="block h-52 w-full object-center sm:h-52 md:h-[290px] lg:h-[315px] xl:h-[335px] 2xl:h-[350px]"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
}
