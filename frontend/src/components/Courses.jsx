import { useEffect } from "react";

const instructorCourses = [
    {
        instructor: "Deepshikha",
        title: "Energy Healer & Spiritual Mentor",
        courses: [
            {
                name: "Chakra Healing Certification",
                duration: "2 Days",
            },
            {
                name: "Karmic Clearing Workshop",
                duration: "Single Session (75 Minutes)",
            },
            {
                name: "Angelic Healing Masterclass",
                durationOptions: ["7 Days", "21 Days", "45 Days"],
            }
        ]
    },
    {
        instructor: "Mona Dixit",
        title: "Reiki Master & Energy Healing Specialist",
        courses: [
            {
                name: "Reiki Level I, II, III",
                durationOptions: ["2 Days", "7 Days", "21 Days"]
            },
            {
                name: "Past Life Regression Practitioner Course",
                duration: "3 Days"
            },
            {
                name: "Energy Alignment & Healing Program",
                durationOptions: ["11 Days", "30 Days", "365 Days"]
            }
        ]
    },
    {
        instructor: "Sunny Mann",
        title: "Animal Communicator & Spiritual Coach",
        courses: [
            {
                name: "Animal Communication Course",
                durationOptions: ["1 Month", "3 Months"]
            },
            {
                name: "Intuitive Healing for Pets",
                duration: "2 Days"
            },
            {
                name: "Spiritual Coaching for Empaths",
                durationOptions: ["7 Days", "30 Days", "90 Days"]
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
        <section className="bg-[#FFFBF2] px-2 md:px-[50px] py-12">
            <div className="max-w-7xl mx-auto">

                {/* Page Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold text-purple-800 font-[Cormorant_Garamond]">
                        Our Courses
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto mt-3 text-lg">
                        Explore professional certification and transformational learning with our expert instructors.
                    </p>
                </div>

                {/* Instructor Sections */}
                <div className="space-y-16">
                    {instructorCourses.map((ins, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">

                            {/* Instructor Name */}
                            <h3 className="text-3xl font-bold text-purple-800 font-[Cormorant_Garamond]">
                                {ins.instructor}
                            </h3>

                            {/* Title */}
                            <p className="text-purple-600 mt-1 text-sm font-medium uppercase tracking-wide">
                                {ins.title}
                            </p>

                            {/* Courses List */}
                            <div className="mt-6 space-y-5">
                                {ins.courses.map((course, i) => (
                                    <div
                                        key={i}
                                        className="p-5 bg-[#F9F4FF] rounded-xl border border-purple-100 shadow-sm"
                                    >
                                        {/* Course Name */}
                                        <h4 className="text-xl font-semibold text-purple-900">
                                            {course.name}
                                        </h4>

                                        {/* Duration */}
                                        {course.duration && (
                                            <p className="text-gray-700 mt-1">
                                                <strong>Duration:</strong> {course.duration}
                                            </p>
                                        )}

                                        {/* Duration Options */}
                                        {course.durationOptions && (
                                            <div className="mt-2">
                                                <strong className="text-gray-700">Duration Options:</strong>
                                                <div className="flex flex-wrap gap-2 mt-1">
                                                    {course.durationOptions.map((d, j) => (
                                                        <span
                                                            key={j}
                                                            className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-xs font-medium"
                                                        >
                                                            {d}
                                                        </span>
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

            </div>
        </section>
    );
}



// export const Courses = () => {
//     return <>

//         <div className="min-h-screen text-black">
//             <h1 className="text-center text-[30px] md:text-[60px] font-bold">Coming soon!</h1>
//         </div>
//     </>
// }