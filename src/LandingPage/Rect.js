export default function Rect ({text, img, description, learnMore}) {
    return (
        <div className="hover:shadow-inner shadow-lg shadow-green-600/50 rounded-lg my-16 lg:mx-auto m-4 w-auto flex-1 border-green-500/12 border-2">
            <img src={img} className='text-center mx-auto mt-4 w-20' alt={"Icon"}/>
            <h3 className="text-center mt-6 md:text-2xl text-xl text-bold text-color font-semibold font-mono">{text}</h3>
            <p className="text-center text-green-400 p-6 font-mono">{description}</p>
            {learnMore && <a href={learnMore} className="text-blue-600 hover:text-blue-700 font-mono mx-auto text-center block mt-6">Learn More</a>}
        </div>
    )
}