import { useEffect, useState } from "react";
import { Stars, Shield, Flower, CalendarHeart, Info, X } from "lucide-react";
import chakraBalanceImg from "../assets/services/chakra-balancing.png";
import karmicImprintImg from "../assets/services/karmic-imprint.png";
import healingImg from "../assets/services/healing.png";
import { NavLink } from "react-router";

const ServiceCard = ({ image, title, desc, Icon, onKnowMore }) => {
    return (
        <div className="w-full flex flex-col items-center">


            {/* icons */}
            <div className="flex justify-center -mb-10 z-10 relative">
                <div
                    className="w-20 h-20 rounded-full bg-[#FFFBF2] inset-shadow-xl border-b-4 border-gray-100 flex items-center justify-center" >
                    <Icon className="w-10 h-10 text-purple-700 stroke-[1.5px]" />
                </div>
            </div>

            <div
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden
                   transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl 
                   border border-gray-100 cursor-pointer w-full"
            >
                {/* Image */}
                <img
                    src={image}
                    alt={title}
                    className="w-full h-60 object-cover transition-all duration-500
                     group-hover:opacity-10 group-hover:blur-sm"
                />

                {/* Hover overlay with brief desc */}
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6
                     bg-purple-900/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                >
                    <p className="text-gray-200 text-sm leading-relaxed italic">{desc}</p>
                </div>
            </div>

            {/* Title always visible */}
            <h3 className="text-center mt-7 text-xl font-semibold text-purple-800">
                {title}
            </h3>

            {/* Know More button - opens modal */}
            <button
                onClick={onKnowMore}
                className="flex items-center gap-2 bg-[#7C5190] text-white mt-6 py-2.5 px-4 rounded-2xl font-medium hover:bg-[#a759c9f5] transition text-[14px]"
                aria-label={`Know more about ${title}`}
            >
                <Info size={16} />
                <span>Know More</span>
            </button>
        </div>
    );
};

const ServiceModal = ({ open, onClose, service }) => {
    if (!open || !service) return null;

    const { title, desc, image, Icon, process, benefits, duration, price } = service;

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

            <div className="relative w-full max-w-3xl mx-4 max-h-[90vh] overflow-y-auto">

                <div
                    className="relative bg-white rounded-2xl shadow-2xl p-8 pb-6
                    transition-all duration-300"
                    role="document"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 z-70"
                        aria-label="Close"
                    >
                        <X size={22} className="text-gray-600" />
                    </button>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">

                        {/* Circular Image + Benefits */}
                        <div>
                            <div className="flex justify-center">
                                <div className="w-56 h-56 rounded-full overflow-hidden shadow-inner bg-gray-100">
                                    <img
                                        src={image}
                                        alt={title}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {benefits && (
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-800 mb-1">Benefits:</h4>
                                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                                        {benefits.map((b, i) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Text Content */}
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

                            {/* Duration + Price */}
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

                            {/* Button */}
                            <NavLink>
                                <button
                                    className="bg-[#7C5190] text-white px-6 py-3 rounded-full 
                                font-medium hover:bg-[#a759c9f5] transition"
                                    onClick={() => {
                                        onClose();
                                    }}
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

export const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [modalOpen]);



    const serviceData = [
        {
            title: "Aura Clearing & Chakra Balancing",
            desc: "Energy field analysis revealing hidden imbalances and soul patterns, restoring holistic harmony.",
            Icon: Flower,
            image: chakraBalanceImg,
            process:
                "Comprehensive scanning of your 7-layer auric field to identify energy blocks, attachments, and imbalances.",
            benefits: [
                "Identify energy leaks",
                "Detect spiritual attachments",
                "Reveal chakra imbalances",
                "Understand energy patterns",
            ],
            duration: "30 - 45 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Karmic Imprint Removal",
            desc: "Clear past life karma and ancestral patterns blocking your spiritual and worldly progress, leading to freedom.",
            Icon: Stars,
            image: karmicImprintImg,
            process:
                "Deep karmic clearing across timelines to remove soul contracts, vows, and inherited patterns.",
            benefits: [
                "Release karmic debt",
                "Clear ancestral patterns",
                "Break soul contracts",
                "Free from past life trauma",
            ],
            duration: "60 - 90 minutes",
            price: "₹5,555/-",
        },
        {
            title: "J-Seals & Entity Removal",
            desc: "Remove energetic implants and seals limiting your spiritual growth, restoring sovereignty and peace.",
            Icon: Shield,
            image: healingImg,
            process:
                "Identification and removal of artificial seals and implants that block natural abilities.",
            benefits: [
                "Remove limiting seals",
                "Clear implants",
                "Restore natural abilities",
                "Enhance spiritual gifts",
            ],
            duration: "45 - 60 minutes",
            price: "₹5,555/-",
        },
    ];

    function openModalFor(service) {
        setSelectedService(service);
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
        setTimeout(() => setSelectedService(null), 200);
    }

    return (
        <section className="md:px-22 py-6 bg-[#FFFBF2] font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold mb-4 text-purple-800 font-[Cormorant_Garamond] tracking-tight">
                        Our Healing Services
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        I have developed my 360° method to identify root causes and heal them holistically—restoring harmony to your body, mind, and energy. We guide you toward oneness with the Divine.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                    {serviceData.map((s, i) => (
                        <div key={i}>
                            <ServiceCard
                                image={s.image}
                                title={s.title}
                                desc={s.desc}
                                Icon={s.Icon}
                                onKnowMore={() => openModalFor(s)}
                            />
                        </div>
                    ))}
                </div>

                {/* More Services */}
                <div className="flex justify-center mt-10">
                    <NavLink>
                        <button
                            className="flex items-center gap-2 bg-[#7C5190] text-white mt-6 py-2.5 px-4 rounded-2xl font-medium hover:bg-[#a759c9f5] transition" >
                            <span>More Services</span>
                        </button>
                    </NavLink>
                </div>
            </div>

            <ServiceModal open={modalOpen} onClose={closeModal} service={selectedService} />
        </section>
    );
};
