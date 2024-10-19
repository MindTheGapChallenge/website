function About () {
    return (
        <div id="About" className="mt-16">
            <div className="flex md:flex-row flex-col mt-5 mb-12">
            <iframe className="md:w-[20%] my-6" height="315" src="https://www.youtube.com/embed/Sm5xF-UYgdg?si=IjvuhFmfXFTzf6Or" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className="md:w-[80%]">
                    <h1 className="text-center text-4xl font-extrabold text-white mb-6 text-color">About</h1>
                    <p className="text-left text-white mx-16 leading-loose tracking-wide my-4 text-color">
                    Welcome to the MindTheGapHack, where young minds come together to bridge the gap between perception and reality! Our hackathon is inspired by the Gapminder Ignorance Project, which highlights the common misconceptions people have about global development, health, and human progress.

This event challenges high school students and middle schoolers (7th and 8th graders) to hack ignorance by using data, technology, and creative problem-solving. Participants will create innovative solutions to combat widespread misinformation.
                    </p>
                    <p className="text-left text-white mx-16 leading-loose tracking-wide my-8 text-color">
                    This event challenges high school students and middle schoolers (7th and 8th graders) to hack ignorance by using data, technology, and creative problem-solving. Participants will dive into global datasets, uncover truths about the world we live in, and create innovative solutions to combat widespread misinformation.
                    </p>
                </div>
            </div>
            {/*<hr/>*/}
            <div className="flex flex-row mt-5 mb-6">
                <div className="w-full">
                    <h1 className="text-center text-4xl font-extrabold text-white mb-6 text-color">Why Join?</h1>
                    <p className="text-left text-white mx-16 leading-loose tracking-wide text-color">Today, understanding the world through data is more important than ever. The media and popular belief often misrepresent global trends, leaving many unaware of the real progress happening worldwide. By participating in this hackathon, students will learn to work with real-world data, develop coding and analytical skills, and gain a deeper understanding of critical global issues—while also having a lot of fun!</p>
                </div>
            </div>
        </div>
    );
}
export default About;