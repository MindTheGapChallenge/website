import "./PersonCard";
import PersonCard from "./PersonCard";
import aarush from "./Aarush_Tulsyan.png"
import krishiv from "./KrishivPiduri.jpg";
import sample from "./sample.png"
export default function Team () {
    return (
        <section className="bg-gray-900">
            <h3 className="text-center text-white mt-20 text-4xl font-bold">Our Awesome Team</h3>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 flex-col grid gap-4 grid-cols-3">
                <PersonCard Name={"Krishiv Piduri"} Role={"Founder and CEO"} Image={krishiv}/>
                <PersonCard Name={"Aarush Tulsyan"} Role={"Mentor"} Image={aarush}/>
                <PersonCard Name={"Shiv Mahajan"} Role={"CMO"} Image={sample}/>
            </div>
        </section>
);
}