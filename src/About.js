function About () {
    return (
        <div id="About" className="mt-16">
            <div className="flex md:flex-row flex-col mt-5 mb-12">
            <iframe className="md:w-[20%] my-6" height="315" src="https://www.youtube.com/embed/Sm5xF-UYgdg?si=IjvuhFmfXFTzf6Or" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
                <div className="md:w-[80%]">
                    <h1 className="text-center text-4xl font-extrabold color mb-6 text-color">About The MTG Challenge</h1>
                    <p className="text-left text-white mx-16 leading-loose tracking-wide my-4 text-color">
                        In the 21st century, humanity has made more progress than ever. Weather it comes to poverty, disease, quality of life, life expectancy, or any other indicator of global development, we are significantly better off than we were just a couple decades ago. Did you know that, according to Canary Media, over 85% of new electricity generation infrastructure utilizes renewable energy? That means the switch to renewables is already well underway.</p>

                        <p className="text-left text-white mx-16 leading-loose tracking-wide my-4 text-color">There are
                            many other examples of such surprising facts. The reason we find them surprising is that news sites and social media often produces content that focuses on negative or sensational stories. They often talk about war, crisis, and disaster, but fail to mention positive trends in society. This false perception has significant impact on society. For example, despite that statistic about climate change, there are still many people who believe climate change is inevitable. That's because they are simply unaware of what humans are doing to combat climate change. Such beliefs can be very dangerous. People who belive that climate change is inevitable, for example, are much less likely to donate to a charity that combats climate change or vote for a presidential candidate who makes climate change one of their higher priorities.</p>
                </div>
            </div>
            {/*<hr/>*/}
            <div className="flex flex-row mt-5 mb-6">
                <div className="w-full">
                    <h1 className="text-center text-4xl font-extrabold text-white mb-6 text-color">Why Join?</h1>
                    <p className="text-left text-white mx-16 leading-loose tracking-wide text-color">MindTheGap Challenge brings together High School students from around the world to fight such
                        devastating ignorance. Participants will use code to build solutions that will raise awareness about topics like world poverty and climate change. This is a great opportunity for high school students who are passionate about coding and want to use their skills to build something novel that solves a real problem and has a real impact on the world. Even beyond that, this event is a great way to meet other like-minded high school students who are also passionate about coding. This is a great networking opportunity</p>
                </div>
            </div>
        </div>
    );
}
export default About;