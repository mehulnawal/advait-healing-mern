import { Instagram, Mail } from "lucide-react";
import logoWhiteText from '../assets/logo/advait-healing-logo-white-text.png';
import { NavLink } from "react-router";

export const Footer = () => {
    return (
        <footer className="px-2 md:px-[50px] lg:px-[70px] bg-[#0f0f0f] text-white border-t border-border/40">
            <div className="container mx-auto pt-16">

                <div className="grid md:grid-cols-3 gap-12">

                    {/* Logo */}
                    <div className="space-y-5">
                        <NavLink to="/" className="h-fit flex items-center">
                            <img
                                className="w-[170px]"
                                src={logoWhiteText}
                                alt="Advait Healing Logo"
                            />
                        </NavLink>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-5">
                        <h4 className="font-light tracking-wide">Quick Links</h4>

                        <div className="space-y-3">
                            <NavLink
                                to="/"
                                className="block text-sm text-muted-foreground hover:text-primary transition-colors font-light"
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/services"
                                className="block text-sm text-muted-foreground hover:text-primary transition-colors font-light"
                            >
                                Services
                            </NavLink>

                            <NavLink
                                to="/aboutOurInstructors"
                                className="block text-sm text-muted-foreground hover:text-primary transition-colors font-light"
                            >
                                About Us
                            </NavLink>

                            <NavLink
                                to="/courses"
                                className="block text-sm text-muted-foreground hover:text-primary transition-colors font-light"
                            >
                                Courses
                            </NavLink>

                            <NavLink
                                to="/testimonials"
                                className="block text-sm text-muted-foreground hover:text-primary transition-colors font-light"
                            >
                                Testimonials
                            </NavLink>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="space-y-5">
                        <h4 className="font-light tracking-wide">Connect</h4>

                        <div className="flex gap-3">
                            <a
                                href="https://www.instagram.com/advait_healing"
                                target="_blank"
                                rel="noreferrer"
                                className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                            >
                                <Instagram className="w-5 h-5 text-primary" />
                            </a>

                            <a
                                href="mailto:contact@advaithealing.com"
                                className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                            >
                                <Mail className="w-5 h-5 text-primary" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Footer Note */}
                <div className="mt-16 py-8 border-t border-border/30 text-center">
                    <p className="text-sm text-muted-foreground font-light tracking-wide">
                        © {new Date().getFullYear()} Advait Healing. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};
