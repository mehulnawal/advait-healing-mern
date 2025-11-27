import { About } from "./AboutUs";
import { Banner } from "./Banner";
import HowIWork from "./HowWeWork";
import Testimonials from "./Testimonials";

export function Home() {
    return (
        <>
            <div className="text-black">

                <Banner />
                <About />
                <HowIWork />
                <Testimonials />
            </div>

        </>
    )
}
