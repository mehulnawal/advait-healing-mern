import { useEffect, useState } from "react";
import {
    Stars,
    Shield,
    Flower,
    CalendarHeart,
    Info,
    X,
    Zap,
    Repeat,
    Compass,
    Eye,
    Sparkles,
    HeartHandshake,
    Grid3x3,
    History,
    Flower2,
    Mountain,
    PawPrint,
    ShieldAlert,
    Home,
    Ghost,
    Circle,
    Heart,
    Coins,
    BookOpenCheck
} from "lucide-react";
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

        { type: "heading", label: "Sequential Journey" },

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
            process: "Deep karmic clearing across timelines to remove soul contracts, vows, and inherited patterns.",
            benefits: ["Release karmic debt", "Clear ancestral patterns", "Break patterns", "Free past-life trauma"],
            duration: "60 - 90 minutes",
            price: "₹5,555/-",
        },
        {
            title: "J-Seals Implant & Entity Removal",
            desc: "Remove energetic implants and seals limiting spiritual growth.",
            Icon: Shield,
            image: healingImg,
            process: "Identification and removal of artificial seals and implants that block natural abilities.",
            benefits: ["Restore inner peace", "Clear attachments", "Restore natural abilities", "Enhance spiritual gifts"],
            duration: "45 - 60 minutes",
            price: "₹5,555/-",
        },

        // 🔮 ADVANCED SERVICES
        {
            title: "Advanced Soul Clearing",
            desc: "Deep energetic cleansing to free your soul from lower vibrations.",
            Icon: Zap,
            image: chakraBalanceImg,
            process: "Comprehensive soul cleansing removing negative entities, attachments, and low-vibrational energies",
            benefits: ["Clear negative entities", "Remove attachments", "Raise vibration", "Restore soul purity"],
            duration: "75 - 90 minutes",
            price: "₹5,555/-",
        },
        {
            title: "DNA Activation I, II, III",
            desc: "Activate dormant DNA strands to unlock your highest potential.",
            Icon: Repeat,
            image: chakraBalanceImg,
            process: "Sequential activation of 12-strand DNA to unlock dormant abilities and enhance consciousness",
            benefits: ["Activate psychic abilities", "Enhance intuition", "Improve health", 'Expand consciousness '],
            duration: "60 minutes Per Level",
            price: "₹5,555/-",
        },
        {
            title: "Golden DNA Activation I, II, III",
            desc: "Higher frequency DNA upgrades for quantum consciousness expansion.",
            Icon: Stars,
            image: karmicImprintImg,
            process: "Advanced golden frequency DNA activation for higher dimensional consciousness",
            benefits: ["Access higher dimensions", "Quantum consciousness", "Enhanced manifestation", "Cosmic connection"],
            duration: "90 Minutes Per Level",
            price: "₹5,555/-",
        },
        {
            title: "Soul Matrix Integration",
            desc: "Reprogram your soul blueprint for alignment with purpose.",
            Icon: Compass,
            image: chakraBalanceImg,
            process: "Reprogramming of soul matrix to align with highest purpose and divine blueprint",
            benefits: ["Align with purpose", "Clear limiting beliefs", "Enhance soul gifts", "Activate life mission"],
            duration: "90 - 120 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Clairvoyance Programming",
            desc: "Unlock and enhance your natural psychic and intuitive abilities.",
            Icon: Eye,
            image: chakraBalanceImg,
            process: "Activation and enhancement of clairvoyant abilities through energy programming",
            benefits: ["Enhance psychic sight", "Develop intuition", "See energy fields", "Access higher guidance"],
            duration: "60 - 75 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Indigo Activation",
            desc: "Special activation for lightworkers and spiritually awakened souls.",
            Icon: Sparkles,
            image: karmicImprintImg,
            process: "Specialized activation for indigo souls to fully embody their lightworker mission",
            benefits: ["Activate lightworker gifts", "Enhance healing abilities", "Strengthen mission clarity", "Connect with star family"],
            duration: "90 - 120 minutes",
            price: "₹5,555/-",
        },

        // 🕊️ SPECIALIZED SERVICES — Healer: Deepa
        { type: "heading", label: "Specialized Services" },
        {
            title: "Tarot Card Healing",
            desc: "Guidance through tarot with healing energy infusion.",
            Icon: CalendarHeart,
            image: healingImg,
            process: "Intuitive tarot reading combined with healing energy transmission",
            benefits: ["Gain clarity", "Receive guidance", "Heal emotional wounds", "Make empowered decisions"],
            duration: "45 - 60 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Angelic Healing",
            desc: "Channel angelic frequencies for deep spiritual healing and protection.",
            Icon: HeartHandshake,
            image: chakraBalanceImg,
            process: "Channeling angelic energies for healing, protection, and spiritual guidance",
            benefits: ["Angelic protection", "Spiritual healing", "Higher guidance", "Peace and comfort"],
            duration: "60 - 75 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Mokshapattam Analysis",
            desc: "Ancient energy mapping technique for soul pattern analysis.",
            Icon: Grid3x3,
            image: karmicImprintImg,
            process: "Traditional energy mapping to understand soul patterns and life path",
            benefits: ["Understand soul patterns", "Map life path", "Identify challenges", "Reveal opportunities"],
            duration: "60 - 90 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Past Life Regression & Hypno Heal",
            desc: "Journey into past lives for healing and soul memory integration.",
            Icon: History,
            image: healingImg,
            process: "Guided regression to access past life memories for healing and understanding",
            benefits: ["Heal past life trauma", "Understand soul lessons", "Release phobias", "Integrate wisdom"],
            duration: "90 - 120 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Reiki Healing",
            desc: "Universal life force energy healing for physical and emotional balance.",
            Icon: Flower2,
            image: chakraBalanceImg,
            process: "Traditional Reiki energy healing for physical, emotional, and spiritual wellness",
            benefits: ["Physical healing", "Emotional balance", "Stress relief", "Energy restoration"],
            duration: "45 - 60 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Lama Ferra",
            desc: "Tibetan healing technique for spiritual purification and energy alignment.",
            Icon: Mountain,
            image: karmicImprintImg,
            process: "Ancient Tibetan healing method for deep spiritual purification",
            benefits: ["Spiritual purification", "Energy alignment", "Karmic clearing", "Inner peace"],
            duration: "60 - 75 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Animal Communication & Healing",
            desc: "Connect with and heal your beloved animal companions telepathically.",
            Icon: PawPrint,
            image: healingImg,
            process: "Telepathic communication with animals for understanding and healing",
            benefits: ["Understand pet behavior ", "Heal animal trauma", "Strengthen bond ", "Receive messages"],
            duration: "45 - 60 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Black Magic Removal",
            desc: "Protection and cleansing from negative magical influences.",
            Icon: ShieldAlert,
            image: chakraBalanceImg,
            process: "Identification and removal of black magic, curses, and negative spells",
            benefits: ["Remove curses", "Clear black magic", "Restore protection", "Heal spiritual attacks"],
            duration: "90 - 120 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Space Clearing",
            desc: "Cleanse and bless your home or workspace with energy.",
            Icon: Home,
            image: karmicImprintImg,
            process: "Remote or in-person clearing of negative energies from spaces",
            benefits: ["Clear negative energy", "Bless space", "Improve atmosphere", "Enhance harmony"],
            duration: "60 - 90 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Entity Removal",
            desc: "Remove attached entities and negative spiritual influences.",
            Icon: Ghost,
            image: healingImg,
            process: "Safe removal of attached entities and negative spiritual influences",
            benefits: ["Remove entities", "Clear attachments", "Restore energy", "Enhance protection"],
            duration: "75 - 90 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Chakra Healing",
            desc: "Align and balance your seven energy centers for optimal flow.",
            Icon: Circle,
            image: chakraBalanceImg,
            process: "Comprehensive balancing and alignment of all seven chakras",
            benefits: ["Balance energy centers", "Improve energy flow", "Enhance vitality", "Restore harmony"],
            duration: "60 - 75 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Relationship Healing",
            desc: "Heal heart wounds and attract your soulmate connection.",
            Icon: Heart,
            image: karmicImprintImg,
            process: "Healing of relationship patterns and heart chakra for love attraction",
            benefits: ["Heal relationship trauma", "Attract soulmate", "Improve self-love", "Clear love blocks"],
            duration: "75 - 90 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Wealth Abundance Healing",
            desc: "Remove money blocks and align with prosperity consciousness.",
            Icon: Coins,
            image: healingImg,
            process: "Clearing of abundance blocks and activation of prosperity consciousness",
            benefits: ["Remove money blocks", "Attract abundance", "Shift money mindset", "Enhance prosperity"],
            duration: "60 - 75 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Akashik Records",
            desc: "Access your soul's eternal records for profound life insights.",
            Icon: BookOpenCheck,
            image: chakraBalanceImg,
            process: "Accessing the Akashik Records to retrieve soul information and guidance",
            benefits: ["Access soul records", "Understand life purpose", "Receive guidance", "Heal soul wounds"],
            duration: "75 - 90 minutes",
            price: "₹5,555/-",
        },
    ];


    return (
        <section className="px-5 md:px-[50px] lg:px-[70px] py-6 bg-[#FFFBF2] font-sans">
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
                    {serviceData.map((item, idx) => {
                        if (item.type === "heading") {
                            return (
                                <div
                                    key={idx}
                                    className="col-span-full text-3xl font-bold uppercase my-2 text-center text-[#7C5190]"
                                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                                >
                                    {item.label}
                                </div>
                            );
                        }

                        return (
                            <ServiceCard
                                key={idx}
                                image={item.image}
                                title={item.title}
                                short={item.desc}
                                Icon={item.Icon}
                                onKnowMore={() => {
                                    setSelectedService(item);
                                    setModalOpen(true);
                                }}
                            />
                        );
                    })}

                </div>

                {/* CTA */}
                {/* <div className="flex justify-center mt-10">
                    <NavLink>
                        <button className="flex items-center gap-2 bg-[#7C5190] text-white mt-6 py-2.5 px-4 rounded-2xl font-medium hover:bg-[#a759c9f5] transition">
                            <span>More Services</span>
                        </button>
                    </NavLink>
                </div> */}
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
