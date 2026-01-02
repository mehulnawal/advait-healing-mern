import { NavLink, Outlet } from "react-router";
import { useEffect, useState } from "react";
import logo from "../assets/logo/advait-healing-logo2.png";
import { CalendarHeart, Menu, X } from "lucide-react";
import { Footer } from "./footer";
import ChatBot from "./chatbot";

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [botOpen, setBotOpen] = useState(false);

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
            <div
                id="main-navbar"
                className="fixed top-0 left-0 w-full z-[1000] bg-white px-2 md:px-[50px] lg:px-[70px] text-black text-[17px] shadow-sm" >

                <nav className="flex items-center justify-between min-[1001px]:grid min-[1001px]:grid-cols-3 h-full">

                    {/* Logo */}
                    <NavLink to="/" className="w-fit h-fit">
                        <img className="w-[180px]" src={logo} alt="Logo" />
                    </NavLink>

                    {/* DESKTOP NAV LINKS (ONLY >1000px) */}
                    <ul className="hidden min-[1001px]:flex justify-center gap-6">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `relative pb-1 whitespace-nowrap min-w-[80px] text-center transition-all
                                    ${isActive
                                        ? "text-[#61245D] after:w-full after:bg-[#61245D]"
                                        : "text-black after:w-0 after:bg-transparent"}
                                    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all`
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    `relative pb-1 whitespace-nowrap min-w-[90px] text-center transition-all
                                    ${isActive
                                        ? "text-[#61245D] after:w-full after:bg-[#61245D]"
                                        : "text-black after:w-0 after:bg-transparent"}
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
                                    `relative pb-1 whitespace-nowrap min-w-[100px] text-center transition-all
                                    ${isActive
                                        ? "text-[#61245D] after:w-full after:bg-[#61245D]"
                                        : "text-black after:w-0 after:bg-transparent"}
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
                                    `relative pb-1 whitespace-nowrap min-w-[90px] text-center transition-all
                                    ${isActive
                                        ? "text-[#61245D] after:w-full after:bg-[#61245D]"
                                        : "text-black after:w-0 after:bg-transparent"}
                                    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all`
                                }
                            >
                                Courses
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/testimonials"
                                className={({ isActive }) =>
                                    `relative pb-1 whitespace-nowrap min-w-[110px] text-center transition-all
                                    ${isActive
                                        ? "text-[#61245D] after:w-full after:bg-[#61245D]"
                                        : "text-black after:w-0 after:bg-transparent"}
                                    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all`
                                }
                            >
                                Testimonials
                            </NavLink>
                        </li>
                    </ul>

                    {/* DESKTOP BUTTON (ONLY >1000px) */}
                    <NavLink to="/bookMySession">
                        <button className="hidden min-[1001px]:flex items-center gap-2 bg-[#61245D] text-white ms-auto py-2 px-3 rounded-2xl text-[14px] hover:bg-[#82327c] transition">
                            <CalendarHeart size={18} />
                            <span>Book Your Session</span>
                        </button>
                    </NavLink>

                    {/* HAMBURGER (≤1000px) */}
                    <button
                        onClick={handleNavbarOpen}
                        className="min-[1001px]:hidden ms-auto"
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
                <div className="flex justify-end p-4">
                    <button onClick={() => setOpen(false)}>
                        <X size={26} />
                    </button>
                </div>

                <ul className="flex flex-col space-y-10 p-6 text-[18px]">
                    <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
                    <li><NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink></li>
                    <li><NavLink to="/aboutOurInstructors" onClick={() => setOpen(false)}>About Us</NavLink></li>
                    <li><NavLink to="/courses" onClick={() => setOpen(false)}>Courses</NavLink></li>
                    <li><NavLink to="/testimonials" onClick={() => setOpen(false)}>Testimonials</NavLink></li>

                    <li>
                        <NavLink to="/bookMySession" onClick={() => setOpen(false)}>
                            <button className="flex items-center gap-2 bg-[#61245D] text-white py-2 px-3 rounded-2xl">
                                <CalendarHeart size={18} />
                                <span>Book Your Session</span>
                            </button>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="pt-[96px]">
                <Outlet />
            </div>


            <ChatBot botOpen={botOpen} setBotOpen={setBotOpen} closeNavbar={() => setOpen(false)} />
            <Footer />
        </>
    );
};
