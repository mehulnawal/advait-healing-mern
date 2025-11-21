import { NavLink, Outlet } from "react-router";
import { useState } from "react";
import logo from "../assets/logo/advait-healing-logo2.png";
import { CalendarHeart, Menu, X } from "lucide-react";
import { Footer } from "./footer";

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* NAVBAR */}
            <div className="h-30 px-5 md:px-22 text-black text-[17px]">
                <nav className="grid grid-cols-2 md:grid-cols-3 items-center h-full">

                    {/* Logo */}
                    <NavLink to='/' className="w-fit h-fit mb-10">
                        <img className="w-[180px]" src={logo} alt="Logo" />
                    </NavLink>

                    <ul className="hidden md:flex justify-between gap-5">
                        <li>
                            <NavLink
                                to="/how-do-i-work"
                                className={({ isActive }) =>
                                    `relative pb-1 transition-all
     ${isActive ? "text-[#7C5190] after:w-full after:bg-[#7C5190]" : "text-black after:w-0 after:bg-transparent"}
     after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all`
                                } >
                                How Do I Work ?
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    `relative pb-1 transition-all
     ${isActive ? "text-[#7C5190] after:w-full after:bg-[#7C5190]" : "text-black after:w-0 after:bg-transparent"}
     after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all`
                                }>
                                Services
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/testimonials"
                                className={({ isActive }) =>
                                    `relative pb-1 transition-all
     ${isActive ? "text-[#7C5190] after:w-full after:bg-[#7C5190]" : "text-black after:w-0 after:bg-transparent"}
     after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all`
                                } >
                                Testimonials
                            </NavLink>
                        </li>
                    </ul>


                    {/* Desktop Button */}
                    <button className="hidden md:flex justify-end items-center gap-2 bg-[#7C5190] w-fit text-white ms-auto py-2 px-2 rounded-2xl text-[14px] hover:bg-[#a759c9f5] cursor-pointer">
                        <CalendarHeart size={"18px"} />
                        <span>Book Your Session</span>
                    </button>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden ms-auto justify-self-end"
                    >
                        <Menu size={30} />
                    </button>
                </nav>
            </div>

            {/* MOBILE SIDEBAR MENU */}
            <div className={`fixed top-0 right-0 h-full w-[260px] bg-white text-black shadow-xl z-[9999] transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`} >

                {/* Close */}
                <div className="flex justify-end p-4">
                    <button onClick={() => setOpen(false)}>
                        <X size={26} className="text-black" />
                    </button>
                </div>

                {/* Menu Items */}
                <ul className="flex flex-col gap-6 p-6 text-[18px] text-black">

                    <li>
                        <NavLink
                            to="/how-do-i-work"
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `relative pb-1 
            ${isActive ? "after:w-full after:bg-[#7C5190]" : "after:w-0 after:bg-transparent"} 
            after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all 
            hover:after:w-full hover:after:bg-[#7C5190]`
                            }
                        >
                            How Do I Work ?
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/services"
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `relative pb-1 
            ${isActive ? "after:w-full after:bg-[#7C5190]" : "after:w-0 after:bg-transparent"} 
            after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all 
            hover:after:w-full hover:after:bg-[#7C5190]`
                            }
                        >
                            Services
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/testimonials"
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `relative pb-1 
            ${isActive ? "after:w-full after:bg-[#7C5190]" : "after:w-0 after:bg-transparent"} 
            after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all 
            hover:after:w-full hover:after:bg-[#7C5190]`
                            }
                        >
                            Testimonials
                        </NavLink>
                    </li>


                    {/* Mobile Button */}
                    <button
                        className="flex items-center gap-2 bg-[#7C5190] text-white w-fit py-2 px-3 rounded-2xl text-[15px] hover:bg-[#a759c9f5] cursor-pointer"
                        onClick={() => setOpen(false)} >
                        <CalendarHeart size={18} />
                        <span>Book Your Session</span>
                    </button>

                </ul>
            </div>


            <Outlet />
            <Footer />
        </>
    );
};
