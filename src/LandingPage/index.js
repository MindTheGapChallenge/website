import Rect from "./Rect";
import happy from "./happy.png"
import programming from "./programming.png";
import myImage from "./output-onlinepngtools.png";
import tools from './tools.svg';
import ScrollAnimation from "../ScrollAnimation";
import Sponsors from "./Sponsors";
import GlitchLogo from "./GlitchLogo_Color.png";
import WolframLogo from "./wolfram-corporate-logo-stacked-sm.png";
import FlatlogicLogo from "./flatlogic.png";
import Events from "../Events";

export default function Home () {
  return (
    <>
        <div className="hero-section"  style={{ backgroundImage: `url(${myImage})` }}>
            <div className="animate-fade">
                <h1 className="md:text-7xl text-4xl text-color font-mono">MindTheGap Challenge</h1>
                <h2 className="md:text-2xl text-2xl text-color font-mono mx-20">A global hackathon where students, industry leaders, and investors come together to solve real-world problems, launch startups, and create impact.</h2>
                <div className="flex flex-row justify-center items-center mt-4">
                    <button className="mx-4 rounded-2xl bg-green-600 bg-opacity-20 border-2 border-green-500 p-4 hover:bg-opacity-100 hover:text-white text-color" onClick={() => window.location.href = 'https://discord.gg/JDNDyqbwfp'}>Join the Discord</button>
                    <button className="mx-4 rounded-2xl bg-blue-600 bg-opacity-20 border-2 border-blue-500 p-4 hover:bg-opacity-100 hover:text-white text-color" onClick={() => window.location.href = 'mailto://team@mtgchallenge.org'}>Sponsor us</button>
                    <button className="mx-4 rounded-2xl bg-violet-600 bg-opacity-20 border-2 border-violet-500 p-4 hover:bg-opacity-100 hover:text-white text-color" onClick={() => window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSelHxgkJB4Pfj9m-mmjW0G95VhoMBt47NHuk4-mnnpub9qQSQ/viewform?usp=dialog'}>Apply to Judge</button>
                </div>
            </div>
        </div>
        <ScrollAnimation>
            <div
                className="flex flex-col md:space-x-8 space-x-4 w-full px-4 md:px-16 animate-appear my-16">
                <h1 className="text-white text-6xl font-bold text-center">Why MindTheGap?</h1>
                <div className="flex lg:flex-row flex-col justify-evenly md:space-x-8 space-x-4 w-full px-4 md:px-16 animate-appear">
                    <Rect text="Community Driven Impact"
                          description={"MTG is more than just a hackathon. It is a community of sponsors, expert judges, and hackers ready to change the world"}
                          img={programming}/>
                    <Rect text="Innovation First"
                          description={"We empower participants to build real-world solutions that push boundaries"}
                          img={tools}/>
                    <Rect text="Have Fun"
                          description={"MTG isn't just about coding and making a dent in the world; we understand that having fun while doing all those things is important. "}
                          img={happy}/>
                </div>
            </div>
        </ScrollAnimation>
        <div id="info" className="">
            <div className="odd:bg-gray-950 my-4 py-8" id="home-about">
                <div className="mx-auto my-16">
                    <h4 className="text-center text-color text-4xl font-bold mb-4 font-mono">Trusted by Industry
                        Leaders</h4>
                    <div
                        className="flex flex-row justify-evently md:space-x-8 space-x-4 w-full px-4 md:px-16 animate-appear">
                        <div className="my-16 lg:mx-auto w-auto flex-1">
                            <h1 className="text-center text-white text-3xl font-bold mb-4 font-mono text-color">$300,000+</h1>
                            <p className="text-center text-gray-500">Total Raised</p>
                        </div>
                        <div className="my-16 lg:mx-auto w-auto flex-1">
                            <h1 className="text-center text-white text-3xl font-bold mb-4 font-mono text-color">150+</h1>
                            <p className="text-center text-gray-500">Total Participants</p>
                        </div>
                        <div className="my-16 lg:mx-auto w-auto flex-1">
                            <h1 className="text-center text-white text-3xl font-bold mb-4 font-mono text-color">10</h1>
                            <p className="text-center text-gray-500">Expert Judges</p>
                        </div>
                        <div className="my-16 lg:mx-auto w-auto flex-1">
                            <h1 className="text-center text-white text-3xl font-bold mb-4 font-mono text-color">4+</h1>
                            <p className="text-center text-gray-500">Continents</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center space-x-2">
                        <a href='https://glitch.com' target='_blank'><img src={GlitchLogo} alt="Glitch Logo" className="h-[30px]"/></a>
                        <a href="https://www.wolfram.com/index.en.html" target='_blank'><img src={WolframLogo} alt="Wolfram Logo" className="h-[30px]"/></a>
                        <a href="https://flatlogic.com/" target='_blank'><img src={FlatlogicLogo} alt="Flatlogic Logo" className="h-[30px] rounded-full"/></a>
                    </div>
                </div>
            </div>
            <div id="events" className="p-8 odd:bg-gray-950 mt-16 overflow-hidden">
                <ScrollAnimation>
                    <Events/>
                </ScrollAnimation>
            </div>
            <div id="sponsors" className="p-8 odd:bg-gray-950 mt-16 overflow-hidden">
                <ScrollAnimation>
                    <Sponsors/>
                </ScrollAnimation>
            </div>
        </div>
    </>
  );
};