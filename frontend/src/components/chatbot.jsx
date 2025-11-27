// src/components/ChatBot.jsx
import { useEffect, useRef, useState } from "react";

const FAQS = [
    {
        q: "What is a typical session duration?",
        a: "Sessions usually range between 30 to 90 minutes depending on the service — chakra clearings are ~30–45 mins, karmic work ~60–90 mins.",
    },
    {
        q: "How do I book a session?",
        a: "Click 'Book Your Session' (top nav) or go to the contact page and fill the booking form. We'll confirm via email/WhatsApp.",
    },
    {
        q: "Do you offer in-person sessions?",
        a: "Most sessions are online, however occasional in-person events are scheduled — check the Services or Contact page for updates.",
    },
    {
        q: "What is the fee for a session?",
        a: "Energy exchange starts at ₹5,555/- for most sessions. Special packages and retreats are priced separately.",
    },
    {
        q: "Do you provide recordings of the session?",
        a: "We can provide a short audio summary on request, but full session recordings are generally not shared unless pre-arranged.",
    },
    {
        q: "Is this a medical treatment?",
        a: "No — Advait Healing provides energy and spiritual healing. It is not a substitute for medical or psychiatric treatment.",
    },
    {
        q: "Can healing help with anxiety or sleep issues?",
        a: "Many clients report reduced anxiety and improved sleep after sessions. Individual results vary.",
    },
    {
        q: "What is 'Karmic Imprint Removal'?",
        a: "It addresses energetic patterns and contracts that stem from past lives or ancestral lines, helping you release repeating patterns.",
    },
    {
        q: "How many sessions will I need?",
        a: "Some people feel shifts in one session; others benefit from a series. We can suggest a plan after an initial scan.",
    },
    {
        q: "Do you accept international clients?",
        a: "Yes — sessions are done remotely and clients from any country are welcome. Timings are scheduled considering timezones.",
    },
    {
        q: "Can I gift a session to someone else?",
        a: "Yes. Contact us via the booking form with recipient details and we'll provide a gift/session voucher workflow.",
    },
    {
        q: "Are sessions confidential?",
        a: "Absolutely—your privacy is respected. We never share personal details without explicit consent.",
    },
    {
        q: "What payment methods do you accept?",
        a: "We accept bank transfers, UPI, and popular digital payment methods. Payment details are provided at booking.",
    },
    {
        q: "Do you offer discounts or packages?",
        a: "Occasionally yes. Packages for multiple sessions may have discounted pricing — check Services or contact us.",
    },
    {
        q: "Can I ask a question not listed here?",
        a: "Yes — type your question in the chat input. The bot will try to find the best FAQ match or show a polite fallback response.",
    },
];

function IconChat() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function IconClose() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function ChatBot() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("");
    const [logs, setLogs] = useState([]); // { from: 'user'|'bot', text }
    const [expanded, setExpanded] = useState(null);
    const messagesRef = useRef(null);

    useEffect(() => {
        // scroll to bottom when logs change
        const el = messagesRef.current;
        if (el) el.scrollTop = el.scrollHeight;
    }, [logs, open]);

    function toggleOpen() {
        setOpen((s) => !s);
        if (!open) {
            // when opening, focus search after short delay
            setTimeout(() => {
                const input = document.getElementById("chat-search");
                if (input) input.focus();
            }, 220);
        }
    }

    function sendUserMessage(text) {
        if (!text || !text.trim()) return;
        const t = text.trim();
        setLogs((l) => [...l, { from: "user", text: t }]);
        setQuery("");
        // try to auto-match FAQ (simple best-match by words)
        const match = findBestFAQMatch(t);
        setTimeout(() => {
            if (match) {
                setLogs((l) => [...l, { from: "user", text: t }, { from: "bot", text: match.a }]);
            } else {
                setLogs((l) => [...l, { from: "user", text: t }, { from: "bot", text: "I couldn't find an exact FAQ match. Please contact us via the booking page for personalized help." }]);
            }
        }, 350);
    }

    function findBestFAQMatch(text) {
        if (!text) return null;
        const q = text.toLowerCase();
        // naive scoring by counting shared words
        let best = null;
        let bestScore = 0;
        for (const f of FAQS) {
            const words = f.q.toLowerCase().split(/\W+/).filter(Boolean);
            let score = 0;
            for (const w of words) if (q.includes(w)) score++;
            if (score > bestScore) {
                bestScore = score;
                best = f;
            }
        }
        // require minimal score
        return bestScore >= 1 ? best : null;
    }

    const filteredFaqs = FAQS.filter((f) => {
        if (!filter) return true;
        const t = filter.toLowerCase();
        return f.q.toLowerCase().includes(t) || f.a.toLowerCase().includes(t);
    });

    return (
        <>
            {/* Floating button (left bottom) */}
            <div className="fixed left-6 md:left-10 bottom-8 z-[60]">
                <button
                    onClick={toggleOpen}
                    aria-expanded={open}
                    aria-controls="faq-chat-panel"
                    className="group flex items-center justify-center w-14 h-14 rounded-full bg-[#7C5190] text-white shadow-2xl ring-1 ring-black/8 hover:scale-105 transition-transform"
                    title="Open chat"
                >
                    <span className="sr-only">Open chat</span>
                    <div className="transform group-hover:rotate-6 transition-transform">
                        <IconChat />
                    </div>
                </button>
            </div>

            {/* Slide-in panel */}
            <div
                id="faq-chat-panel"
                className={`fixed left-0 top-0 h-full z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-[100%]"} md:w-[420px] w-full`}
                role="dialog"
                aria-modal="true"
            >
                <div className="h-full flex flex-col bg-white shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-full bg-[#FFFBF2] flex items-center justify-center ring-1 ring-black/6">
                                <IconChat />
                            </div>
                            <div>
                                <div className="text-lg font-semibold text-gray-900">Advait FAQs</div>
                                <div className="text-sm text-gray-500">Quick answers & booking help</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            {/* <button
                                onClick={() => {
                                    setLogs([]);
                                    setFilter("");
                                }}
                                className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1 rounded-md"
                                title="Clear conversation"
                            >
                                Clear
                            </button> */}

                            <button
                                onClick={() => setOpen(false)}
                                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                                aria-label="Close chat"
                            >
                                <IconClose />
                            </button>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="px-4 pt-4 pb-2">
                        <label htmlFor="chat-search" className="sr-only">Search FAQs</label>
                        <div className="relative">
                            <input
                                id="chat-search"
                                type="text"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                placeholder="Search FAQs or type your question..."
                                className="w-full rounded-lg text-white border py-2.5 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7C5190]/30"
                            />
                            {filter && (
                                <button
                                    onClick={() => setFilter("")}
                                    className="absolute right-2 top-2 text-sm text-gray-500 hover:text-gray-700"
                                >
                                    Clear
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Messages + FAQ list */}
                    <div className="flex-1 overflow-hidden">
                        <div ref={messagesRef} className="h-full overflow-auto px-4 py-3 space-y-4">
                            {/* Conversation logs */}
                            {logs.length > 0 && (
                                <div className="space-y-2">
                                    {logs.map((m, idx) => (
                                        <div key={idx} className={`max-w-full ${m.from === "bot" ? "text-left" : "text-right"}`}>
                                            <div className={`${m.from === "bot" ? "inline-block bg-gray-100 text-gray-900" : "inline-block bg-[#7C5190] text-white"} px-4 py-2 rounded-2xl text-sm shadow-sm`}>
                                                {m.text}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* FAQ list */}
                            <div className="space-y-3">
                                {filteredFaqs.map((f, i) => {
                                    const isOpen = expanded === i;
                                    return (
                                        <div key={i} className="relative">
                                            <button
                                                onClick={() => setExpanded(isOpen ? null : i)}
                                                className="w-full text-left flex items-start justify-between gap-3 p-3 bg-white border rounded-xl hover:shadow-sm transition"
                                                aria-expanded={isOpen}
                                            >
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900">{f.q}</div>
                                                    <div className="text-xs text-gray-500 mt-1">Tap to view answer</div>
                                                </div>
                                                <div className="text-gray-400 text-sm">{isOpen ? "−" : "+"}</div>
                                            </button>

                                            <div className={`mt-2 overflow-hidden transition-all ${isOpen ? "max-h-96" : "max-h-0"}`}>
                                                <div className="p-3 bg-gray-50 border rounded-xl">
                                                    <div className="text-sm text-gray-700 leading-relaxed">{f.a}</div>
                                                    <div className="mt-3 flex gap-2">
                                                        <button
                                                            onClick={() => {
                                                                setLogs((l) => [...l, { from: "user", text: f.q }, { from: "bot", text: f.a }]);
                                                                // keep expanded open
                                                            }}
                                                            className="text-xs bg-[#7C5190] text-white px-3 py-1 rounded-full"
                                                        >
                                                            Use Answer
                                                        </button>

                                                        <button
                                                            onClick={() => {
                                                                setQuery(f.q);
                                                                // quick insert to input (not focused)
                                                            }}
                                                            className="text-xs bg-white border px-3 py-1 rounded-full"
                                                        >
                                                            Ask this
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}

                                {filteredFaqs.length === 0 && (
                                    <div className="p-4 text-center text-sm text-gray-500">No FAQs match your search.</div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Input area */}
                    <div className="border-t px-4 py-3">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                // use query input first, fallback to filter
                                const text = query || filter;
                                if (text) sendUserMessage(text);
                                setFilter("");
                                setQuery("");
                            }}
                            className="flex gap-2 items-center"
                        >
                            {/* <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Type your question or pick an FAQ…"
                                className="flex-1 rounded-full border py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C5190]/30"
                                aria-label="Type your question"
                            /> */}
                            {/* <button
                                type="submit"
                                className="inline-flex items-center gap-2 bg-[#7C5190] text-white px-4 py-2 rounded-full hover:opacity-95 transition"
                            >
                                <span className="text-sm">Send</span>
                            </button> */}

                        </form>
                        {/* <div className="text-xs text-gray-400 mt-2">Tip: Try short phrases like “session duration”, “book”, or “pricing”.</div> */}
                    </div>
                </div>
            </div>

            {/* small overlay to close when open on mobile */}
            {open && (
                <button
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/20 md:hidden z-40"
                    aria-hidden
                />
            )}
        </>
    );
}
