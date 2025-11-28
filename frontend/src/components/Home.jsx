import { About } from "./AboutUs";
import { Banner } from "./Banner";
import { BannerVideo } from "./Banner-video";
import HowIWork from "./HowWeWork";
import Testimonials from "./Testimonials";

export function Home() {
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
