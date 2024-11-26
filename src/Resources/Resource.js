export default function Resource({title, description}) {
    return (
        <a
           className="w-full flex flex-col items-center rounded-lg shadow md:flex-row border-gray-700 bg-gray-800 hover:shadow-2xl">
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-400">{description}</p>
            </div>
        </a>
    );
}