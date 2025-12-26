import { ArrowRight, ScanLine, HandHeart, Sparkles } from "lucide-react";
import founderImg from "../assets/founder/founder3.jpg";
import { Banner } from "./Banner";

export default function HowIWork() {
    return (
        <>
            {/* <Banner /> */}

            <div className="px-2 md:px-[50px] lg:px-[70px] min-h-screen  bg-[#FFFFFF] text-[#050505] ">

                {/* Page Container */}
                <div className="max-w-6xl mx-auto pb-20 h-100">

                    {/* ---------- HERO SECTION ---------- */}
                    <section className="text-center mb-20">
                        <h1
                            className="text-5xl md:text-6xl font-semibold mb-6 text-black"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                            How We Work
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto opacity-80">
                            My healing sessions are a blend of intuitive energy work,
                            spiritual connection, and deep inner alignment — crafted to bring
                            clarity, peace, and transformation into your life.
                        </p>
                    </section>

                    {/* ---------- IMAGE SECTION ---------- */}
                    {/* ---------- IMAGE SECTION ---------- */}
                    {/* <section
                        className="flex justify-center mb-20 rounded-3xl shadow-xl overflow-hidden w-full max-w-4xl mx-auto md:h-[480px] h-[300px] bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${founderImg})`,
                        }} > </section> */}


                    {/* ---------- HOW I WORK STEPS ---------- */}
                    <section className="grid md:grid-cols-3 gap-10">

                        {/* Step 1 */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#e6dbc0]">
                            <ScanLine className="w-10 h-10 mb-6 text-[#050505]" />
                            <h2
                                className="text-3xl font-bold mb-4 text-black"
                                style={{ fontFamily: "Cormorant Garamond, serif" }}
                            >
                                1. Book Your Session
                            </h2>
                            <p className="opacity-80 leading-relaxed">
                                Choose your preferred date & time. We connect online through a
                                peaceful and guided healing space.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#e6dbc0]">
                            <HandHeart className="w-10 h-10 mb-6 text-[#050505]" />
                            <h2
                                className="text-3xl font-bold mb-4 text-black"
                                style={{ fontFamily: "Cormorant Garamond, serif" }}
                            >
                                2. Set Your Intention
                            </h2>
                            <p className="opacity-80 leading-relaxed">
                                We begin by grounding your energy and setting a clear intention —
                                this anchors your entire healing journey.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#e6dbc0]">
                            <Sparkles className="w-10 h-10 mb-6 text-[#050505]" />
                            <h2
                                className="text-3xl font-bold mb-4 text-black"
                                style={{ fontFamily: "Cormorant Garamond, serif" }}
                            >
                                3. Energy Scan & Clearing
                            </h2>
                            <p className="opacity-80 leading-relaxed">
                                I scan your energy field, identify blockages, and guide you
                                through a deep clearing process, restoring inner harmony.
                            </p>
                        </div>
                    </section>

                    {/* ---------- FINAL SECTION ---------- */}
                    <section className="text-center mt-24">
                        <h2
                            className="text-4xl md:text-5xl font-semibold mb-6 text-black"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                            Ready to Begin Your Transformation?
                        </h2>

                        <p className="max-w-2xl mx-auto text-lg opacity-80 mb-10">
                            Your healing journey starts with one step — and I’m here to guide
                            you every moment through it.
                        </p>

                        <button className="px-8 py-4 bg-[#050505] text-white rounded-full flex items-center gap-3 mx-auto hover:opacity-90 transition">
                            Book a Session <ArrowRight className="w-5 h-5" />
                        </button>
                    </section>
                </div>
            </div>
        </>
    );
}
