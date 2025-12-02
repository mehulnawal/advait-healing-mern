import bannerVideo from "../assets/banner/banner-video.mp4";

export const BannerVideo = () => {
    return (
        <section className="px-2 md:px-[50px] lg:px-[70px] py-16 bg-[#FFFBF2]">

            <div className="max-w-6xl mx-auto">

                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-purple-100 bg-black">

                    {/* Video wrapper */}
                    <div
                        className="
                            w-full 
                            h-[260px]            /* Mobile */
                            sm:h-[330px]         /* Small phones */
                            md:h-auto            /* Allow aspect to take over */
                            md:aspect-[16/9]     /* Desktop proper look */
                            lg:aspect-[21/9]     /* Extra wide screens */
                            bg-black"
                    >
                        <video
                            src={bannerVideo}
                            autoPlay
                            // muted               // REQUIRED for autoplay
                            loop
                            playsInline
                            controls
                            className="
                                w-full 
                                h-full 
                                object-cover         /* Mobile full */
                                md:object-contain    /* Desktop letterbox */
                                rounded-3xl
                            "
                        />
                    </div>

                </div>

            </div>

        </section>
    );
};
