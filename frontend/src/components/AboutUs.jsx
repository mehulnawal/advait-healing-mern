import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import founderImg from "../assets/founder/founder.png";


// 👉 Scroll Animation Hook
const useRevealOnScroll = () => {
    const [visible, setVisible] = useState(false);
    const [ref, setRef] = useState(null);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // When entering → play animation
                    setVisible(true);
                } else {
                    // When leaving → reset so animation can replay next time
                    setVisible(false);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(ref);
        return () => observer.disconnect();
    }, [ref]);

    return [setRef, visible];
};

export const About = () => {

    const [setLeftRef, leftVisible] = useRevealOnScroll();
    const [setRightRef, rightVisible] = useRevealOnScroll();

    return (
        <section className="px-18 md:px-22 py-24 bg-[#FFFBF2] font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* === LEFT TEXT SECTION === */}
                <div
                    ref={setLeftRef}
                    className={`${leftVisible ? "animate-slide-left" : "opacity-0"}`}
                >
                    <h2 className="text-5xl font-[Cormorant_Garamond] font-extrabold text-purple-800 mb-4">
                        About Advait Healing
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Advait Healing is a sacred space created to help individuals release karmic blocks,
                        clear energetic patterns, and realign with their true divine state. Through intuitive
                        and energy-based healing modalities, we guide you toward inner peace, clarity,
                        and soul harmony.
                    </p>

                    {/* 3 Spiritual Points */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        <div className="bg-white shadow-md rounded-xl p-4 text-center">
                            <p className="text-purple-800 font-semibold">Chakra<br />Balancing</p>
                        </div>
                        <div className="bg-white shadow-md rounded-xl p-4 text-center">
                            <p className="text-purple-800 font-semibold">Karmic<br />Imprint Release</p>
                        </div>
                        <div className="bg-white shadow-md rounded-xl p-4 text-center">
                            <p className="text-purple-800 font-semibold">Entity /<br />J-Seal Clearing</p>
                        </div>
                    </div>

                    <NavLink>
                        <span className="bg-[#7C5190] text-white py-2.5 px-6 rounded-full font-medium text-[15px] hover:bg-[#a759c9f5] transition">
                            More About Us
                        </span>
                    </NavLink>
                </div>

                {/* === RIGHT IMAGE SECTION === */}
                <div
                    ref={setRightRef}
                    className={`flex justify-center md:justify-end ${rightVisible ? "animate-slide-right" : "opacity-0"}`}
                >
                    <img
                        src={founderImg}
                        alt="Founder of Advait Healing"
                        className="rounded-2xl w-full max-w-md shadow-lg object-cover"
                    />
                </div>

            </div>
        </section>
    );
};
