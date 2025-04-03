export default function About() {
    return (
        <div className="min-h-screen bg-gray-900 text-color px-6 py-12 md:px-20">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-mono font-bold text-color">About MindTheGap Challenge</h1>
                <p className="mt-4 text-lg text-gray-400">
                    Bridging the gap between innovation and opportunity.
                </p>
            </div>

            <div className="max-w-3xl mx-auto mt-10">
                <section className="mb-10">
                    <h2 className="text-3xl font-semibold text-color">Our Mission</h2>
                    <p className="mt-2 text-gray-400">
                        We exist to close the gap between talent and opportunity by creating an ecosystem where:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-400">
                        <li><strong>Students</strong> gain hands-on experience and build real-world projects.</li>
                        <li><strong>Industry leaders</strong> discover fresh talent and groundbreaking ideas.</li>
                        <li><strong>Innovators</strong> turn their projects into scalable startups.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-semibold text-color">What Makes MTG Different?</h2>
                    <ul className="list-disc list-inside mt-2 text-gray-400">
                        <li><strong>Real-World Impact:</strong> Our challenges focus on practical problems that drive change.</li>
                        <li><strong>Global Community:</strong> A diverse network of students, professionals, and investors.</li>
                        <li><strong>Beyond the Hackathon:</strong> Winning teams get access to mentorship, funding, and startup incubators.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-semibold text-color">How It Works</h2>
                    <ol className="list-decimal list-inside mt-2 text-gray-400">
                        <li>Form a Team or join solo and choose from three tracks: AI, No-Code, or Game Design.</li>
                        <li>Build & Innovate over one month with mentor support, workshops, and networking events.</li>
                        <li>Pitch to Judges—a panel of investors, founders, and tech leaders.</li>
                        <li>Win Prizes & Scale Your Idea! Top projects receive funding and industry connections.</li>
                    </ol>
                </section>

                <section className="mb-10">
                    <h2 className="text-3xl font-semibold text-color">Our Partners & Sponsors</h2>
                    <p className="mt-2 text-gray-400">
                        MindTheGap is backed by leading tech companies, investors, and universities that share our vision of fostering innovation.
                    </p>
                    <button className="mt-4 px-6 py-2 border-2 border-green-400 text-color rounded-lg hover:bg-green-400 hover:text-black transition">
                        Become a Sponsor
                    </button>
                </section>
            </div>

            <div className="text-center mt-10">
                <h2 className="text-2xl text-color font-semibold">Join the Movement</h2>
                <p className="mt-2 text-gray-400">MindTheGap isn’t just a hackathon; it’s a launchpad for future tech leaders.</p>
                <div className="mt-4 flex justify-center gap-4">
                    <button className="px-6 py-2 border-2 border-green-400 text-color rounded-lg hover:bg-green-400 hover:text-black transition">
                        Sign Up for MTG 2024
                    </button>
                    <button className="px-6 py-2 border-2 border-green-400 text-color rounded-lg hover:bg-green-400 hover:text-black transition">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}