import heroBg from "../assets/founder/founder2.png";

export const Banner = () => {
    return (
        <section
            className="relative w-full min-h-[90vh] flex items-center bg-cover bg-center px-2 md:px-[50px] lg:px-[70px] py-12"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#FFFFFF]/80 backdrop-blur-[2px]"></div>

            <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">

                {/* LEFT CONTENT */}
                <div>
                    <h1 className="text-5xl md:text-6xl font-[Cormorant_Garamond] font-extrabold text-black leading-tight">
                        Heal. Release. Transform.
                    </h1>

                    <p className="text-gray-700 text-lg mt-4 max-w-lg leading-relaxed italic">
                        Deep energy clearing and karmic healing to guide you back to your divine frequency.
                        Reconnect with inner peace, clarity, and soul alignment.
                    </p>

                    {/* Impact Section */}
                    <div className="mt-10">
                        <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
                            Our Impact
                        </p>

                        <div className="grid grid-cols-2 gap-4 max-w-md">
                            <div className="bg-white shadow-sm rounded-xl p-5 text-center">
                                <h3 className="text-2xl font-bold text-black">300+</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    Clients Reported Emotional Relief
                                </p>
                            </div>

                            <div className="bg-white shadow-sm rounded-xl p-5 text-center">
                                <h3 className="text-2xl font-bold text-black">600+</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    Healing Sessions Conducted
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
