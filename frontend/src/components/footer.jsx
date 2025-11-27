import { Facebook, Instagram, Youtube, Mail } from "lucide-react";
import logoWhiteText from '../assets/logo/advait-healing-logo-white-text.png'
import { NavLink } from "react-router";

export const Footer = () => {
    const scrollToSection = () => {
    };

    return (
        <footer className="px-5 md:px-[50px] lg:px-[70px] bg-secondary/30 border-t border-border/40 text-white bg-[#0f0f0f]">
            <div className="container mx-auto pt-16">
                <div className="grid md:grid-cols-4 gap-12">

                    {/* Logo & Tagline */}
                    <div className="space-y-5">
                        <div className="flex items-center space-x-3">

                            {/* logo */}
                            <NavLink to='/' className="h-fit flex items-center gap-3">
                                <img className="w-[170px]" src={logoWhiteText} alt="Logo" />
                            </NavLink>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-5">
                        <h4 className="font-light text-foreground tracking-wide">Quick Links</h4>
                        <div className="space-y-3">
                            {/* <button
                                onClick={() => scrollToSection("how-i-work")}
                                className="block text-sm text-muted-foreground hover:text-primary transition-colors font-light"
                            >
                                How I Work
                            </button> */}
                            <button
                                onClick={() => scrollToSection("services")}
                                className="block text-sm text-muted-foreground hover:text-primary transition-colors font-light"
                            >
                                Services
                            </button>
                            <button
                                onClick={() => scrollToSection("testimonials")}
                                className="block text-sm text-muted-foreground hover:text-primary transition-colors font-light"
                            >
                                Testimonials
                            </button>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-5">
                        <h4 className="font-light text-foreground tracking-wide">Services</h4>
                        <div className="space-y-3">
                            <p className="text-sm text-muted-foreground font-light">Aura Clearing</p>
                            <p className="text-sm text-muted-foreground font-light">Chakra Balancing</p>
                            <p className="text-sm text-muted-foreground font-light">Karmic Healing</p>
                            <p className="text-sm text-muted-foreground font-light">Entity Removal</p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-5">
                        <h4 className="font-light text-foreground tracking-wide">Connect</h4>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                            >
                                <Facebook className="w-5 h-5 text-primary" />
                            </a>
                            <a
                                href="#"
                                className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                            >
                                <Instagram className="w-5 h-5 text-primary" />
                            </a>
                            <a
                                href="#"
                                className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                            >
                                <Youtube className="w-5 h-5 text-primary" />
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

                <div className="mt-16 py-8 border-t border-border/30 text-center">
                    <p className="text-sm text-muted-foreground font-light tracking-wide">
                        © {new Date().getFullYear()} Advait Healing. All rights reserved.
                    </p>
                </div>
            </div>
        </footer >
    );
};