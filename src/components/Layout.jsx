import {Header} from "./Header.jsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
        <Header/>
            <div className="main">
                <Outlet/>
            </div>
            <div className="footer"><a href="https://t.me/uu_mrts">made by Ular</a></div>

        </>
    )
}