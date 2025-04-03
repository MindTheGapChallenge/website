import Rect from "./Rect";
import happy from "./happy.png"
import programming from "./programming.png";
import myImage from "./output-onlinepngtools.png";
import tools from './tools.svg';
import Prizes from "./Prizes";
import ScrollAnimation from "../ScrollAnimation";
import Sponsors from "./Sponsors";

export default function Home () {
  return (
    <>
        <div className="hero-section"  style={{ backgroundImage: `url(${myImage})` }}>
            <div className="animate-fade">
                <h1 className="md:text-7xl text-4xl text-color font-mono">MindTheGap Challenge</h1>
                <h2 className="md:text-2xl text-2xl text-color font-mono mx-20">A global hackathon where students, industry leaders, and investors come together to solve real-world problems, launch startups, and create impact.</h2>
                <div className="flex flex-row justify-center items-center mt-4">
                    <button className="mx-4 rounded-2xl bg-green-600 bg-opacity-20 border-2 border-green-500 p-4 hover:bg-opacity-100 hover:text-white text-color">Join the hackathon</button>
                    <button className="mx-4 rounded-2xl bg-blue-600 bg-opacity-20 border-2 border-blue-500 p-4 hover:bg-opacity-100 hover:text-white text-color">Sponsor us</button>
                    <button className="mx-4 rounded-2xl bg-violet-600 bg-opacity-20 border-2 border-violet-500 p-4 hover:bg-opacity-100 hover:text-white text-color">Apply to Judge</button>
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
        <div className="bg-gray-800 my-4 py-8" id="home-about">
            <div className="md:w-[60%] w-[90%] mx-auto my-16">
              <h4 className="text-center text-color text-4xl font-bold mb-4 font-mono">Trusted by Industry Leaders</h4>
              <ScrollAnimation>
                <p className="text-center px-3 text-color leading-8 font-mono">In the 21st century, humanity has made more progress than ever. Weather it comes to poverty, disease, quality of life, life expectancy, or any other indicator of global development, we are significantly better off than we were just a couple decades ago. Did you know that, according to Canary Media, over 85% of new electricity generation infrastructure utilizes renewable energy? That means the switch to renewables is already well underway.
</p>
                  <p className="text-center px-3 text-color leading-8 font-mono my-8">There are many other examples of such
                      surprising facts. The reason we find them surprising is that news sites and social media often produces content that focuses on negative or sensational stories. They often talk about war, crisis, and disaster, but fail to mention positive trends in society. This false perception has significant impact on society. For example, despite that statistic about climate change, there are still many people who believe climate change is inevitable. That's because they are simply unaware of what humans are doing to combat climate change. Such beliefs can be very dangerous. People who belive that climate change is inevitable, for example, are much less likely to donate to a charity that combats climate change or vote for a presidential candidate who makes climate change one of their higher priorities.</p>

                      <p className="text-center px-3 text-color leading-8 font-mono">MindTheGap Challenge brings
                          together High School students from around the world to fight such devastating ignorance. Participants will use code to build solutions that will raise awareness about topics like world poverty and climate change. This is a great opportunity for high school students who are passionate about coding and want to use their skills to build something novel that solves a real problem and has a real impact on the world. Even beyond that, this event is a great way to network with other like-minded high school students who are also passionate about coding and start networking.</p>
                <p className="text-center mt-8 text-blue-600 hover:text-blue-700 font-mono"><a href="/about">Learn More</a></p>
              </ScrollAnimation>
                {/*              <h4 className="text-center text-color text-4xl font-bold mb-4 font-mono">Our Vision</h4>
              <ScrollAnimation>
                <p className="text-center px-3 text-color leading-8 font-mono">In the 21st century, humanity is in a better position than ever. In fact, since the beginning of the previous century, the average global life expectancy has more than doubled*. We have cured countless diseases. Luxuries equivalent to science fiction only a couple generations ago are now being taken for granted. Poverty rates are at an all-time low and quality of life has never been this high. We have an abundance of pretty much every type of food at any time of the year. Even after all this, it feels like everybody is more pessimistic than ever. Every day, somebody says the world will end. Climate change, AI takeover, when will it end?! Even with all these advancements, many people remain pessimistic, worrying about issues like climate change or the rise of AI. This hackathon is your opportunity to create an app that fosters optimism and counters these misconceptions.</p>
                <p className="text-center mt-8 text-blue-600 hover:text-blue-700 font-mono"><a href="/about">Learn More</a></p>
              </ScrollAnimation>*/}
            </div>
          </div>
          <div id="prizes" className="my-16">
            <ScrollAnimation>
              <Prizes/>
            </ScrollAnimation>
          </div>
          <div id="sponsors" className="p-8 bg-gray-800 mt-16 overflow-hidden">
            <ScrollAnimation>
              <Sponsors/>
            </ScrollAnimation>
          </div>
        </div>
    </>
  );
};