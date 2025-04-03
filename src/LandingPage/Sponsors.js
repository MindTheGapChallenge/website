import GlitchLogo from './GlitchLogo_Color_Wordmark.png';
import WolframLogo from './wolfram-corporate-logo-horz-lg.png';
import FlatLogicLogo from './Flatlogic_New_White.png'

function Sponsor ({ img }) {
    return (
        <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-10 p-5 mx-auto">
            <img className="rounded-t-lg" src={img} alt=""/>
        </div>
    );
}

export default function Sponsors() {
    return (
        <>
            <h1 className="mb-8 text-color text-center text-4xl font-extrabold text-color font-mono">Sponsors</h1>
            <Sponsor img={GlitchLogo}/>
            <Sponsor img={FlatLogicLogo}/>
            <Sponsor img={WolframLogo}/>
        </>
    );
}