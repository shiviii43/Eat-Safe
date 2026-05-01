import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <div className=" flex flex-col min-h-screen overflow-x-hidden">
            <Header/>
            <main className="flex-1 min-w-0">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;