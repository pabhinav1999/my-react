import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact"
import RestaurantDetails from "./components/RestaurantDetails";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";




const App = () => {
    return (
        <div className="app-container">
            <Header></Header>
            <Outlet></Outlet>
            <h1>footer</h1>
        </div>
    )
}

const appRouter =  createBrowserRouter( [
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantDetails /> 
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('app-content'));
root.render (<RouterProvider router={appRouter} />)
