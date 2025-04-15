import React from "react";
import EventCard from "./Event";

const EventsSection = () => {
    return (
        <div className="py-10 bg-gray-900 text-white">
            <h1 className="text-4xl font-bold text-center text-terminal-green">Upcoming Events</h1>
            <div className="mt-6 flex flex-wrap justify-center gap-6">

                <EventCard>
                    {/*<img src="/images/hackathon.jpg" alt="Hackathon" className="rounded-lg mb-4 w-full h-40 object-cover" />*/}
                    <h2 className="text-2xl font-bold text-terminal-green">Panda Hacks x MindTheGap Challenge</h2>
                    <p className="text-sm text-gray-400">May 25 - June 29, 2025 | Online</p>
                    <p className="mt-2 text-gray-300">Join us at the global hackathon for a legendary collaboration between Panda Hacks and MindTheGap. The theme is education. Participants will build websites and apps that will help students and improve their productivity in some manner. We have the following 3 tracks:</p>
                    <ol className="ml-4 list-decimal text-gray-300 pt-4">
                        <li>Agentic AI</li>
                        <li>Game Design</li>
                        <li>No/Low code</li>
                    </ol>
                    <a href="https://manage.devpost.com/challenges/24847-panda-hacks-x-mindthegap-challenge/dashboard/submissions" target="_blank" rel="noopener noreferrer"
                       className="mt-4 inline-block bg-terminal-green text-blue-600 hover:text-[var(--text-color)] hover:bg-blue-600 font-semibold px-4 py-2 rounded-lg transition">
                        Register Now
                    </a>

                </EventCard>
            </div>
        </div>
    );
};

export default EventsSection;
