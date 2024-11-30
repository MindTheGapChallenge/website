import GlitchLogo from './GlitchLogo_Color_Wordmark.png';

function Prize ({ img, name, value, sponsor }) {
    return (
        <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full mx-auto">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg mx-6 bg-white p-4" src={img} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Value: {value}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Sponsored By {sponsor}</p>
            </div>
        </a>
    );
}

export default function Prizes() {
    return (
        <div id="prizes" className="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='h-20 mx-auto'><path fill="#00ff81" d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>
            <h1 className="mb-8 text-color my-8 text-center text-4xl font-extrabold text-color font-mono">Prizes</h1>
            <Prize img={GlitchLogo} name={"3 Glitch Pro Subscriptions"} value={"$288"} sponsor={"Glitch"}/>
        </div>
    );
}