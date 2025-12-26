import { NavLink, Outlet } from "react-router";
import { useEffect, useState } from "react";
import logo from "../assets/logo/advait-healing-logo2.png";
import { CalendarHeart, Menu, X } from "lucide-react";
import { Footer } from "./footer";
import ChatBot from "./chatbot";

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [botOpen, setBotOpen] = useState(false);

    // When Navbar opens → close ChatBot
    const handleNavbarOpen = () => {
        setBotOpen(false);
        setOpen(true);
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <>
            {/* NAVBAR */}
            <div className="h-30 px-2 md:px-[50px] lg:px-[70px] text-black text-[17px]">
                <nav className="flex items-center justify-between md:grid md:grid-cols-3 h-full">

                    {/* Logo */}
                    <NavLink to='/' className="w-fit h-fit mb-10">
                        <img className="w-[180px]" src={logo} alt="Logo" />
                    </NavLink>

                    <ul className="hidden md:flex justify-between gap-5">
                        <li></li>

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `relative pb-1 transition-all
                                    ${isActive ? "text-[#7C5190] after:w-full after:bg-[#7C5190]" :
                                        "text-black after:w-0 after:bg-transparent"}
                                    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all`
                                }>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    `relative pb-1 transition-all
                                    ${isActive ? "text-[#7C5190] after:w-full after:bg-[#7C5190]" :
                                        "text-black after:w-0 after:bg-transparent"}
                                    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all`
                                }>
                                Services
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/aboutOurInstructors"
                                className={({ isActive }) =>
                                    `relative pb-1 transition-all 
                                    ${isActive ? "text-[#7C5190] after:w-full after:bg-[#7C5190]" :
                                        "text-black after:w-0 after:bg-transparent"}
                                    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all`}
                            >
                                About Us
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/courses"
                                className={({ isActive }) =>
                                    `relative pb-1 transition-all 
                                    ${isActive ? "text-[#7C5190] after:w-full after:bg-[#7C5190]" :
                                        "text-black after:w-0 after:bg-transparent"}
                                    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all`}
                            >
                                Courses
                            </NavLink>
                        </li>
                    </ul>

                    {/* Desktop Button */}
                    <NavLink to='bookMySession'>
                        <button className="hidden md:flex justify-end items-center gap-2 bg-[#7C5190] w-fit text-white ms-auto py-2 px-2 rounded-2xl text-[14px] hover:bg-[#a759c9f5]">
                            <CalendarHeart size={"18px"} />
                            <span>Book Your Session</span>
                        </button>
                    </NavLink>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={handleNavbarOpen}
                        className="md:hidden ms-auto justify-self-end"
                    >
                        <Menu size={30} />
                    </button>
                </nav>
            </div>

            {/* MOBILE SIDEBAR */}
            <div
                className={`fixed top-0 right-0 h-full w-[260px] bg-white text-black shadow-xl z-[9999]
                transform transition-transform duration-300 
                ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Close */}
                <div className="flex justify-end p-4">
                    <button onClick={() => setOpen(false)}>
                        <X size={26} className="text-black" />
                    </button>
                </div>

                {/* Menu Items */}
                <ul className="flex flex-col  !space-y-10 p-6  text-[18px] text-black">

                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `relative pb-1 transition-all
                                    ${isActive ? "text-[#7C5190] after:w-full after:bg-[#7C5190]" :
                                    "text-black after:w-0 after:bg-transparent"}
                                    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all`
                            }>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/services"
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `relative pb-1 
                                ${isActive ? "after:w-full after:bg-[#7C5190]" :
                                    "after:w-0 after:bg-transparent"}
                                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all`
                            }
                        >
                            Services
                        </NavLink>

                    </li>

                    <li>
                        <NavLink
                            to="/aboutOurInstructors"
                            className={({ isActive }) =>
                                `relative pb-1 
                                ${isActive ? "after:w-full after:bg-[#7C5190]" :
                                    "after:w-0 after:bg-transparent"}
                                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all`
                            }
                        >
                            About Us
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/courses"
                            className={({ isActive }) =>
                                `relative pb-1 
                                ${isActive ? "after:w-full after:bg-[#7C5190]" :
                                    "after:w-0 after:bg-transparent"}
                                after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all`
                            }
                        >
                            Courses
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='bookMySession'>
                            <button
                                className="flex items-center gap-2 bg-[#7C5190] text-white w-fit py-2 px-3 rounded-2xl"
                                onClick={() => setOpen(false)}
                            >
                                <CalendarHeart size={18} />
                                <span>Book Your Session</span>
                            </button>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <Outlet />

            {/* PASS STATE TO CHATBOT */}
            <ChatBot botOpen={botOpen} setBotOpen={setBotOpen} closeNavbar={() => setOpen(false)} />

            <Footer />
        </>
    );
};
