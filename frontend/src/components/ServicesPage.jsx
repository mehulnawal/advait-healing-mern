import { useEffect, useState } from "react";
import {
    Stars,
    Shield,
    Flower,
    CalendarHeart,
    Info,
    X,
    Scissors,
    Repeat,
    HeartHandshake,
    Zap,
    UserCheck,
    Compass,
} from "lucide-react";
// Example image imports used on home — keep if you have them in your assets folder
import chakraBalanceImg from "../assets/services/chakra-balancing.png";
import karmicImprintImg from "../assets/services/karmic-imprint.png";
import healingImg from "../assets/services/healing.png";
// Fallback / hero image uses the uploaded local file path
const HERO_IMAGE = "/mnt/data/founder.png";

// If you have other service images, import them similarly (or replace with real paths).
// import soulHealingImg from "../assets/services/soul-healing.png";
// import quantumWorkImg from "../assets/services/quantum-work.png";
// ...etc

// ------------------- SERVICE CARD -------------------
const ServiceCard = ({ image, title, short, Icon, onKnowMore }) => {
    return (
        <div className="w-full flex flex-col items-center relative text-center">
            {/* Icon */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                <div className="w-20 h-20 rounded-full bg-[#FFFFFF] border-b-4 border-gray-200 shadow-md flex items-center justify-center">
                    <Icon className="w-10 h-10 text-[#050505] stroke-[1.5px]" />
                </div>

                <div className="w-px h-6 bg-gray-300"></div>
            </div>

            {/* Card */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-[#efe6d2] w-full pt-12 cursor-pointer">
                <div className="w-full h-48 bg-gray-100">
                    {image ? (
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                            No image
                        </div>
                    )}
                </div>

                {/* Hover Info */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6
                    bg-[#61245D]/88 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-gray-200 text-sm leading-relaxed italic">{short}</p>
                </div>
            </div>

            {/* Title */}
            <h3
                className="text-center mt-6 text-xl font-semibold text-[#61245D]"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
                {title}
            </h3>

            {/* Button */}
            <div className="flex justify-center">
                <button
                    onClick={onKnowMore}
                    className="flex items-center gap-2 bg-[#61245D] text-white mt-5 py-2.5 px-4 rounded-2xl font-medium hover:bg-[#a759c9] transition text-[14px]"
                >
                    <Info size={16} />
                    <span>Know More</span>
                </button>
            </div>
        </div>
    );
};

// ------------------- MODAL -------------------
const ServiceModal = ({ open, onClose, service }) => {
    if (!open || !service) return null;

    const { title, long, image, process, benefits, duration, price, whoFor } = service;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            aria-modal="true"
            role="dialog"
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            {/* Modal */}
            <div className="relative w-full max-w-4xl mx-auto max-h-[90vh] overflow-y-auto">
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 pb-6">
                    {/* Close */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
                    >
                        <X size={22} className="text-gray-600" />
                    </button>

                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        <div>
                            <div className="flex justify-center">
                                <div className="w-56 h-56 rounded-full overflow-hidden shadow-inner bg-gray-100">
                                    <img src={image || HERO_IMAGE} alt={title} className="object-cover w-full h-full" />
                                </div>
                            </div>

                            {benefits && (
                                <div className="mt-6">
                                    <h4 className="font-semibold text-gray-800 mb-2">Benefits</h4>
                                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                                        {benefits.map((b, i) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div>
                            <h3
                                className="text-3xl font-bold text-gray-900 mb-3"
                                style={{ fontFamily: "Cormorant Garamond, serif" }}
                            >
                                {title}
                            </h3>

                            <p className="text-gray-700 mb-4">{long}</p>

                            {process && (
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-800 mb-1">Process</h4>
                                    <p className="text-gray-600">{process}</p>
                                </div>
                            )}

                            {whoFor && (
                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-800 mb-1">Who this is for</h4>
                                    <p className="text-gray-600">{whoFor}</p>
                                </div>
                            )}

                            <div className="flex items-center gap-6 mt-4 mb-6 flex-wrap">
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

                            <div className="flex gap-3">
                                <a href="/book" className="inline-block">
                                    <button
                                        onClick={onClose}
                                        className="bg-[#050505] text-white px-6 py-3 rounded-full font-medium hover:opacity-95 transition"
                                    >
                                        Book This Session
                                    </button>
                                </a>

                                <button
                                    onClick={onClose}
                                    className="px-6 py-3 rounded-full border border-gray-200 hover:bg-gray-50 transition"
                                >
                                    Close
                                </button>
                            </div>
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

// ------------------- MAIN PAGE -------------------
export default function ServicesPage() {
    const [selectedService, setSelectedService] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(() => {
        document.body.style.overflow = modalOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [modalOpen]);

    const services = [
        {
            title: "Aura Clearing & Chakra Balancing",
            short: "Energy field analysis revealing hidden imbalances and soul patterns.",
            long:
                "A thorough scan of the auric layers and chakra system to locate imbalances, release blockages, and restore flow across body, mind and energy.",
            Icon: Flower,
            image: chakraBalanceImg || HERO_IMAGE,
            process: "Comprehensive 7-layer auric scan followed by targeted chakra clearing.",
            benefits: ["Reveal chakra issues", "Remove energetic blocks", "Restore balance"],
            duration: "30 - 45 minutes",
            price: "₹5,555/-",
            whoFor: "People feeling stuck, tired, or out of alignment — useful as a first session.",
        },
        {
            title: "Karmic Imprint Removal",
            short: "Clear past life karma and ancestral patterns blocking your progress.",
            long: "Deep timeline work to identify and clear karmic contracts, imprints, and ancestral patterns that repeat in your life.",
            Icon: Stars,
            image: karmicImprintImg || HERO_IMAGE,
            process: "Deep karmic clearing across timelines and ancestral lines.",
            benefits: ["Release karmic debt", "Break repeating patterns", "Free past-life trauma"],
            duration: "60 - 90 minutes",
            price: "₹8,888/-",
            whoFor: "Those experiencing repeated life patterns or inherited family trauma.",
        },
        {
            title: "J-Seals & Entity Removal",
            short: "Remove energetic implants limiting your spiritual growth.",
            long: "Identification and safe removal of seals, implants and attachments that limit vitality and spiritual progress.",
            Icon: Shield,
            image: healingImg || HERO_IMAGE,
            process: "Scan and removal of implants followed by field sealing and integration.",
            benefits: ["Restore inner peace", "Clear attachments", "Enhance spiritual growth"],
            duration: "45 - 60 minutes",
            price: "₹6,999/-",
            whoFor: "If you sense energetic drains, sudden mood shifts, or consistent disconnection.",
        },

        // Additional services often present on advaithealing.com — descriptive defaults used
        {
            title: "Soul Healing",
            short: "Heal deep soul-level wounding and reclaim your true essence.",
            long: "A compassionate, deep-healing session that meets and heals core soul wounds, restoring wholeness and dignity to your life force.",
            Icon: HeartHandshake,
            image: HERO_IMAGE,
            process: "Sacred soul-level reconnection and gentle integration practices.",
            benefits: ["Reconnect to self", "Heal core wounds", "Reclaim purpose"],
            duration: "60 - 90 minutes",
            price: "Contact for pricing",
            whoFor: "Those seeking expansive inner healing beyond the personality level.",
        },
        {
            title: "Quantum Alignment / Quantum Work",
            short: "Subtle-field realignment using quantum healing protocols.",
            long: "Precision energy adjustments aimed at aligning your frequency with your highest potential and correcting energetic distortions.",
            Icon: Zap,
            image: HERO_IMAGE,
            process: "Field reconfiguration, frequency lift, and intention anchoring.",
            benefits: ["Raise frequency", "Manifest clarity", "Dissolve resistances"],
            duration: "45 - 75 minutes",
            price: "Contact for pricing",
            whoFor: "Clients wanting rapid shifts in life circumstances or internal belief systems.",
        },
        {
            title: "Past Life Healing",
            short: "Resolve unresolved past-life issues that affect your present.",
            long: "Work across timelines to release past-life debts, relationships, or traumatic imprints that influence your current life.",
            Icon: Repeat,
            image: HERO_IMAGE,
            process: "Regression-style energetic release and timeline clearing.",
            benefits: ["Release past-life trauma", "Reduce repeating karma", "Free current life patterns"],
            duration: "60 - 120 minutes",
            price: "Contact for pricing",
            whoFor: "If you feel inexplicable patterns, fears, or affinities that don't belong to this life.",
        },
        {
            title: "Cord Cutting & Relationship Clearing",
            short: "Sever energetic cords that drain or entangle you.",
            long: "Safe and conscious cord release to free attachments and restore personal boundaries.",
            Icon: Scissors,
            image: HERO_IMAGE,
            process: "Identify cords in the field, release and provide boundary strengthening practices.",
            benefits: ["Restore autonomy", "Stop energetic leaks", "Improve relationships"],
            duration: "30 - 60 minutes",
            price: "Contact for pricing",
            whoFor: "People entangled in relationships, past lovers, or toxic family dynamics.",
        },
        {
            title: "Ancestral Healing",
            short: "Free ancestral lineage patterns that influence your life.",
            long: "Work with ancestral lines to release carried traumas and uplift future generations.",
            Icon: Compass,
            image: HERO_IMAGE,
            process: "Lineage scanning, offerings, and healing transmissions.",
            benefits: ["Clear family karma", "Heal inherited patterns", "Strengthen lineage gifts"],
            duration: "60 - 90 minutes",
            price: "Contact for pricing",
            whoFor: "Those with repetitive family cycles or ancestral burdens.",
        },
        {
            title: "Energy Detox & Reset",
            short: "Deep energetic hygiene to clear dense energies and residues.",
            long: "A practical reset session to remove heavy energy residue and re-establish clarity and vitality.",
            Icon: UserCheck,
            image: HERO_IMAGE,
            process: "Full-field detox, sealing and simple integration tools.",
            benefits: ["Feel lighter", "Reduce brain fog", "Reset nervous system"],
            duration: "30 - 45 minutes",
            price: "Contact for pricing",
            whoFor: "Anyone feeling drained, heavy or foggy after energetic exposure.",
        },
        {
            title: "Spiritual Guidance & Readings",
            short: "Clarity sessions that include counsel, guidance and embodied next steps.",
            long: "Intuitive guidance combined with energetic observation to give you a clear, grounded path forward.",
            Icon: CalendarHeart,
            image: HERO_IMAGE,
            process: "Reading followed by practical integration coaching.",
            benefits: ["Clarity", "Direction", "Practical next steps"],
            duration: "30 - 60 minutes",
            price: "Contact for pricing",
            whoFor: "Clients seeking clarity on career, relationships, or spiritual direction.",
        },
        {
            title: "Distance Healing (Remote Sessions)",
            short: "Powerful remote sessions with the same potency as in-person work.",
            long: "Energetic protocols designed to work across space and time so distance is not a barrier to transformation.",
            Icon: Shield,
            image: HERO_IMAGE,
            process: "Remote field linking, anchoring and verification.",
            benefits: ["Work from anywhere", "Convenient scheduling", "Deep shifts"],
            duration: "30 - 90 minutes",
            price: "Contact for pricing",
            whoFor: "International clients or those who cannot attend in person.",
        },
    ];

    const filtered = services.filter(
        (s) =>
            s.title.toLowerCase().includes(query.toLowerCase()) ||
            (s.short && s.short.toLowerCase().includes(query.toLowerCase()))
    );

    return (
        <div className="min-h-screen w-full bg-[#FFFFFF] text-[#050505] py-12">
            {/* If you have a Navbar component, import and include here */}
            {/* <Navbar /> */}

            {/* HERO */}
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
                    <div>
                        <h1
                            className="text-5xl md:text-6xl font-semibold mb-4 leading-tight"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                            Our Healing Services
                        </h1>
                        <p className="text-lg text-gray-700 mb-6 max-w-2xl">
                            Transformational modalities tailored to your soul’s journey. Explore
                            deep healing, energetic alignment and practical integration.
                        </p>

                        <div className="flex gap-3 items-center">
                            <input
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search services (eg. chakra, karmic, cord)"
                                className="px-4 py-3 rounded-xl border border-gray-200 bg-white w-full md:w-96 focus:outline-none"
                            />
                            <button
                                className="px-4 py-3 rounded-xl bg-[#61245D] text-white"
                                onClick={() => setQuery("")}
                            >
                                Clear
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl border border-[#efe6d2]">
                            <img src={HERO_IMAGE} alt="Advait Healing" className="w-full h-72 object-cover" />
                        </div>
                    </div>
                </section>

                {/* GRID */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                    {filtered.map((s, idx) => (
                        <ServiceCard
                            key={idx}
                            image={s.image}
                            title={s.title}
                            short={s.short}
                            Icon={s.Icon || Info}
                            onKnowMore={() => {
                                setSelectedService(s);
                                setModalOpen(true);
                            }}
                        />
                    ))}
                </section>

                {/* CTA */}
                <div className="flex justify-center mt-6">
                    <a href="/contact">
                        <button className="flex items-center gap-3 bg-[#050505] text-white mt-6 py-3 px-6 rounded-full font-medium hover:opacity-95 transition">
                            <span>Get in Touch</span>
                        </button>
                    </a>
                </div>
            </div>

            {/* Footer placeholder */}
            {/* <Footer /> */}

            {/* Modal */}
            <ServiceModal open={modalOpen} onClose={() => setModalOpen(false)} service={selectedService} />
        </div>
    );
}
