import { useEffect, useRef, useState } from "react";

const FAQS = [
    { q: "What is a typical session duration?", a: "Sessions range 30–90 mins depending on the service." },
    { q: "How do I book a session?", a: "Click 'Book Your Session' or use the contact page." },
    { q: "Do you offer in-person sessions?", a: "Most sessions are online; in-person events are occasional." },
    // Add remaining...
];

function IconChat() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"
                stroke="currentColor" strokeWidth="1.4"
                strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function IconClose() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12"
                stroke="currentColor" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function ChatBot({ botOpen, setBotOpen, closeNavbar }) {
    const [filter, setFilter] = useState("");
    const [showInput, setShowInput] = useState(false);
    const [expanded, setExpanded] = useState(null);
    const [logs, setLogs] = useState([]);
    const messagesRef = useRef(null);

    // Auto-close navbar when chatbot opens
    useEffect(() => {
        if (botOpen) closeNavbar();
    }, [botOpen]);

    // 📌 Prevent body scroll when chatbot open
    useEffect(() => {
        document.body.style.overflow = botOpen ? "hidden" : "auto";
    }, [botOpen]);

    // Scroll to top when opened
    useEffect(() => {
        const el = messagesRef.current;
        if (!el) return;
        el.scrollTop = logs.length ? el.scrollHeight : 0;
    }, [logs, botOpen]);

    const filteredFaqs = FAQS.filter((f) =>
        f.q.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            {/* Floating Chat Icon (HIDDEN when open) */}
            {!botOpen && (
                <div className="fixed left-6 md:left-10 bottom-8 z-[60]">
                    <button
                        onClick={() => setBotOpen(true)}
                        className="group flex items-center justify-center w-14 h-14 rounded-full bg-[#7C5190] text-white shadow-2xl hover:scale-105 transition"
                    >
                        <IconChat />
                    </button>

                    <div className="absolute left-16 bottom-2 bg-[#7C5190] text-white px-3 py-1 rounded-full text-xs shadow-lg">
                        FAQs
                    </div>
                </div>
            )}

            {/* Chat Panel */}
            <div className={`fixed left-0 top-0 h-full z-[9999] w-full md:w-[420px]
                bg-white shadow-2xl transform transition-transform duration-300
                ${botOpen ? "translate-x-0" : "-translate-x-full"}`}>

                {/* Header */}
                <div className="relative px-4 py-3 border-b flex justify-between items-center bg-white">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-[#FFFBF2] flex items-center justify-center">
                            <IconChat />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Advait FAQs</h2>
                            <p className="text-xs text-gray-500">Quick answers & help</p>
                        </div>
                    </div>

                    {/* Close button */}
                    <button
                        onClick={() => setBotOpen(false)}
                        className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full md:static absolute left-3 top-3 text-black"
                    >
                        <IconClose />
                    </button>
                </div>

                {/* Search */}
                <div className="px-4 pt-4 pb-2 bg-white">
                    <input
                        type="text"
                        value={filter}
                        placeholder="Search FAQs..."
                        onFocus={() => setShowInput(true)}
                        onChange={(e) => setFilter(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 text-sm text-gray-800"
                    />
                </div>

                {/* FAQ List */}
                <div ref={messagesRef} className="flex-1 overflow-auto px-4 py-4 space-y-3">

                    {filteredFaqs.map((f, i) => (
                        <div key={i}>
                            <button
                                onClick={() => setExpanded(expanded === i ? null : i)}
                                className="w-full flex justify-between p-3 border rounded-xl bg-white text-gray-900"
                            >
                                {f.q}
                                <span>{expanded === i ? "-" : "+"}</span>
                            </button>

                            {expanded === i && (
                                <div className="mt-2 bg-gray-50 border rounded-xl p-3 text-gray-700 text-sm leading-relaxed">
                                    {f.a}
                                </div>
                            )}
                        </div>
                    ))}

                    {filteredFaqs.length === 0 && (
                        <p className="text-center text-gray-500 text-sm">No FAQs found.</p>
                    )}
                </div>

            </div>

            {/* Overlay for mobile */}
            {botOpen && (
                <div
                    onClick={() => setBotOpen(false)}
                    className="fixed inset-0 bg-black/20 md:hidden z-[9000]"
                />
            )}
        </>
    );
}
