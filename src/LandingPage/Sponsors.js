function Sponsor ({ name }) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src="https://via.placeholder.com/400" alt="" />
            <div className="p-2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </div>
        </div>
    );
}

export default function Sponsors () {
    return (
        <section className="">
            <h3 className="text-center text-4xl font-bold text-color">Our Sponsors</h3>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <p className="text-center mx-auto text-color">The MindTheGap Challenge is completely free to enter. Thus, it requires your support. Take a look at our sponsorship prospectus to learn more about why you should sponsor and where you can contact us.</p>
                <a href="https://www.mtgchallenge.org/static/MindTheGap%20Challenge%20Sponsor%20Prospectus.pdf" target="_blank">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-16">
                        View Prospectus
                    </button>
                </a>
            </div>
        </section>
    );
}