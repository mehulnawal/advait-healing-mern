import bannerVideo from "../assets/banner/banner-video.mp4";

export const BannerVideo = () => {
    return (
        <section className="px-5 md:px-[50px] lg:px-[70px] py-16 bg-[#FFFBF2]">

            <div className="max-w-6xl mx-auto">

                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-purple-100 bg-black">

                    {/* Video wrapper with fixed ratio */}
                    <div className="w-full aspect-[16/9] bg-black">
                        <video
                            src={bannerVideo}
                            autoPlay
                            loop
                            controls
                            // muted
                            playsInline
                            className="w-full h-full object-contain rounded-3xl"
                        />
                    </div>

                </div>

            </div>

        </section>
    );
};
