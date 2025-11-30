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

import advancedSoulProgramming from "../assets/services/advanced-soul-programing.jpg";
import akashicHealing from "../assets/services/akashic-healing.jpeg";
import angelicHealing from "../assets/services/angleicl-healing.jpeg";
import animalCommunication from "../assets/services/animal-communication.jpeg";
import auroScan from "../assets/services/auro-scan.jpg";
import blackMagicRemoval from "../assets/services/black-magic-removal.jpeg";
import chakraHealing from "../assets/services/chakra-healing.jpeg";
import clairvoyanceProgramming from "../assets/services/clairvoyance-programming.jpg";
import entityRemoval from "../assets/services/entity-removal.jpeg";
import goldenDnaActivation from "../assets/services/golden-dna-activation.jpg";
import dnaActivation from "../assets/services/dna-activation.jpg";
import indigoActivation from "../assets/services/indigo-activation.jpg";
import jSealsImplantRemoval from "../assets/services/jseals-implant-entity-removal.jpg";
import karmicImprintRemoval from "../assets/services/karmic-imprint-removal.jpg";
import lamaFera from "../assets/services/lama-fera.jpeg";
import mokshapattamHealing from "../assets/services/mokshapattam-healing.jpeg";
import pastLifeRegression from "../assets/services/past-life-regression.jpeg";
import reikiHealing from "../assets/services/reiki-healing.jpeg";
import relationshipHealing from "../assets/services/relationship-healing.jpeg";
import soulMatrixIntegration from "../assets/services/soul-matrix-inigration.jpg";
import spaceClearing from "../assets/services/space-clearing.jpeg";
import tarotCardReading from "../assets/services/total-card-reading.jpeg";
import wealthAbundance from "../assets/services/walth-abundance.jpeg";


import { NavLink } from "react-router";

// ------------------- CARD -------------------
const ServiceCard = ({ image, title, desc, Icon, onKnowMore }) => {
    return (
        <div className="w-full flex flex-col items-center">

            {/* Icon */}
            <div className="flex justify-center -mb-8 z-10 relative">
                <div className="w-16 h-16 rounded-full bg-[#FFFBF2] border border-gray-300 shadow flex items-center justify-center">
                    <Icon className="w-7 h-7 text-purple-700 stroke-[1.6px]" />
                </div>
            </div>

            {/* Card */}
            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 w-full cursor-pointer pt-10 pb-4">

                {/* Circular Image */}
                <div className="flex justify-center">
                    <div className="w-48 h-48 rounded-full overflow-hidden shadow-md bg-gray-100">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Hover Info */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6
                    bg-purple-900/80 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-gray-200 text-sm leading-relaxed italic text-center">{desc}</p>
                </div>
            </div>

            {/* Title */}
            <h3 className="text-center mt-5 text-xl font-semibold text-purple-800">
                {title}
            </h3>

            {/* Button */}
            <button
                onClick={onKnowMore}
                className="flex items-center gap-2 bg-[#7C5190] text-white mt-4 py-2 px-4 rounded-2xl font-medium hover:bg-[#a759c9f5] transition text-[14px]"
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
                            <NavLink to='bookMySession'>
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
            image: auroScan,
            process: "Comprehensive scanning of your 7-layer auric field.",
            benefits: ["Reveal chakra issues", "Remove energetic blocks", "Restore balance"],
            duration: "30 - 45 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Karmic Imprint Removal",
            desc: "Clear past life karma and ancestral patterns blocking your progress.",
            Icon: Stars,
            image: karmicImprintRemoval,
            process: "Deep karmic clearing across timelines...",
            benefits: ["Release karmic debt", "Clear ancestral patterns", "Break patterns", "Free past-life trauma"],
            duration: "60 - 90 minutes",
            price: "₹5,555/-",
        },
        {
            title: "J-Seals Implant & Entity Removal",
            desc: "Remove energetic implants and seals limiting spiritual growth.",
            Icon: Shield,
            image: jSealsImplantRemoval,
            process: "Identification and removal of artificial seals...",
            benefits: ["Restore inner peace", "Clear attachments", "Restore natural abilities", "Enhance spiritual gifts"],
            duration: "45 - 60 minutes",
            price: "₹5,555/-",
        },

        // ⚡ ADVANCED SERVICES
        {
            title: "Advanced Soul Clearing",
            desc: "Deep energetic cleansing to free your soul from lower vibrations.",
            Icon: Zap,
            image: soulMatrixIntegration,
            process: "Comprehensive soul cleansing...",
            benefits: ["Clear negative entities", "Remove attachments", "Raise vibration", "Restore soul purity"],
            duration: "75 - 90 minutes",
            price: "₹5,555/-",
        },
        {
            title: "DNA Activation I, II, III",
            desc: "Activate dormant DNA strands to unlock your highest potential.",
            Icon: Repeat,
            image: dnaActivation,
            process: "Sequential activation...",
            benefits: ["Activate psychic abilities", "Enhance intuition", "Improve health", "Expand consciousness"],
            duration: "60 minutes Per Level",
            price: "₹5,555/-",
        },
        {
            title: "Golden DNA Activation I, II, III",
            desc: "Higher frequency DNA upgrades...",
            Icon: Stars,
            image: goldenDnaActivation,
            process: "Advanced golden frequency activation...",
            benefits: ["Access higher dimensions", "Quantum consciousness", "Enhanced manifestation", "Cosmic connection"],
            duration: "90 Minutes Per Level",
            price: "₹5,555/-",
        },
        {
            title: "Soul Matrix Integration",
            desc: "Reprogram your soul blueprint for alignment with purpose.",
            Icon: Compass,
            image: chakraHealing,
            process: "Reprogramming soul matrix...",
            benefits: ["Align with purpose", "Clear limiting beliefs", "Enhance soul gifts", "Activate life mission"],
            duration: "90 - 120 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Clairvoyance Programming",
            desc: "Unlock and enhance your natural psychic abilities.",
            Icon: Eye,
            image: clairvoyanceProgramming,
            process: "Activation of clairvoyance...",
            benefits: ["Enhance psychic sight", "Develop intuition", "See energy fields", "Access higher guidance"],
            duration: "60 - 75 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Indigo Activation",
            desc: "Special activation for lightworkers.",
            Icon: Sparkles,
            image: indigoActivation,
            process: "Indigo alignment process...",
            benefits: ["Activate lightworker gifts", "Enhance healing abilities", "Mission clarity", "Star family connection"],
            duration: "90 - 120 minutes",
            price: "₹5,555/-",
        },

        // 🌟 SPECIALIZED SERVICES
        { type: "heading", label: "Specialized Services" },

        {
            title: "Tarot Card Healing",
            desc: "Guidance through tarot with healing frequency.",
            Icon: CalendarHeart,
            image: tarotCardReading,
            process: "Intuitive tarot healing...",
            benefits: ["Gain clarity", "Emotional healing", "Guidance", "Better decisions"],
            duration: "45 - 60 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Angelic Healing",
            desc: "Channel angelic frequencies for deep healing.",
            Icon: HeartHandshake,
            image: angelicHealing,
            process: "Channelling angelic energies...",
            benefits: ["Angelic protection", "Spiritual guidance", "Peace", "Healing"],
            duration: "60 - 75 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Mokshapattam Analysis",
            desc: "Ancient soul path mapping.",
            Icon: Grid3x3,
            image: mokshapattamHealing,
            process: "Energy mapping...",
            benefits: ["Soul pattern clarity", "Challenges", "Opportunities"],
            duration: "60 - 90 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Past Life Regression",
            desc: "Journey into past lives for deep healing.",
            Icon: History,
            image: pastLifeRegression,
            process: "Guided regression...",
            benefits: ["Heal past trauma", "Soul lessons", "Release fears", "Wisdom"],
            duration: "90 - 120 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Reiki Healing",
            desc: "Universal life force healing.",
            Icon: Flower2,
            image: reikiHealing,
            process: "Traditional Reiki...",
            benefits: ["Emotional balance", "Energy restoration", "Stress relief"],
            duration: "45 - 60 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Lama Fera",
            desc: "Powerful Tibetan healing.",
            Icon: Mountain,
            image: lamaFera,
            process: "Tibetan cleansing...",
            benefits: ["Purification", "Alignment", "Karmic clearing"],
            duration: "60 - 75 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Animal Communication & Healing",
            desc: "Telepathic connection with animals.",
            Icon: PawPrint,
            image: animalCommunication,
            process: "Telepathic communication...",
            benefits: ["Understand pets", "Heal trauma", "Bond deeper"],
            duration: "45 - 60 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Black Magic Removal",
            desc: "Cleansing from negative influences.",
            Icon: ShieldAlert,
            image: blackMagicRemoval,
            process: "Removing curses...",
            benefits: ["Protection", "Energy clearing", "Healing"],
            duration: "90 - 120 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Space Clearing",
            desc: "Cleanse your home/office energy.",
            Icon: Home,
            image: spaceClearing,
            process: "Energy cleansing...",
            benefits: ["Positive space", "Harmony", "Remove negativity"],
            duration: "60 - 90 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Entity Removal",
            desc: "Remove negative energies and entities.",
            Icon: Ghost,
            image: entityRemoval,
            process: "Safe removal of entities...",
            benefits: ["Energy clarity", "Protection", "Healing"],
            duration: "75 - 90 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Relationship Healing",
            desc: "Heal heart wounds.",
            Icon: Heart,
            image: relationshipHealing,
            process: "Heart chakra clearing...",
            benefits: ["Heal trauma", "Soulmate alignment", "Self-love"],
            duration: "75 - 90 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Wealth Abundance Healing",
            desc: "Remove money blocks.",
            Icon: Coins,
            image: wealthAbundance,
            process: "Prosperity activation...",
            benefits: ["Money flow", "Abundance mindset"],
            duration: "60 - 75 minutes",
            price: "₹5,555/-",
        },
        {
            title: "Akashic Records",
            desc: "Access your soul’s eternal records.",
            Icon: BookOpenCheck,
            image: akashicHealing,
            process: "Reading soul records...",
            benefits: ["Life purpose", "Guidance", "Healing"],
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
                                desc={item.desc}
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
