import { Outlet } from "react-router"
import Header from "../header/Header"
import SideBar from "../sideBar/sideBar"
import Footer from "../footer/Foot"
import style from "./layout.modlue.css"

const Layout = () =>{
    return(
        <div className={style.layOutWrapper}>
            <Header/>
            <div className={style.sideBarOutLet}>
                <SideBar/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;