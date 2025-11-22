import { About } from "./AboutUs";
import { Banner } from "./Banner";
import { Services } from "./Services";

export function Home() {
    return (
        <>
            <div className="text-black"> </div>

            <Banner />
            <Services />
            <About />

        </>
    )
}
