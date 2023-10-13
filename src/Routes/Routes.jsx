
import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
// import Career from "../Pages/Career/Career";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Profile from "../Pages/Profile/Profile";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Contact from "../Pages/Contact/Contact";
import Details from "../Pages/Home/Details";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
// import NewsDetails from "../Pages/NewsDetails/NewsDetails";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('/Data.json')
                
            },
            {
                path: "/Data/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ()=> fetch('/Data.json')

            },
            
            {
                path: "/about",
                element: <About></About>
            },

            {
                path:"/profile",
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path:"/dashboard",
                element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
            },
            
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }

        ]
    }
])

export default Routes;