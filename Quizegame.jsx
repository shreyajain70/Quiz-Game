import React from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import { Header } from "./Components/Header";
import { Body } from "./Components/Body";
import { Footer } from "./Components/Footer";
import { AboutUs } from "./Components/AboutUs";
import { Contact } from "./Components/Contact";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";


const Quiz_Page = () => {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}
const appRouter = createBrowserRouter([{
  path:"/",element:<Quiz_Page></Quiz_Page>,
  children:[
    {
      path:"/",element:<Body></Body>
    },
    {
      path:"/AboutUs",element:<AboutUs></AboutUs>
    },
    {
      path:"/Contact",element:<Contact></Contact>
    }

  ]
}])

let Root = createRoot(document.getElementById("root"));
Root.render(<RouterProvider router={appRouter}></RouterProvider>)