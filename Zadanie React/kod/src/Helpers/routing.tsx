import React from "react";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import Clicker from "../pages/Clicker";
import Contact from "@/pages/Contact";


interface RouteItem {
    path: string
    element: React.JSX.Element
    label: string
}

export const routes: RouteItem[] = [
    {
        path: "/",
        element: <Home />,
        label: "Home",
    },
    {
        path: "/about-us",
        element: <AboutUs />,
        label: "About Us"
    },
    {
        path: "/clicker",
        element: <Clicker />,
        label: "Clicker"
    },
    {
        path: "/contact",
        element: <Contact />,
        label: "Contact"
    }
]