import SujayJain from "./sujay-jain.jpg";
import Bhanuprakash from "./Bhanuprakash_Maduputi.jpeg";
import DeepikaNathany from './DeepikaNathany.jpeg';
import React from "react";
import Siri from "./large.png";

function Judge ({name, image, description}) {
    return (
        <div className="text-center text-gray-400 flex-1 my-10 animatex">
            <img className="mx-auto mb-4 w-36 h-36 rounded-full"
                 src={image}
                 alt={name}/>
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                {name}
            </h3>
            <p>{description}</p>
        </div>
    );
}

export default function Judges() {
    return (
        <>
            <h1 className="mb-8 text-white my-8 text-center text-4xl font-extrabold font-mono">Our Team of Expert Judges</h1>
            <div className={'py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 flex-col grid gap-4 grid-cols-3'}>
                <Judge image={Bhanuprakash} name={"Bhanuprakash Madupati"} description={"Technology Leader & Senior Software Engineer, Minnesota DOC"}/>
                <Judge image={SujayJain} name={"Sujay Jain"} description={"Senior Software Engineer, Netflix"}/>
                <Judge image={DeepikaNathany} name={"Deepika Nathany"} description={"Application Manager, Meta"}/>
                <Judge image={Siri} name={"Siri Varma Vegiraju"} description={"Tech Lead, Microsoft"}/>
            </div>
        </>
    );
}