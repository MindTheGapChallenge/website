import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navigation from "./Navigation";
import About from "./About";
import Error404 from './404';
import Faq from "./faq";
import Register from "./Register";
import Home from './LandingPage';
import Prizes from "./LandingPage/Prizes";
import Team from "./Team";
import ContactUs from "./ContactUs"
import Sponsors from "./LandingPage/Sponsors";
import Resources from "./Resources";

function Layout ({children}) {
  return <div className='md:px-8 px-4 mt-16'>{children}</div>
}

const router=createBrowserRouter([
  {
    path:"/about",
    element: <>
      <Navigation />
      <Layout><About/></Layout>
    </>
  },
  {
    path:"/",
    element: <>
      <Navigation />
      <Home/>
    </>
  },
  {
    path:"*",
    element: <>
      <Navigation />
      <Layout><Error404/></Layout>
    </>
  },
  {
    path:"/sponsors",
    element: <>
      <Navigation />
      <Layout><Sponsors/></Layout></>
  },
  {
    path:"/resources",
    element: <>
      <Navigation />
      <Layout><Resources/></Layout>
    </>
  },
  {
    path:"/faq",
    element: <>
      <Navigation />
      <Layout><Faq/></Layout>
    </>
  },
  {
    path:"/register",
    element: <>
      <Navigation />
      <Layout><Register/></Layout>
    </>
  },
  {
    path:"/prizes",
    element: <>
      <Navigation />
      <Layout><Prizes/></Layout>
    </>
  },
  {
    path:"/team",
    element: <>
      <Navigation />
      <Layout><Team/></Layout>
    </>
  },
  {
    path:"/contact-us",
    element: <>
      <Navigation />
      <Layout><ContactUs/></Layout>
    </>
  },
  {
    path:"/sponsors",
    element: <>
      <Navigation />
      <Layout><Sponsors/></Layout>
    </>
  },
  {
    path:"/prizes",
    element: <>
      <Navigation />
      <Layout><Prizes/></Layout>
    </>
  },
])

function App() {
  return (
      <div id="App dark">
        <RouterProvider router={router}/>
      </div>
  );
}

export default App;