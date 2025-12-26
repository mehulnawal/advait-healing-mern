import { useEffect } from "react";
import deepa from "../assets/founder/founder4.jpeg";
import mona from "../assets/teachers/teacher-mona.jpeg";
import sunny from "../assets/teachers/teacher-sunny.jpeg";

const instructors = [
    {
        name: "Deepshikha",
        title: "Energy Healer & Spiritual Mentor",
        image: deepa,
        bio: "Deepa is a certified energy healer with 7+ years of experience in chakra balancing, karmic clearing and angelic healing. Her sessions bring clarity, emotional recovery, and deep inner peace.",
        tags: ["Chakra Healing", "Karmic Clearing", "Angelic Healing"]
    },
    {
        name: "Mona Dixit",
        title: "Past Life & Akashic Records Expert",
        image: mona,
        bio: "Dr. Mona Dixit is a transformative energy healer specializing in Reiki, helping individuals restore balance, peace, and emotional clarity. With her intuitive healing touch, she harmonizes energy flow, supports inner transformation, and guides clients toward deep relaxation and renewal. Her sessions bring calmness to the mind, rejuvenation to the spirit, and profound energetic alignment.",
        tags: ["Past Life Regression", "Akashic Records", "Soul Alignment"]
    },
    {
        name: "Sunny Mann",
        title: "Animal Communicator & Energy Coach",
        image: sunny,
        bio: "Sunny Mann is an intuitive animal and human energy healer with 25+ years of experience. Known as “The Animal Whisperer,” he helps people understand their pets, resolve behavioural issues, and trains students globally in animal communication and spiritual healing.",
        tags: ["Animal Communication", "Energy Healing", "Spiritual Coaching"]
    }
];

export default function AboutInstructors() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <section className="bg-[#FFFFFF] px-2 md:px-[50px] py-12">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold text-black font-[Cormorant_Garamond]">
                        About Our Instructors
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mt-3 text-lg">
                        Meet our certified healers and instructors guiding individuals on a journey of emotional, spiritual, and energetic transformation.
                    </p>
                </div>

                {/* One Instructor per Row */}
                <div className="space-y-14">
                    {instructors.map((ins, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col md:flex-row items-center gap-8"
                        >
                            {/* Image */}
                            <div className="flex-shrink-0">
                                <div className="w-44 h-44 rounded-full overflow-hidden shadow-md mx-auto md:mx-0">
                                    <img
                                        src={ins.image}
                                        alt={ins.name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col md:text-left text-center">

                                {/* Name */}
                                <h3 className="text-3xl font-bold text-black font-[Cormorant_Garamond]">
                                    {ins.name}
                                </h3>

                                {/* Title */}
                                <p className="text-black text-sm mt-1 font-medium tracking-wide uppercase">
                                    {ins.title}
                                </p>

                                {/* Bio */}
                                <p className="text-gray-600 mt-3 text-[15px] leading-relaxed md:max-w-[700px]">
                                    {ins.bio}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                                    {ins.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
