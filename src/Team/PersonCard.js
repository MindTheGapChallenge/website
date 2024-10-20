// A card for each person in the team
// Includes an image of the person and the person's role
// Uses tailwindcss
import React from 'react';
export default function PersonCard({Name, Image, Role}) {
    return (
        <div className="text-center text-gray-400 flex-1 my-10 animatex">
            <img className="mx-auto mb-4 w-36 h-36 rounded-full"
                 src={Image}
                 alt={Name}/>
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                {Name}
            </h3>
            <p>{Role}</p>
        </div>
    )
}