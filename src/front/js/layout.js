import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";


import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { LandingPage } from "./pages/landingpage";


import { Welcome } from "./pages/welcome";


import { Pedidos } from "./pages/pedidos";
import { ResumenPedido } from "./pages/resumenPedido";

import {Login} from "./pages/Login";
import { SignUp } from "./pages/SignUp";

import Interfaz from "./pages/interfaz";

import { SeleccionarMesa } from "./pages/SeleccionarMesa";
import {Menu} from "./pages/Menu";
import {CamareroInterfaz} from "./pages/CamareroInterfaz";
import {EditProfile_Staff} from "./pages/EditProfile_Staff";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>

                    <Routes>

                        <Route element={<LandingPage />} path="/" />


                        <Route element={<Welcome />} path="/welcome" />
                      
                        <Route element={<SeleccionarMesa />} path="/seleccionarMesa" />
                        <Route element={<Menu />} path="/Menu" />
                        <Route element={<ResumenPedido />} path="/resumenPedido" />

                        <Route element={<CamareroInterfaz />} path="/CamareroInterfaz" />
                        <Route element={<EditProfile_Staff />} path="/EditProfile_Staff" />


                        <Route element={<Login />} path="/Login" />
                        <Route element={<SignUp />} path="/SignUp" />
                       
                        <Route element={<Interfaz />} path="/interfaz" />



                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    {/*<Footer />*/}
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
