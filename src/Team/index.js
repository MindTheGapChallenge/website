import "./PersonCard";
import PersonCard from "./PersonCard";
import img from "./sample.jpg";
export default function Team () {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 flex-col grid gap-4 grid-cols-3">
                <PersonCard Name={"Krishiv Piduri"} Role={"Head Organizer"} Image={img}/>
                <PersonCard Name={"Aarush Tulsyan"} Role={"Mentor"} Image={img}/>
                <PersonCard Name={"Shiv Mahajan"} Role={"Co Presentation Builder"} Image={img}/>
                <PersonCard Name={"Arjun Averneni"} Role={"Co Presentation Builder"} Image={img}/>
                <PersonCard Name={"Adwik Rath"} Role={"Did stuff too (probably)"} Image={img}/>
            </div>
        </section>
);
}