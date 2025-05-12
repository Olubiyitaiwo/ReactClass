import {createBrowserRouter} from "react-router"
import SignUp from "../component/Authenticate/SignUp/signup"
import Login from "../component/Authenticate/Login/login"
import Layout from "../component/layout/Layout"
import NowPlaying from "../component/movies/NowPlaying"

const router = createBrowserRouter([

      {
    path: "",
    element: <SignUp/>

},
    {
    path: "/signUp",
    element: <SignUp/>
},
   {
    path: "/login",
    element: <Login/>
},

{
    path: "/home",
    element: <Layout/>,
    children:[
        {
            path: "",
            element: <NowPlaying/>
        }
    ]
}

])

export default router