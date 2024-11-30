import GlitchLogo from './GlitchLogo_Color_Wordmark.png';

function Sponsor ({ img }) {
    return (
        <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow p-5 mx-auto">
            <a href="#">
                <img className="rounded-t-lg" src={img} alt=""/>
            </a>
        </div>
    );
}

export default function Sponsors() {
    return (
        <>
            <h1 className="mb-8 text-color text-center text-4xl font-extrabold text-color font-mono">Sponsors</h1>
            <Sponsor img={GlitchLogo}/>
        </>
    );
}