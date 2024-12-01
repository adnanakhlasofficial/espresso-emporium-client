const Banner = () => {
    return (
        <div className="bg-bannerbg bg-no-repeat bg-cover relative bg-center min-h-[50rem]">
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-16">
                <h2 className="title text-white mb-4">
                    Would you like a Cup of Delicious Coffee?
                </h2>
                <p className="desc text-white">
                    It's coffee time - Sip & Savor - Relaxation in every sip!
                    Get the nostalgia back!! Your companion of every moment!!!
                    Enjoy the beautiful moments and make them memorable.
                </p>
                <button className="btn mt-8">Learn More</button>
            </div>
        </div>
    );
};

export default Banner;
