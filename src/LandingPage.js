import Rect from "./Rect";
import world from "./world.png";
import people from "./people.png";
import happy from "./happy.png"
import programming from "./programming.png";
import myImage from "./output-onlinepngtools.png";
import Prizes from "./Prizes";
import ScrollAnimation from "./ScrollAnimation";

export default function Home () {
  return (
    <>
        <div class="hero-section"  style={{ backgroundImage: `url(${myImage})` }}>
          <div className="animate-fade">
            <h1 className="md:text-7xl text-4xl text-color font-mono">MindTheGap Challenge</h1>
            <h2 className="md:text-5xl text-2xl text-color font-mono">Hacking Ignorance, Empowering Change</h2>
          </div>
        </div>
        <ScrollAnimation>
        <div className="flex lg:flex-row flex-col justify-evenly md:space-x-8 space-x-4 w-full px-4 md:px-16 animate-appear my-16">
            <Rect text="Learn Programming" description={"Hackathons help high school students learn programming by offering a fun, hands-on way to build projects. You'll work with new languages, tools, and collaborate with others. The weeklong format gives you time to explore, problem-solve, and learn at your own pace, making it a great environment for growth."} img={programming}/>
            {/*<Rect text="Creative Solutions" img={brain}/>*/}
            <Rect text="Work with Others" description={"A hackathon is a team sport. You will be working in groups to make your project. Not only does this system help you accomplish more, but it also makes building more fun. In addition to that, you are building your teamwork and collaboration skills."} img={people}/>
            <Rect text="Change the World" description={"Hackathons let high school students apply programming to real-world problems, making learning more meaningful. By tackling real challenges, you see firsthand how code can create impactful solutions. This practical experience boosts your problem-solving skills and shows how programming connects to real-life situations and careers."} img={world}/>
            <Rect text="Have Fun" description={"Hackathons are not just about learning—they’re also a lot of fun! You get to collaborate with friends, experiment with cool tech, and bring creative ideas to life. The relaxed, weeklong format allows you to enjoy the process, making coding feel more like a game than a task, while bonding with teammates and sharing in the excitement."} img={happy}/>
        </div>
        </ScrollAnimation>
        <div id="info" className="">
          <div className="bg-gray-800 my-4 py-8" id="home-about">
            <div className="md:w-[60%] w-[90%] mx-auto my-16">
              <h4 className="text-center text-color text-4xl font-bold mb-4 font-mono">Welcome to MindTheGap Hacks</h4>
              <ScrollAnimation>
                <p className="text-center px-3 text-green-600 text-color leading-8 font-mono">Welcome to the MindTheGapHack, where young minds come together to bridge the gap between perception and reality! This event challenges high school students and middle schoolers (7th and 8th graders) to hack ignorance by using data, technology, and creative problem-solving. Participants will create innovative solutions to combat widespread misinformation.</p>
                <p className="text-center mt-8 text-blue-600 hover:text-blue-700 font-mono"><a href="/about">Learn More</a></p>
              </ScrollAnimation>
              <h4 className="text-center text-color text-4xl font-bold mb-4 font-mono">Our Vision</h4>
              <ScrollAnimation>
                <p className="text-center px-3 text-green-600 text-color leading-8 font-mono">In the 21st century, humanity is in a better position than ever. In fact, since the beginning of the previous cenctury, the average global life expectancy has more than doubled<a className="text-xs text-blue-700 underline" href="https://www.statista.com/statistics/1302736/global-life-expectancy-by-region-country-historical/">*</a>. We have cured countless deseases. Luxouries that were equivilant to science fiction only a couple generations ago are now being taken granted. Poverty rates are at an all-time low and quality of life has never been this high. We have an abundance of pretty much every type of food at any time of the year. Even after all this, it feels like everybody is more pessimistic than ever. Everyday, somebody says the world will end. Climate change, AI takeover, when will it end?! This hackathon is your chance to address this problem by building an app.</p>
                <p className="text-center mt-8 text-blue-600 hover:text-blue-700 font-mono"><a href="/about">Learn More</a></p>
              </ScrollAnimation>
            </div>
          </div>
          <div id="prizes" className="my-16">
            <ScrollAnimation>
              <Prizes/>
            </ScrollAnimation>
          </div>
          <div id="sponsors" className="p-8 bg-gray-800 mt-16 overflow-hidden">
            <ScrollAnimation>
              <h1 className="mb-16 text-color text-center text-4xl font-extrabold text-color">Sponsors</h1>
              <h2 className="text-center">Coming Soon!</h2>
            </ScrollAnimation>
          </div>
        </div>
    </>
  );
};