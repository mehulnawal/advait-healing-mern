import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import t1 from "../assets/testimonials/test1.jpg";
import t2 from "../assets/testimonials/test2.jpg";
import t3 from "../assets/testimonials/test3.jpg";
import t4 from "../assets/testimonials/test4.jpg";
import t5 from "../assets/testimonials/test5.jpg";
import t6 from "../assets/testimonials/test6-monaMam.png";
import t7 from "../assets/testimonials/test7-monaMam.png";

export const TestimonialsSeparatePage = () => {
    const testimonials = [
        { img: t1, title: "Stress & Anxiety" },
        { img: t2, title: "Career Growth" },
        { img: t3, title: "Emotional Healing" },
        { img: t4, title: "Relationship Healing" },
        { img: t5, title: "Cancer Healing" },
        { img: t6, title: "Spiritual Awakening" },
        { img: t7, title: "Manifestation & Career" },
    ];

    return (
        <section className="px-2 md:px-[50px] lg:px-[70px] py-16 bg-white">
            <h2 className="text-center text-5xl font-[Cormorant_Garamond] font-bold text-black mb-12">
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
                    {testimonials.map((item, i) => (
                        <div key={i} className="px-3">
                            <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-3">

                                {/* LABEL */}
                                <span className="absolute top-4 left-4 z-10 bg-gray-100 text-black text-xs md:text-sm font-medium px-4 py-1.5 rounded-full shadow">
                                    {item.title}
                                </span>

                                {/* IMAGE */}
                                <div className="w-full max-w-[500px] mx-auto">
                                    <img
                                        src={item.img}
                                        alt="testimonial"
                                        className="w-full max-h-[420px] md:max-h-[480px] object-contain rounded-xl"
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

