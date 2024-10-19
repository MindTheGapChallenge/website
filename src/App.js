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

function Layout ({children}) {
  return <div className='md:px-8 px-4 mt-16'>{children}</div>
}

const router=createBrowserRouter([
  {
    path:"/about",
    element:<Layout><About/></Layout>
  },
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"*",
    element:<Layout><Error404/></Layout>
  },
  {
    path:"/faq",
    element:<Layout><Faq/></Layout>
  },
  {
    path:"/register",
    element:<Layout><Register/></Layout>
  },
  {
    path:"/prizes",
    element:<Layout><Prizes/></Layout>
  },
  {
    path:"/team",
    element:<Layout><Team/></Layout>
  }
])

function App() {
  return (
    <div id="App dark">
      <Navigation/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
