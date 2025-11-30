import { useState } from "react";

const BookMySession = () => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
    });

    // Your client WhatsApp number
    const CLIENT_NUMBER = "9879216262"; // ← replace with your client number

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = `
📌 *New Healing Session Request*

👤 *Name:* ${form.name}
📞 *Phone:* ${form.phone}
📧 *Email:* ${form.email}
✨ *Service:* ${form.service}
📝 *Message:* ${form.message}
        `;

        const url = `https://wa.me/${CLIENT_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <section className="px-5 md:px-[50px] py-10 bg-[#FFFBF2]">
            <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-2xl">

                <h2 className="text-4xl font-bold text-purple-800 text-center mb-6
                    font-[Cormorant_Garamond]">
                    Book Your Healing Session
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full border p-3 rounded-lg"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full border p-3 rounded-lg"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-full border p-3 rounded-lg"
                        onChange={handleChange}
                    />

                    <select
                        name="service"
                        className="w-full border p-3 rounded-lg"
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Service</option>
                        <option value="Chakra Healing">Chakra Healing</option>
                        <option value="Karmic Imprint Removal">Karmic Imprint Removal</option>
                        <option value="Reiki Healing">Reiki Healing</option>
                        <option value="Aura Scan">Aura Scan</option>
                        <option value="Past Life Regression">Past Life Regression</option>
                        {/* add more services here */}
                    </select>

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        className="w-full border p-3 rounded-lg h-28"
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        className="w-full bg-purple-700 text-white py-3 rounded-xl text-lg font-medium hover:bg-purple-900 transition"
                    >
                        Submit & Send on WhatsApp
                    </button>
                </form>

            </div>
        </section>
    );
};

export default BookMySession;
