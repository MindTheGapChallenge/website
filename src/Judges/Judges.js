import RaviLaudya from "./ravi-laudya.jpg";
import SujayJain from "./sujay-jain.jpg";
import Bhanuprakash from "./Bhanuprakash_Maduputi.jpeg";
import KK from "./KK-Picture.png";
import Arun from "./Arunkumar_Photo.JPG";
import DeepikaNathany from './DeepikaNathany.jpeg';
import React from "react";

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
            <h1 className="mb-8 text-white my-8 text-center text-4xl font-extrabold font-mono">Judges</h1>
            <div className={'py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 flex-col grid gap-4 grid-cols-3'}>
                <Judge image={RaviLaudya} name={"Ravi Laudya"} description={"Development Expert at SAP Concur"}/>
                <Judge image={Bhanuprakash} name={"Bhanuprakash Madupati"} description={"Technology Leader & Senior Software Engineer"}/>
                <Judge image={SujayJain} name={"Sujay Jain"} description={"Senior Software Engineer, Netflix"}/>
                <Judge image={KK} name={"Kumar Koduvayur Krishnamurthy"} description={"Technology Strategist and Innovator"}/>
                <Judge image={Arun} name={"Arun Kumar"} description={""}/>
                <Judge image={DeepikaNathany} name={"Deepika Nathany"} description={"Application Manager, Meta"}/>
            </div>
        </>
    );
}