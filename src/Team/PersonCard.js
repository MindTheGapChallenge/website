// A card for each person in the team
// Includes an image of the person and the person's role
// Uses tailwindcss
import React from 'react';
import img from "./sample.jpg";

export default function PersonCard({Name, Image, Role}) {
    return (
        <div className="text-center text-gray-500 dark:text-gray-400 flex-1 my-10 animatex">
            <img className="mx-auto mb-4 w-36 h-36 rounded-full"
                 src={Image}
                 alt="Neil Avatar"/>
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">{Name}</a>
            </h3>
            <p>{Role}</p>
        </div>
    )
}