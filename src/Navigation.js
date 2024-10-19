import Logo from './icon.webp';
function Navigation () {
    return (
      <>

<nav className="border-gray-700 bg-stone-950 fixed top-0 w-full h-16 shadow-2xl" style={{zIndex:1000}}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={Logo} alt="Logo" className='rounded-full h-8'/>
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-mono">MindTheGapHack</span>
    </a>
    <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-800 md:space-x-8 md:flex-row md:mt-0 md:bg-transparent">
        <li>
          <a href="/" className="block py-2 px-3 md:p-0 text-white bg-green-600 rounded md:bg-transparent md:text-green-500 font-mono" aria-current="page">Home</a>
        </li>
        <li>
          <a href="/about" className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 font-mono">About</a>
        </li>
        <li>
          <a href="/faq" className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 font-mono">FAQ</a>
        </li>
        <li>
          <a href="/register" className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 font-mono">Register</a>
        </li>
        <li>
          <a href="/prizes" className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 font-mono">Prizes</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</>
    )
}
export default Navigation;