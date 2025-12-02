import heroBg from "../assets/founder/founder2.png";
import bannerRightImg from "../assets/banner/banner-right-img.png";

export const Banner = () => {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center bg-cover bg-center px-2 md:px-[50px] lg:px-[70px] py-12"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#FFFBF2]/80 backdrop-blur-[2px]"></div>

            <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">

                {/* LEFT CONTENT */}
                <div>
                    <h1 className="text-5xl md:text-6xl font-[Cormorant_Garamond] font-extrabold text-purple-900 leading-tight">
                        Heal. Release. Transform.
                    </h1>

                    <p className="text-gray-700 text-lg mt-4 max-w-lg leading-relaxed">
                        Deep energy clearing and karmic healing to guide you back to your divine frequency.
                        Reconnect with inner peace, clarity, and soul alignment.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-10">
                        <div className="bg-white shadow-md rounded-xl p-4 text-center">
                            <h3 className="text-2xl font-bold text-purple-800">6540+</h3>
                            <p className="text-gray-600 text-sm">Hours Spent</p>
                        </div>
                        <div className="bg-white shadow-md rounded-xl p-4 text-center">
                            <h3 className="text-2xl font-bold text-purple-800">300+</h3>
                            <p className="text-gray-600 text-sm">Feel Lighter</p>
                        </div>
                        <div className="bg-white shadow-md rounded-xl p-4 text-center">
                            <h3 className="text-2xl font-bold text-purple-800">400+</h3>
                            <p className="text-gray-600 text-sm">Sessions Done</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE — STATIC */}
                {/* <div className="flex justify-center md:justify-end">
                    <div className="w-[260px] md:w-[360px] rounded-3xl overflow-hidden shadow-xl">
                        <img
                            src={bannerRightImg}
                            alt="Illustration"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div> */}

            </div>
        </section>
    );
};
