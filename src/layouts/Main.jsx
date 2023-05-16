import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer.jsx/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;