// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const RootLayout = () => {
    return (
        <div>

            <Navbar></Navbar>

            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>


            <div className="mt-10">
                <Footer></Footer>
            </div>


        </div>
    );
};

export default RootLayout;