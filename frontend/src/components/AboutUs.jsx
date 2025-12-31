import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import founderImg from "../assets/founder/founder3.jpg";
import {
    Sparkles,
    RefreshCcw,
    Dna,
    PawPrint,
    History,
    Shield
} from "lucide-react";

// Scroll Animation Hook
const useRevealOnScroll = () => {
    const [visible, setVisible] = useState(false);
    const [ref, setRef] = useState(null);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                } else {
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

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <section className="px-2 md:px-[50px] lg:px-[70px] py-24 bg-[#FFFFFF] font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* IMAGE */}
                <div
                    ref={setRightRef}
                    className={`order-1 md:order-2 flex justify-center md:justify-end overflow-hidden ${rightVisible ? "animate-slide-right" : "opacity-0"
                        }`}
                >
                    <img
                        src={founderImg}
                        alt="Founder of Advait Healing"
                        className="rounded-2xl w-full max-w-md shadow-lg object-cover"
                    />
                </div>

                {/* TEXT */}
                <div
                    ref={setLeftRef}
                    className={`order-2 md:order-1 overflow-hidden pb-6 ${leftVisible ? "animate-slide-left" : "opacity-0"
                        }`}
                >
                    <h2 className="text-5xl font-[Cormorant_Garamond] font-extrabold text-black mb-4">
                        About Advait Healing
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Advait Healing is a sacred space created to help individuals release karmic blocks,
                        clear energetic patterns, and realign with their true divine state. Through intuitive
                        and energy-based healing modalities, we guide you toward inner peace, clarity,
                        and soul harmony.
                    </p>

                    {/* SERVICES */}
                    <div className="mt-10 mb-10">
                        <h3 className="text-2xl font-[Cormorant_Garamond] font-semibold text-black mb-6">
                            Our Healing Services
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            {/* 1. Finding root-cause */}
                            <div className="group bg-white rounded-2xl p-6 shadow-md transition relative overflow-hidden">
                                <Sparkles className="w-8 h-8 text-[#61245D] mb-4 mx-auto transition-transform group-hover:scale-110" />
                                <p className="text-black font-semibold text-center">
                                    Finding root-cause of your<br />Problem
                                </p>

                                <div className="absolute inset-0 bg-white/95 flex items-center justify-center px-4
            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-sm text-gray-700 text-center leading-relaxed">
                                        Identify the underlying emotional, karmic, or energetic causes behind recurring issues.
                                    </p>
                                </div>
                            </div>

                            {/* 2. Releasing Karmic Blockages */}
                            <div className="group bg-white rounded-2xl p-6 shadow-md transition relative overflow-hidden">
                                <RefreshCcw className="w-8 h-8 text-[#61245D] mb-4 mx-auto transition-transform group-hover:scale-110" />
                                <p className="text-black font-semibold text-center">
                                    Releasing<br />Karmic Blockages
                                </p>

                                <div className="absolute inset-0 bg-white/95 flex items-center justify-center px-4
            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-sm text-gray-700 text-center leading-relaxed">
                                        Clear deep-rooted karmic patterns that may be affecting emotional balance and life flow.
                                    </p>
                                </div>
                            </div>

                            {/* 3. Activating DNA */}
                            <div className="group bg-white rounded-2xl p-6 shadow-md transition relative overflow-hidden">
                                <Dna className="w-8 h-8 text-[#61245D] mb-4 mx-auto transition-transform group-hover:scale-110" />
                                <p className="text-black font-semibold text-center">
                                    Activating your<br />DNA
                                </p>

                                <div className="absolute inset-0 bg-white/95 flex items-center justify-center px-4
            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-sm text-gray-700 text-center leading-relaxed">
                                        Support energetic awakening and deeper alignment with your inner potential and awareness.
                                    </p>
                                </div>
                            </div>

                            {/* 4. Animal Communication */}
                            <div className="group bg-white rounded-2xl p-6 shadow-md transition relative overflow-hidden">
                                <PawPrint className="w-8 h-8 text-[#61245D] mb-4 mx-auto transition-transform group-hover:scale-110" />
                                <p className="text-black font-semibold text-center">
                                    Animal<br />Communication
                                </p>

                                <div className="absolute inset-0 bg-white/95 flex items-center justify-center px-4
            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-sm text-gray-700 text-center leading-relaxed">
                                        Understand emotional, behavioral, and energetic messages shared by animals.
                                    </p>
                                </div>
                            </div>

                            {/* 5. Past Life Regression */}
                            <div className="group bg-white rounded-2xl p-6 shadow-md transition relative overflow-hidden">
                                <History className="w-8 h-8 text-[#61245D] mb-4 mx-auto transition-transform group-hover:scale-110" />
                                <p className="text-black font-semibold text-center">
                                    Past life<br />Regression
                                </p>

                                <div className="absolute inset-0 bg-white/95 flex items-center justify-center px-4
            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-sm text-gray-700 text-center leading-relaxed">
                                        Explore unresolved patterns and experiences from past lives influencing the present.
                                    </p>
                                </div>
                            </div>

                            {/* 6. Black Magic Removal */}
                            <div className="group bg-white rounded-2xl p-6 shadow-md transition relative overflow-hidden">
                                <Shield className="w-8 h-8 text-[#61245D] mb-4 mx-auto transition-transform group-hover:scale-110" />
                                <p className="text-black font-semibold text-center">
                                    Black magic<br />Removal
                                </p>

                                <div className="absolute inset-0 bg-white/95 flex items-center justify-center px-4
            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-sm text-gray-700 text-center leading-relaxed">
                                        Clear external negative energies and restore energetic protection and stability.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <NavLink to="/aboutOurInstructors">
                        <span className="inline-block bg-[#61245D] text-white py-2.5 px-6 rounded-full font-medium text-[15px] hover:bg-[#82327c] transition">
                            More About Us
                        </span>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};
