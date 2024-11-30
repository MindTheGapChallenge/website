import { useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
      <>
        <nav className="border-gray-700 bg-stone-950 fixed top-0 w-full h-16 shadow-2xl" style={{ zIndex: 1000 }}>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 512 512" className="h-6">
                <path fill="#00ff81"
                      d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/>
              </svg>
              <span
                  className="self-center text-2xl font-semibold whitespace-nowrap text-color font-mono">MindTheGapHack</span>
            </a>
            <button data-collapse-toggle="navbar-solid-bg" type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"}
                      d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
              <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-800 md:space-x-8 md:flex-row md:mt-0 md:bg-transparent">
                <li>
                  <a href="/"
                     className={`block py-2 px-3 md:p-0 text-white rounded ${currentPath === '/' ? 'bg-green-600 md:bg-transparent md:text-green-500' : 'hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500'} font-mono`}
                     aria-current="page">Home</a>
                </li>
                <li>
                  <a href="/about"
                     className={`block py-2 px-3 md:p-0 text-white rounded ${currentPath === '/about' ? 'bg-green-600 md:bg-transparent md:text-green-500' : 'hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500'} font-mono`}>About</a>
                </li>
                <li>
                  <a href="/prizes"
                     className={`block py-2 px-3 md:p-0 text-white rounded ${currentPath === '/contact-us' ? 'bg-green-600 md:bg-transparent md:text-green-500' : 'hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500'} font-mono`}>Prizes</a>
                </li>
                <li>
                  <a href="/sponsors"
                     className={`block py-2 px-3 md:p-0 text-white rounded ${currentPath === '/contact-us' ? 'bg-green-600 md:bg-transparent md:text-green-500' : 'hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500'} font-mono`}>Sponsors</a>
                </li>
                <li>
                  <a href="/faq"
                     className={`block py-2 px-3 md:p-0 text-white rounded ${currentPath === '/faq' ? 'bg-green-600 md:bg-transparent md:text-green-500' : 'hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500'} font-mono`}>FAQ</a>
                </li>
                <li>
                  <a href="/register"
                     className={`block py-2 px-3 md:p-0 text-white rounded ${currentPath === '/register' ? 'bg-green-600 md:bg-transparent md:text-green-500' : 'hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500'} font-mono`}>Register</a>
                </li>
                <li>
                  <a href="/team"
                     className={`block py-2 px-3 md:p-0 text-white rounded ${currentPath === '/team' ? 'bg-green-600 md:bg-transparent md:text-green-500' : 'hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500'} font-mono`}>Team</a>
                </li>
                <li>
                  <a href="/contact-us"
                     className={`block py-2 px-3 md:p-0 text-white rounded ${currentPath === '/contact-us' ? 'bg-green-600 md:bg-transparent md:text-green-500' : 'hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500'} font-mono`}>Contact
                    Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
  );
}

export default Navigation;