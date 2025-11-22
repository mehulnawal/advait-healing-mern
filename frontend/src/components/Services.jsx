import { useEffect, useState } from "react";
import { Stars, Shield, Flower, CalendarHeart, Info, X } from "lucide-react";
import chakraBalanceImg from "../assets/services/chakra-balancing.png";
import karmicImprintImg from "../assets/services/karmic-imprint.png";
import healingImg from "../assets/services/healing.png";
import { NavLink } from "react-router";

// ------------------- CARD -------------------
const ServiceCard = ({ image, title, desc, Icon, onKnowMore }) => {
    return (
        <div className="w-full flex flex-col items-center">

            {/* Icon */}
            <div className="flex justify-center -mb-10 z-10 relative">
                <div className="w-20 h-20 rounded-full bg-[#FFFBF2] border-b-4 border-gray-200 shadow-md flex items-center justify-center">
                    <Icon className="w-10 h-10 text-purple-700 stroke-[1.5px]" />
                </div>
            </div>

            {/* Card */}
            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 w-full cursor-pointer">

                <img
                    src={image}
                    alt={title}
                    className="w-full h-60 object-cover"
                />

                {/* Hover Info */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6
                    bg-purple-900/80 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-gray-200 text-sm leading-relaxed italic">{desc}</p>
                </div>
            </div>

            {/* Title */}
            <h3 className="text-center mt-7 text-xl font-semibold text-purple-800">
                {title}
            </h3>

            {/* Button */}
            <button
                onClick={onKnowMore}
                className="flex items-center gap-2 bg-[#7C5190] text-white mt-6 py-2.5 px-4 rounded-2xl font-medium hover:bg-[#a759c9f5] transition text-[14px]"
            >
                <Info size={16} />
                <span>Know More</span>
            </button>
        </div>
    );
};


// ------------------- MODAL -------------------
const ServiceModal = ({ open, onClose, service }) => {
    if (!open || !service) return null;

    const { title, desc, image, process, benefits, duration, price } = service;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            aria-modal="true"
            role="dialog"
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            {/* Modal */}
            <div className="relative w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto">
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 pb-6">

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
                    >
                        <X size={22} className="text-gray-600" />
                    </button>

                    {/* Modal Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">

                        {/* Image */}
                        <div>
                            <div className="flex justify-center">
                                <div className="w-56 h-56 rounded-full overflow-hidden shadow-inner bg-gray-100">
                                    <img src={image} alt={title} className="object-cover w-full h-full" />
                                </div>
                            </div>

                            {/* Benefits */}
                            {benefits && (
                                <div className="mt-6">
                                    <h4 className="font-semibold text-gray-800 mb-1">Benefits:</h4>
                                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                                        {benefits.map((b, i) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Right Text */}
                        <div>
                            <h3 className="text-3xl font-[Cormorant_Garamond] font-bold text-gray-900 mb-3">
                                {title}
                            </h3>

                            <p className="text-gray-600 mb-4">{desc}</p>

                            {process && (
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-800 mb-1">Process:</h4>
                                    <p className="text-gray-600">{process}</p>
                                </div>
                            )}

                            {/* Duration & Price */}
                            <div className="flex items-center gap-6 mt-4 mb-6">
                                {duration && (
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <span className="text-lg">⏱️</span>
                                        <div>
                                            <div className="text-sm text-gray-500">Duration</div>
                                            <div className="font-medium">{duration}</div>
                                        </div>
                                    </div>
                                )}

                                {price && (
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <span className="text-lg">💠</span>
                                        <div>
                                            <div className="text-sm text-gray-500">Energy Exchange</div>
                                            <div className="font-medium">{price}</div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* CTA */}
                            <NavLink>
                                <button
                                    className="bg-[#7C5190] text-white px-6 py-3 rounded-full font-medium hover:bg-[#a759c9f5] transition"
                                    onClick={onClose}
                                >
                                    Book This Session
                                </button>
                            </NavLink>
                        </div>
                    </div>

                    <div className="text-center text-sm text-gray-400 mt-6">
                        <em>All sessions offered are energy-based and transformational.</em>
                    </div>
                </div>
            </div>
        </div>
    );
};


// ------------------- MAIN SECTION -------------------
export const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = modalOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [modalOpen]);

    const serviceData = [
        {
            title: "Aura Clearing & Chakra Balancing",
            desc: "Energy field analysis revealing hidden imbalances and soul patterns.",
            Icon: Flower,
            image: chakraBalanceImg,
            process: "Comprehensive scanning of your 7-layer auric field.",
            benefits: ["Reveal chakra issues", "Remove energetic blocks", "Restore balance"],
            duration: "30 - 45 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Karmic Imprint Removal",
            desc: "Clear past life karma and ancestral patterns blocking your progress.",
            Icon: Stars,
            image: karmicImprintImg,
            process: "Deep karmic clearing across all timelines.",
            benefits: ["Release karmic debt", "Break patterns", "Free past-life trauma"],
            duration: "60 - 90 minutes",
            price: "₹5,555/-",
        },
        {
            title: "J-Seals & Entity Removal",
            desc: "Remove energetic implants limiting your spiritual growth.",
            Icon: Shield,
            image: healingImg,
            process: "Identification and removal of seals and implants.",
            benefits: ["Restore inner peace", "Clear attachments", "Enhance spiritual growth"],
            duration: "45 - 60 minutes",
            price: "₹5,555/-",
        },
    ];

    return (
        <section className="px-5 md:px-22 py-6 bg-[#FFFBF2] font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold mb-4 text-purple-800 font-[Cormorant_Garamond] tracking-tight">
                        Our Healing Services
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Explore transformational healing modalities designed to help you align with your highest self.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                    {serviceData.map((s, i) => (
                        <ServiceCard
                            key={i}
                            image={s.image}
                            title={s.title}
                            desc={s.desc}
                            Icon={s.Icon}
                            onKnowMore={() => {
                                setSelectedService(s);
                                setModalOpen(true);
                            }}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="flex justify-center mt-10">
                    <NavLink>
                        <button className="flex items-center gap-2 bg-[#7C5190] text-white mt-6 py-2.5 px-4 rounded-2xl font-medium hover:bg-[#a759c9f5] transition">
                            <span>More Services</span>
                        </button>
                    </NavLink>
                </div>
            </div>

            {/* Modal */}
            <ServiceModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                service={selectedService}
            />
        </section>
    );
};
