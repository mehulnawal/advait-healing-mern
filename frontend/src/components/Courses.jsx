import { useEffect } from "react";

const instructorCourses = [
    {
        instructor: "Mona Dixit",
        title: "Reiki Master & Energy Healing Specialist",
        courses: [
            {
                name: "Reiki Level I, II, III",
                durationOptions: [
                    { label: "2 Days", fee: "₹X,XXX" },
                    { label: "7 Days", fee: "₹XX,XXX" },
                    { label: "21 Days", fee: "₹XX,XXX" }
                ]
            },
            {
                name: "Past Life Regression Practitioner Course",
                duration: "3 Days"
                // fee can be added later if client confirms
            },
            {
                name: "Energy Alignment & Healing Program",
                durationOptions: [
                    { label: "11 Days", fee: "₹XX,XXX" },
                    { label: "30 Days", fee: "₹XX,XXX" },
                    { label: "365 Days", fee: "₹XX,XXX" }
                ]
            }
        ]
    }
];

export function Courses() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <section className="bg-[#FFFFFF] px-2 md:px-[50px] py-12">
            <div className="max-w-7xl mx-auto">

                {/* Page Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold text-black font-[Cormorant_Garamond]">
                        Our Courses
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mt-3 text-lg">
                        Explore professional certification and transformational learning with our expert instructors.
                    </p>
                </div>

                {/* Instructor Sections */}
                <div className="space-y-16">
                    {instructorCourses.map((ins, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                        >

                            {/* Instructor Name */}
                            <h3 className="text-3xl font-bold text-black font-[Cormorant_Garamond]">
                                {ins.instructor}
                            </h3>

                            {/* Title */}
                            <p className="text-black mt-1 text-sm font-medium uppercase tracking-wide">
                                {ins.title}
                            </p>

                            {/* Courses */}
                            <div className="mt-6 space-y-5">
                                {ins.courses.map((course, i) => (
                                    <div
                                        key={i}
                                        className="p-5 bg-[#61245D] rounded-xl border border-purple-100 shadow-sm"
                                    >
                                        {/* Course Name */}
                                        <h4 className="text-xl font-semibold text-white">
                                            {course.name}
                                        </h4>

                                        {/* Fixed Duration */}
                                        {course.duration && (
                                            <p className="text-gray-200 mt-1">
                                                <strong>Duration:</strong> {course.duration}
                                            </p>
                                        )}

                                        {/* Duration Options with Fee Hover */}
                                        {course.durationOptions && (
                                            <div className="mt-3">
                                                <strong className="text-gray-200">
                                                    Duration Options:
                                                </strong>

                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {course.durationOptions.map((opt, j) => (
                                                        <div
                                                            key={j}
                                                            className="relative group"
                                                        >
                                                            <span className="bg-purple-200 text-black px-3 py-1 rounded-full text-xs font-medium cursor-default">
                                                                {opt.label}
                                                            </span>

                                                            {/* Fee Tooltip */}
                                                            <div
                                                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                                                                opacity-0 group-hover:opacity-100 transition-opacity duration-200
                                                                bg-black text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap z-10"
                                                            >
                                                                Fees: {opt.fee}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Text */}
                <div className="mt-16 text-center">
                    <p className="text-xl md:text-2xl text-black font-medium font-[Cormorant_Garamond] leading-relaxed">
                        Let us guide you on your journey to becoming a healer and serving the community.
                    </p>

                    <p className="mt-2 text-gray-600 text-base md:text-lg">
                        We also offer professional courses in{" "}
                        <span className="text-[#61245D] font-semibold">Reiki</span> and other transformative healing practices.
                    </p>

                    <div className="w-24 h-1 bg-[#61245D] mx-auto mt-6 rounded-full"></div>
                </div>

            </div>
        </section>
    );
}
