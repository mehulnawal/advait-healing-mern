import { useEffect } from "react";
import { About } from "./AboutUs";
import { Banner } from "./Banner";
import { BannerVideo } from "./Banner-video";
import HowIWork from "./HowWeWork";
import Testimonials from "./Testimonials";

export function Home() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);


    return (
        <>
            <div className="text-black">

                <Banner />
                <BannerVideo />
                <About />
                <HowIWork />
                <Testimonials />
            </div>

        </>
    )
}
