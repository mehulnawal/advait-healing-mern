import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your screenshots
import t1 from "../assets/testimonials/test1.jpg";
import t2 from "../assets/testimonials/test2.jpg";
import t3 from "../assets/testimonials/test3.jpg";
import t4 from "../assets/testimonials/test4.jpg";
import t5 from "../assets/testimonials/test5.jpg";

const Testimonials = () => {
    const images = [t1, t2, t3, t4, t5];

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 2500,
        arrows: false,

        slidesToShow: 2,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <section className="px-5 md:px-[50px] lg:px-[70px] py-16 bg-[#FFFBF2]">
            <h2 className="text-center text-5xl font-[Cormorant_Garamond] font-bold text-purple-800 mb-12">
                What People Say
            </h2>

            <div className="max-w-3xl mx-auto">
                <Slider
                    dots={true}
                    infinite={true}
                    autoplay={true}
                    speed={400}
                    autoplaySpeed={2500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    arrows={false}
                >
                    {images.map((img, i) => (
                        <div key={i} className="px-3">

                            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-2">

                                {/* FIXED WRAPPER */}
                                <div className="w-full max-w-[500px] mx-auto">

                                    {/* IMPORTANT FIX HERE */}
                                    <img
                                        src={img}
                                        alt="testimonial"
                                        className="w-full h-auto object-fill"
                                    />

                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>


            </div>
        </section>
    );
};

export default Testimonials;
