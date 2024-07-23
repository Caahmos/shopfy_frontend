import React from "react";
import Slider from "react-slick";
import { TestimonialsData } from "../../../utils/TestimonialsData";

const Testimonials: React.FC = () => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 dark:bg-gray-900 dark:text-white">
      <div className="container">
        <div className="text-center max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our costumers are saiyng
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <div data-aos="zoom in" className="">
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div className="py-10">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-5">
                    <img
                      className="w-[100px] h-[100px] rounded-full object-cover"
                      src={data.img}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-xs text-gray-400">{data.description}</p>
                    <h1 className="text-xl font-bold text-black/80 dark:text-white">
                      {data.name}
                    </h1>
                  </div>
                  <p className="text-black/20 dark:text-white/20 absolute right-0 top-0 text-9xl">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
