import { useState } from "react";

export default function BookMySession() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [sending, setSending] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [errors, setErrors] = useState({});

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validate = (data) => {
        const e = {};

        if (!data.firstName?.trim()) e.firstName = "First name is required.";
        if (!data.lastName?.trim()) e.lastName = "Last name is required.";

        if (!data.email?.trim()) e.email = "Email is required.";
        else if (!emailRegex.test(data.email)) e.email = "Enter a valid email address.";

        if (!data.phone?.trim()) e.phone = "Phone number is required.";
        else if (!/^\d{10}$/.test(data.phone)) e.phone = "Phone must be exactly 10 digits.";

        if (!data.subject?.trim()) e.subject = "Subject is required.";
        if (!data.message?.trim()) e.message = "Message is required.";

        return e;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // For phone, allow only digits
        if (name === "phone") {
            const digitsOnly = value.replace(/\D/g, "");
            // limit to 10 digits
            setFormData((prev) => ({ ...prev, [name]: digitsOnly.slice(0, 10) }));
            // clear phone error as user types
            setErrors((prev) => ({ ...prev, phone: undefined }));
            return;
        }

        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMsg("");
        const validationErrors = validate(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            // focus first error field (optional)
            const firstField = Object.keys(validationErrors)[0];
            const el = document.querySelector(`[name="${firstField}"]`);
            if (el) el.focus();
            return;
        }

        setSending(true);

        try {
            const res = await fetch("https://advaithealing.com/sendMail.php", {
                method: "POST",
                body: new FormData(e.target),
            });

            const text = await res.text();

            // If your PHP echoes "success" use that; otherwise check res.ok
            if (text?.toLowerCase().includes("success") || res.ok) {
                setSuccessMsg("✨ Your message has been sent. The instructor will contact you soon!");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
                setErrors({});
            } else {
                setErrors({ form: "Failed to send. Please try again later." });
            }
        } catch (err) {
            console.error(err);
            setErrors({ form: "Network error. Please try again later." });
        } finally {
            setSending(false);
        }
    };

    const inputStyle =
        "w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition outline-none shadow-sm";

    const errorText = "text-red-600 text-sm mt-1";

    return (
        <section className="relative bg-[#FFFBF2] px-1 md:px-[50px] py-20 text-black">
            {/* Background Glow */}
            <div className="absolute inset-0 flex justify-center opacity-20 pointer-events-none">
                <div className="w-[600px] h-[600px] bg-purple-200/40 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-3xl mx-auto bg-white  md:px-10 py-10 shadow-2xl rounded-3xl border border-gray-100">

                {/* Heading */}
                <h2 className="text-5xl font-extrabold text-purple-800 mb-3 text-center font-[Cormorant_Garamond]">
                    Book My Session
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Fill in your details below and we will get back to you shortly.
                </p>

                {/* Inline form error */}
                {errors.form && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-100 text-red-700 rounded">
                        {errors.form}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {/* First & Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <input
                                required
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={inputStyle + (errors.firstName ? " border-red-400" : "")}
                            />
                            {errors.firstName && <div className={errorText}>{errors.firstName}</div>}
                        </div>

                        <div>
                            <input
                                required
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={inputStyle + (errors.lastName ? " border-red-400" : "")}
                            />
                            {errors.lastName && <div className={errorText}>{errors.lastName}</div>}
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className={inputStyle + (errors.email ? " border-red-400" : "")}
                        />
                        {errors.email && <div className={errorText}>{errors.email}</div>}
                    </div>

                    {/* Phone */}
                    <div>
                        <input
                            required
                            type="tel"
                            name="phone"
                            placeholder="Phone Number (10 digits)"
                            value={formData.phone}
                            onChange={handleChange}
                            className={inputStyle + (errors.phone ? " border-red-400" : "")}
                        />
                        {errors.phone && <div className={errorText}>{errors.phone}</div>}
                    </div>

                    {/* Subject */}
                    <div>
                        <input
                            required
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={inputStyle + (errors.subject ? " border-red-400" : "")}
                        />
                        {errors.subject && <div className={errorText}>{errors.subject}</div>}
                    </div>

                    {/* Message */}
                    <div>
                        <textarea
                            required
                            name="message"
                            placeholder="Write your message..."
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className={inputStyle + (errors.message ? " border-red-400" : "")}
                        ></textarea>
                        {errors.message && <div className={errorText}>{errors.message}</div>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={sending}
                        className="w-full py-3 rounded-xl text-white font-semibold text-lg transition 
                        bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 shadow-md disabled:opacity-60"
                    >
                        {sending ? "Sending..." : "Send Message"}
                    </button>

                    {/* Success Message */}
                    {successMsg && (
                        <p className="text-center text-green-700 font-semibold mt-4 animate-fadeIn">
                            {successMsg}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
